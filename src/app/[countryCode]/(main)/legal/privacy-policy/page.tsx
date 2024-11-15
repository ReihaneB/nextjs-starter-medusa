import { Metadata } from 'next';

import LegalContent from 'widgets/LegalContent/LegalContent';

export const metadata: Metadata = {
  title: 'Politique de confidentialité • liome',
  description: 'Politique de confidentialité',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalContent
      title="Politique de confidentialité"
      content={
        [
          {
            name: 'Introduction',
            section: 'La présente Politique de confidentialité décrit la façon dont vos informations personnelles sont recueillies, utilisées et partagées lorsque vous vous rendez sur liome.fr (le « Site ») ou que vous y effectuez un achat.',
          },
          {
            name: 'Informations personnelles recueillies',
            section: 'Lorsque vous vous rendez sur le Site, nous recueillons certaines informations nécessaires à la création de votre compte client et au passage de commande. Nous ne recueillons pas de cookies, fichiers journaux ou pixels invisibles. Les informations personnelles que nous recueillons comprennent : \n- Votre nom\n- Votre adresse de facturation\n- Votre adresse d\'expédition\n- Vos informations de paiement (y compris les numéros de cartes de crédit via Stripe)\n- Votre adresse e-mail\n- Votre numéro de téléphone\n. Ces informations sont désignées par l’appellation « Informations sur la commande ».\nLorsque nous utilisons l\'expression « Informations personnelles » dans la présente Politique de confidentialité, nous faisons allusion aux Informations sur la commande.',
          },
          {
            name: 'Comment utilisons-nous vos informations personnelles ?',
            section: 'En règle générale, nous utilisons les Informations sur la commande que nous recueillons pour traiter toute commande passée par le biais du Site (y compris pour traiter vos informations de paiement, organiser l\'expédition de votre commande et vous fournir des factures et/ou des confirmations de commande). En outre, nous utilisons ces Informations sur la commande pour :\n- Communiquer avec vous ;\n- Évaluer les fraudes ou risques potentiels ;\n- Lorsqu\'elles correspondent aux préférences que vous nous avez communiquées, vous fournir des informations concernant nos produits ou services.\nNous utilisons Vercel Analytics pour analyser les données globales telles que le nombre d\'utilisateurs ou le chemin de comportement qu\'ils peuvent avoir sur le Site afin d\'améliorer et d\'optimiser notre Site.',
          },
          {
            name: 'Ne pas suivre',
            section: 'Veuillez noter que nous ne modifions pas la collecte de données de notre Site et nos pratiques d\'utilisation lorsque nous détectons un signal « Ne pas suivre » sur votre navigateur.',
          },
          {
            name: 'Vos droits',
            section: 'Que vous soyez résident(e) européen(ne) ou non, vous disposez d\'un droit d\'accès aux informations personnelles que nous détenons à votre sujet et vous pouvez demander à ce qu\'elles soient corrigées, mises à jour ou supprimées. Si vous souhaitez exercer ce droit, veuillez nous contacter au moyen des coordonnées précisées ci-dessous.\nPar ailleurs, si vous êtes résident(e) européen(ne), notez que nous traitons vos informations dans le but de remplir nos obligations contractuelles à votre égard (par exemple si vous passez une commande sur le Site) ou de poursuivre nos intérêts commerciaux légitimes, énumérés ci-dessus. Veuillez également noter que vos informations seront transférées hors de l\'Europe, y compris au Canada et aux États-Unis.',
          },
          {
            name: 'Rétention des données',
            section: 'Lorsque vous passez une commande par l\'intermédiaire du Site, nous conservons les Informations sur votre commande dans nos dossiers pendant 10 ans, sauf si et jusqu\'à ce que vous nous demandiez de les supprimer en nous contactant à hello@liome.fr.',
          },
          {
            name: 'Mineurs',
            section: 'Le Site n\'est pas destiné aux individus de moins de 18 ans. Si vous êtes mineur(e), vous devez obtenir l\'accord de vos parents pour utiliser notre Site et effectuer des achats.',
          },
          {
            name: 'Changements',
            section: 'Nous pouvons être amenés à modifier la présente politique de confidentialité de temps à autre afin d\'y refléter, par exemple, les changements apportés à nos pratiques ou pour d\'autres motifs opérationnels, juridiques ou réglementaires.',
          },
          {
            name: 'Nous contacter',
            section: 'Pour en savoir plus sur nos pratiques de confidentialité, si vous avez des questions ou si vous souhaitez déposer une réclamation, veuillez nous contacter par e-mail à hello@liome.fr, ou par courrier à l\'adresse suivante :\n128 rue la Boétie, Paris, 75008, France',
          },
        ]

    }
    />
  );
}
