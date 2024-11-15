import React from "react"

import UnderlineLink from "@modules/common/components/interactive-link"

import { HttpTypes } from "@medusajs/types"
import PageBlock from "widgets/PageBlock/PageBlock"
import AccountNav from '../components/account-nav';


interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode,
  title: string
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
  title,
}) => {
  return (
    <>
    {customer ? (
      <PageBlock
        title={title}
        layout="1-left-2-right"
        content={[
          <AccountNav />,
          children,
        ]}
      />
    ) : (
      <PageBlock
        title={title}
        content={[
          children,
        ]}
      />
    )}
    <div className="flex flex-row items-end justify-between small:border-t border-gray-200 py-12 gap-8">
      <div>
        <h3 className="mb-4">Une question ?</h3>
        <span className="txt-medium text-[var(--white-light)]">
          Vous pouvez trouver les questions et réponses fréquemment posées sur notre
          page d'assistance.
        </span>
      </div>
      <div>
        <UnderlineLink href="/assistance">
          Assistance
        </UnderlineLink>
      </div>
    </div>
  </>
  )
}

export default AccountLayout
