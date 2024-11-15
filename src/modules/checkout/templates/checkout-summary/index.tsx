import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"

const CheckoutSummary = ({ cart }: { cart: any }) => {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <h2>Votre commande</h2>
        <Divider />
        <CartTotals totals={cart} />
        <ItemsPreviewTemplate items={cart?.items} />
      </div>
    </div>
  )
}

export default CheckoutSummary
