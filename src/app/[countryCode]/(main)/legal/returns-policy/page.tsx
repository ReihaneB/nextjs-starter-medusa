import { Metadata } from 'next';

import LegalContent from 'widgets/LegalContent/LegalContent';

export const metadata: Metadata = {
  title: 'Politique de retours • liome',
  description: 'Politique de retours',
};

export default function ReturnsPolicyPage() {
  return (
    <LegalContent
      title="Politique de retours"
      content={
        [
          { name: 'Introduction', section: 'Notre politique de retours dure 14 jours, conformément à la législation française. Si 14 jours se sont écoulés depuis la réception de votre achat, nous ne pouvons malheureusement offrir ni remboursement ni échange.' },
          { name: 'Conditions de retour', section: 'Pour pouvoir être retourné, votre article doit être inutilisé, non porté et dans l\'état où vous l\'avez reçu. Il doit également être dans son emballage d\'origine. Nous n\'acceptons pas les retours d\'articles comportant des pierres ou des émaux.\nLes frais de retour pour les retours volontaires sont à la charge du client. Cependant, si le produit est défectueux ou endommagé à la réception, les frais de retour seront à notre charge.\nPour compléter votre retour, nous exigeons un reçu ou une preuve d\'achat.' },
          { name: 'Éléments non remboursables', section: 'Les articles retournés doivent respecter les conditions suivantes : Les bijoux ne doivent pas comporter de rayures ni avoir été portés. Les articles doivent être retournés dans leur emballage d\'origine.' },
          { name: 'Processus de retour', section: 'Pour initier un retour, veuillez contacter notre service client à l\'adresse suivante : hello@liome.fr. Nous vous fournirons alors l\'adresse à laquelle renvoyer l\'article.' },
          { name: 'Remboursements', section: 'Une fois votre retour reçu et inspecté, nous vous enverrons un e-mail pour vous informer que nous avons bien reçu l\'article retourné. Nous vous notifierons également de l\'approbation ou du rejet de votre remboursement.\nSi votre remboursement est approuvé, il sera traité dans un délai de 2 jours après réception de l\'article retourné, et un crédit sera automatiquement appliqué à votre carte de crédit ou à votre méthode de paiement initiale. Le remboursement peut également se faire sous forme de bon d\'achat ou par échange avec un autre produit ou une autre taille. Si le prix diffère, la différence sera à régler en contactant notre service client.' },
          { name: 'Échanges', section: 'Nous acceptons les échanges sous les mêmes conditions que les retours, pour les mêmes raisons. Si vous devez échanger un article, veuillez nous contacter à hello@liome.fr pour initier la procédure. Le délai de traitement pour un échange est de 3 semaines, auquel s\'ajoutent 2 jours pour la livraison.' },
          { name: 'Expédition', section: 'Pour retourner votre produit, vous devez l\'envoyer à l\'adresse que nous vous fournirons après avoir contacté hello@liome.fr. Les frais de retour sont à votre charge, sauf en cas de produit défectueux ou endommagé à la réception.\nSi vous expédiez un article d\'une valeur supérieure à 75 €, nous vous recommandons d\'utiliser un service de suivi d\'expédition ou de faire assurer votre envoi. Nous ne garantissons pas la réception de votre article retourné.' },
        ]
    }
    />
  );
}
