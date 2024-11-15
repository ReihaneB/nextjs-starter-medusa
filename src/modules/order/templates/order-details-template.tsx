"use client"

import React from "react"
import { Button } from "@medusajs/ui"

import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import styles from "./OrderDetails.module.css"
import CartTotals from "@modules/common/components/cart-totals"

type OrderDetailsTemplateProps = {
  order: HttpTypes.StoreOrder
}

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
  order,
}) => {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      <div className="flex gap-2 justify-between items-center">
        <h2>Détails de la commande</h2>
        <LocalizedClientLink
          href="/account/orders"
          className="flex gap-2 items-center text-ui-fg-subtle hover:text-ui-fg-base"
          data-testid="back-to-overview-button"
        >
          <Button variant="secondary" className={styles.buttonSecondary}>
            Revenir à mes commandes
          </Button>
        </LocalizedClientLink>
      </div>
      <div
        className="flex flex-col gap-4 h-full w-full"
        data-testid="order-details-container"
      >
        <OrderDetails order={order} />
        <Items items={order.items} />
        <CartTotals totals={order} />
        <ShippingDetails order={order} />
        <Help />
      </div>
    </div>
  )
}

export default OrderDetailsTemplate
