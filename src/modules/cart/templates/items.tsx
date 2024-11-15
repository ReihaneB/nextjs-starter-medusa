import repeat from "@lib/util/repeat"
import { HttpTypes } from "@medusajs/types"
import { Heading, Table } from "@medusajs/ui"

import Item from "@modules/cart/components/item"
import SkeletonLineItem from "@modules/skeletons/components/skeleton-line-item"

type ItemsTemplateProps = {
  items?: HttpTypes.StoreCartLineItem[]
}

const ItemsTemplate = ({ items }: ItemsTemplateProps) => {
  return (
 <Table className="bg-transparent hover:bg-transparent">
      <Table.Header className="border-t-0 bg-transparent hover:bg-transparent">
        <Table.Row className="text-[#F5F5F7] txt-medium-plus bg-transparent hover:bg-transparent first:bg-transparent first:hover:bg-transparent">
          <Table.HeaderCell className="!pl-0">Article</Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell>Quantité</Table.HeaderCell>
          <Table.HeaderCell className="hidden small:table-cell">
            Prix
          </Table.HeaderCell>
          <Table.HeaderCell className="!pr-0 text-right">
            Total
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body className="bg-transparent hover:bg-transparent">
          {items
            ? items
                .sort((a, b) => {
                  return (a.created_at ?? "") > (b.created_at ?? "") ? -1 : 1
                })
                .map((item) => {
                  return <Item key={item.id} item={item} />
                })
            : repeat(5).map((i) => {
                return <SkeletonLineItem key={i} />
              })}
      </Table.Body>
    </Table>
  )
}

export default ItemsTemplate
