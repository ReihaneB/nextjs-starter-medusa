import { Button, Container } from "@medusajs/ui"
import { useMemo } from "react"

import Thumbnail from "@modules/products/components/thumbnail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import ChevronDown from "@modules/common/icons/chevron-down"

type OrderCardProps = {
  order: HttpTypes.StoreOrder
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return (
      order.items?.reduce((acc, item) => {
        return acc + item.quantity
      }, 0) ?? 0
    )
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items?.length ?? 0
  }, [order])

  return (
    <div key={order.id} data-testid="order-wrapper" data-value={order.id}>
      <LocalizedClientLink href={`/account/orders/details/${order.id}`}>
        <Container className="bg-[#303134] flex justify-between items-center p-4">
          <div className="grid grid-cols-3 grid-rows-2 text-small-regular gap-x-4 flex-1">
            <span className="font-semibold text-[var(--white-medium)]">
              Commande passée le
            </span>
            <span className="font-semibold text-[var(--white-medium)]">
              Numéro de commande
            </span>
            <span className="font-semibold text-[var(--white-medium)]">
              Total de la commande
            </span>
            <span
              data-testid="order-created-date"
              className="text-[var(--white-light)]"
            >
              {/* TODO: Change 'fr-FR' when adding translation support */}
              {new Date(order.created_at).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </span>
            <span
              data-testid="order-id"
              data-value={order.display_id}
              className="text-[var(--white-light)]"
            >
              #{order.display_id}
            </span>
            <span
              data-testid="order-amount"
              className="text-[var(--white-light)]"
            >
              {convertToLocale({
                amount: order.total,
                currency_code: order.currency_code,
              })}
            </span>
          </div>
          <button
            className="flex items-center justify-between text-[var(--white-light)]"
            data-testid="open-order-button"
            type="button"
          >
            <ChevronDown className="-rotate-90" />
          </button>
        </Container>
      </LocalizedClientLink>
    </div>
  )
}

export default OrderCard
