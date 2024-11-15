import { Container } from "@medusajs/ui"

import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import InteractiveLink from "@modules/common/components/interactive-link"

type OverviewProps = {
  customer: HttpTypes.StoreCustomer | null
  orders: HttpTypes.StoreOrder[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  return (
    <div data-testid="overview-page-wrapper">
      <div>
        <div className="text-xl-semi flex justify-between items-center mb-4">
          <span className="text-small-regular text-[var(--white-light)]">
            Connecté en tant que{" "}
            <span
              className="font-semibold"
              data-testid="customer-email"
              data-value={customer?.email}
            >
              {customer?.email}
            </span>
          </span>
        </div>
        <div className="flex flex-col py-8 border-t border-gray-200">
          <div className="flex flex-col gap-y-4 h-full col-span-1 row-span-2 flex-1">
            <div className="flex items-start gap-x-16 mb-6">
              <div className="flex flex-col gap-y-4">
                <h3>Profil</h3>
                <div className="flex items-end gap-x-2">
                  <span
                    className="text-3xl-semi text-[var(--white-light)] leading-none"
                    data-testid="customer-profile-completion"
                    data-value={getProfileCompletion(customer)}
                  >
                    {getProfileCompletion(customer)}%
                  </span>
                  <span className="uppercase text-base-regular text-[var(--white-medium)]">
                    Completés
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <h3>Adresses</h3>
                <div className="flex items-end gap-x-2">
                  <span
                    className="text-3xl-semi leading-none"
                    data-testid="addresses-count"
                    data-value={customer?.addresses?.length || 0}
                  >
                    {customer?.addresses?.length || 0}
                  </span>
                  <span className="uppercase text-base-regular text-[var(--white-medium)]">
                    enregistrées
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-2">
                <h3>Commandes récentes</h3>
              </div>
              <ul
                className="flex flex-col gap-y-4"
                data-testid="orders-wrapper"
              >
                {orders && orders.length > 0 ? (
                  orders.slice(0, 5).map((order) => {
                    return (
                      <li
                        key={order.id}
                        data-testid="order-wrapper"
                        data-value={order.id}
                      >
                        <LocalizedClientLink
                          href={`/account/orders/details/${order.id}`}
                        >
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
                                {new Date(order.created_at).toLocaleDateString(
                                  "fr-FR",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    weekday: "long",
                                  }
                                )}
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
                      </li>
                    )
                  })
                ) : (
                  <>
                    <span
                      data-testid="no-orders-message"
                      className="text-[var(--white-light)]"
                    >
                      Vous n’avez pas encore passé de commande. Changeons cela,
                      utilisez le lien ci-dessous pour commencer à explorer nos
                      articles !
                    </span>
                    <div>
                      <InteractiveLink href="/store">
                        Découvrir nos articles
                      </InteractiveLink>
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getProfileCompletion = (customer: HttpTypes.StoreCustomer | null) => {
  let count = 0

  if (!customer) {
    return 0
  }

  if (customer.email) {
    count++
  }

  if (customer.first_name && customer.last_name) {
    count++
  }

  if (customer.phone) {
    count++
  }

  const billingAddress = customer.addresses?.find(
    (addr) => addr.is_default_billing
  )

  if (billingAddress) {
    count++
  }

  return (count / 4) * 100
}

export default Overview
