"use client"

import { Button } from "@medusajs/ui"
import { isEqual } from "lodash"
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from "react"

import { useIntersection } from "@lib/hooks/use-in-view"
import Divider from "@modules/common/components/divider"

import MobileActions from "./mobile-actions"
import ProductPrice from "../product-price"
import { addToCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import RangeInput from '../RangeInput/RangeInput';

import styles from './ProductActions.module.css';
import OptionSelect from "../option-select/option-select";

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
}

const optionsAsKeymap = (variantOptions: HttpTypes.StoreProductVariant["options"]) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductActions({
  product,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const [size, setSize] = useState(55);
  const router = useRouter();

  const countryCode = useParams().countryCode as string

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])

  const actionsRef = useRef<HTMLDivElement>(null)

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
      countryCode,
      size,
    }).then(() => {
      router.push('/cart');
    }).catch(() => {
      setIsAdding(false);
    });

    setIsAdding(false)
  }

  return (
    <div className={styles.root} ref={actionsRef}>
    <div className={styles.main}>
    {(product.variants?.length ?? 0) > 1 && (
      <div className={styles.personnalization}>
        <div className="flex flex-col gap-y-4">
          {(product.options || []).map(option => (
            <div key={option.id}>
              <OptionSelect
                option={option}
                current={options[option.id]}
                updateOption={setOptionValue}
                title={option.title}
                data-testid="product-options"
                disabled={!!disabled || isAdding}
              />
            </div>
          ))}
        </div>
      </div>
      )}
      <RangeInput
        onChange={value => setSize(value)}
      />
      <div className={styles.header}>
        <h2 className={styles.title}>{product.title}</h2>
        <ProductPrice product={product} variant={selectedVariant}  />
      </div>
      <div>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!inStock || !selectedVariant || !!disabled || isAdding}
          className={styles.button}
          data-testid="add-product-button"
        >
          {!selectedVariant ?
            'Sélectionnez votre personnalisation' :
            !inStock ?
              'En rupture de stock' :
              'Commander'}
        </button>
      </div>
    </div>
  </div>
  )
}
