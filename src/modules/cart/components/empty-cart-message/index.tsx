import { Text } from '@medusajs/ui';

import InteractiveLink from '@modules/common/components/interactive-link';

function EmptyCartMessage() {
  return (
    <div
      className="flex flex-col justify-center items-start text-[#F5F5F7]"
      data-testid="empty-cart-message"
    >
      <Text className="mt-4 mb-6 max-w-[32rem]">
        Vous n’avez rien dans votre panier. Changeons cela, utilisez
        le lien ci-dessous pour commencer à explorer nos articles !
      </Text>
      <div>
        <InteractiveLink href="/store">Découvrir nos articles</InteractiveLink>
      </div>
    </div>
  );
}

export default EmptyCartMessage;
