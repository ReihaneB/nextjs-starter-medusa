"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: 'Informations sur l\'article',
      component: <ProductInfoTab product={product} />,
    },
    {
      label: 'Livraison & retours',
      component: <ShippingInfoTab />,
    },
  ];

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  return (
    <div className="text-small-regular py-8 text-white">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Matière</span>
            <p>{product.material ? product.material : '-'}</p>
          </div>
          <div>
            <span className="font-semibold">Fabriqué à la main en</span>
            <p>{product.origin_country ? product.origin_country === 'FR' && 'France' : '-'}</p>
          </div>
          {product.tags?.length ? (
            <div>
              <span className="font-semibold">Tags</span>
              <p>{product.tags.map(tag => tag.value).join(', ')}</p>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type ? product.type.value : '-'}</p>
          </div>
          <div>
            <span className="font-semibold">Poids</span>
            <p>{product.weight ? `${product.weight} g` : '-'}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

function InfoItem({ Icon, title, content } : { Icon: any; title: string; content: string }) {
  return (
    <div className="flex items-start gap-x-2">
      <div>
        <Icon />
      </div>
      <div>
        <span className="font-semibold">{title}</span>
        <p className="text-sm">
          {content}
        </p>
      </div>
    </div>
  );
}

const Info = [
  {
    icon: FastDelivery,
    title: 'Délai de livraison',
    content: 'Une fois votre commande passée, votre bijou sera produit spécialement pour vous. Veuillez noter que le délai de production est de 21 jours. Votre colis sera ensuite expédié à votre adresse.',
  },
  {
    icon: Refresh,
    title: 'Échange simple',
    content: 'Si votre bijou ne correspond pas tout à fait à vos attentes, ne vous inquiétez pas. Nous échangerons votre produit pour un nouveau.',
  },
  {
    icon: Back,
    title: 'Retour facile',
    content: 'Retournez simplement votre produit et nous vous rembourserons intégralement. Aucune question posée – nous ferons de notre mieux pour que votre retour soit sans tracas.',
  },
];

function ShippingInfoTab() {
  return (
    <div className="text-small-regular py-8 text-white">
      <div className="grid grid-cols-1 gap-y-8">
        {Info.map((info, i) => (
          <InfoItem
            key={i}
            Icon={info.icon}
            title={info.title}
            content={info.content}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductTabs
