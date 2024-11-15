import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"
import PageBlock from "widgets/PageBlock/PageBlock"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
      <div>
        {cart?.items?.length ? (
          <PageBlock
          title="Panier"
          layout="2-left-1-right"
          content={[
            <div className="flex flex-col gap-y-6">
              {!customer && (
              <>
                <SignInPrompt />
                <Divider />
              </>
              )}
            <ItemsTemplate items={cart?.items} />
            </div>,
            cart && cart.region && (
              <Summary cart={cart as any} />
            ),
          ]}
          />
        ) : (
          <PageBlock
            title="Panier vide"
            content={[
              <EmptyCartMessage />,
            ]}
          />
        )}
      </div>
  )
}

export default CartTemplate
