import { Metadata } from 'next';

import InteractiveLink from '@modules/common/components/interactive-link';

export const metadata: Metadata = {
  title: '404 • liome',
  description: 'Quelque chose s’est mal passé',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page non trouvée</h1>
      <p className="text-small-regular text-ui-fg-base">
        Le panier auquel vous avez tenté d’accéder n’existe pas. Effacez vos cookies et essayez
        encore.
      </p>
      <InteractiveLink href="/">Go to frontpage</InteractiveLink>
    </div>
  );
}
