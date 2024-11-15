import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div className="mt-8">
      <p className="text-[var(--white-light)]">
        Nous avons envoyé un email de confirmation à{" "}
        <span
          className="text-ui-fg-medium-plus font-semibold"
          data-testid="order-email"
        >
          {order.email}
        </span>
        .
      </p>
      <p className="mt-2 text-[var(--white-light)]">
        Date de commande:{" "}
        <span data-testid="order-date">
          {/* TODO: Change 'fr-FR' when adding translation support */}
          {new Date(order.created_at).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
          })}
        </span>
      </p>
      <p className="mt-2 text-[var(--white-medium)]">
        Numéro de commande:{" "}
        <span data-testid="order-id">#{order.display_id}</span>
      </p>
      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        <p className="text-[var(--white-light)]">
          Statut de la commande:{" "}
          <span data-testid="order-status">
            {formatStatus(order.fulfillment_status)}
          </span>
        </p>
        <p className="text-[var(--white-light)]">
          Statut de paiement:{" "}
          <span data-testid="order-payment-status">
            {formatStatus(order.payment_status)}
          </span>
        </p>
      </div>
    </div>
  )
}

export default OrderDetails
