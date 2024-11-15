"use client"

import OrderCard from "../order-card"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import InteractiveLink from "@modules/common/components/interactive-link"

const OrderOverview = ({ orders }: { orders: HttpTypes.StoreOrder[] }) => {
  if (orders?.length) {
    return (
      <div className="flex flex-col gap-y-8 w-full">
        {orders.map((o) => (
          <div
            key={o.id}
            className="border-b border-gray-200 pb-6 last:pb-0 last:border-none"
          >
            <OrderCard order={o} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col gap-y-4"
      data-testid="no-orders-container"
    >
      <h3>Vous n’avez pas encore passé de commande.</h3>
      <span className="text-[var(--white-light)]">
        Changeons cela, utilisez le lien ci-dessous pour commencer à explorer
        nos articles !
      </span>
      <InteractiveLink href="/store">Découvrir nos articles</InteractiveLink>
    </div>
  )
}

export default OrderOverview
