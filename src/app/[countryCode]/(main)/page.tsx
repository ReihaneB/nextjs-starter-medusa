import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCategoriesWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Joaillerie moderne depuis 2021 • liome",
  description:
    "Découvrez notre collection de bijoux modernes et minimalistes. Livraison gratuite pour toute commande.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const categories = await getCategoriesWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!categories || !region) {
    return null
  }

  return (
    <>
      <Hero />
      {/* TODO: Add when products are render in categories */}
      {/* <div>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts categories={categories} region={region} />
        </ul>
      </div> */}
    </>
  )
}
