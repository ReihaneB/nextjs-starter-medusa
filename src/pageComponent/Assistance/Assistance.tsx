import Link from 'next/link';

import Card from 'components/Card/Card';
import PageBlock from 'widgets/PageBlock/PageBlock';

import styles from './Assistance.module.css';

// TODO: Replace with actual data
const links = [
  {
    title: 'Politique de retours',
    href: '/legal/returns-policy',
  },
  {
    title: 'Politique de confidentialité',
    href: '/legal/privacy-policy',
  },
  {
    title: 'Conditions d\'utilisation',
    href: '/legal/terms-of-use',
  },
];

const questions = [
  {
    question: 'Comment puis-je modifier mon mot de passe ?',
    answer: 'Pour modifier votre mot de passe, rendez-vous dans les paramètres de votre compte.',
  },
  {
    question: 'Quels sont les délais de livraison ?',
    answer: 'Veuillez noter que le délai de production est de 21 jours. Votre colis sera ensuite expédié à votre adresse sous 2 à 3 jours.',
  },
  {
    question: 'Comment est acheminé mon colis ?',
    answer: 'Votre colis est acheminé par La Poste.',
  },
  {
    question: 'Quelles sont les conditions de retours ?',
    answer: 'Les retours sont gratuits sous 14 jours.',
  },
];

export default function Assistance() {
  return (
    <>
      <PageBlock
        title="Assistance"
        layout="2-left-1-right"
        content={[
          <Card
            title="Comment pouvons-nous vous aider ?"
            contentStyle={styles.contact}
          >
            <p>
              Vous pouvez envoyer un mail à
              {' '}
              <strong>hello@liome.fr</strong>
              .
            </p>
            <Link
              className={styles.button}
              href="mailto:hello@liome.fr"
              passHref
            >
              Nous contacter
            </Link>
          </Card>,
          <div className={styles.links}>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                passHref
                className={styles.link}
              >
                {link.title}
              </Link>
            ))}
          </div>,
        ]}
      />
      <Card
        title="Questions & Réponses"
        contentStyle={styles.questions}
      >
        {questions.map(question => (
          <Card
            key={question.question}
            title={question.question}
            backgroundColor="dark"
          >
            {question.answer}
          </Card>
        ))}
      </Card>
    </>
  );
}
