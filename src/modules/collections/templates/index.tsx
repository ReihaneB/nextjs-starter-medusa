import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import PageBlock from "widgets/PageBlock/PageBlock"

export default function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <PageBlock
      title={collection.title}
      layout="1-left-2-right"
      content={[
        <RefinementList sortBy={sortBy || "created_at"} />,
        <PaginatedProducts
          sortBy={sortBy || "created_at"}
          page={pageNumber}
          collectionId={collection.id}
          countryCode={countryCode}
        />,
      ]}
    />
  )
}
