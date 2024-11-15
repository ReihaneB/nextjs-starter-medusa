import { Suspense } from "react"

import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"
import PageBlock from "widgets/PageBlock/PageBlock"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <PageBlock
      title="Tous les articles"
      layout="1-left-2-right"
      content={[
        <RefinementList sortBy={sortBy || 'created_at'} />,
        <PaginatedProducts
          sortBy={sortBy || 'created_at'}
          page={pageNumber}
          countryCode={countryCode}
        />,
      ]}
    />
  )
}

export default StoreTemplate
