import { Metadata } from 'next';

import LoginTemplate from '@modules/account/templates/login-template';

export const metadata: Metadata = {
  title: 'Connexion • liome',
  description: 'Consultez et mettez à jour vos informations personnelles, vos commandes et vos adresses.',
};

export default function Login() {
  return <LoginTemplate />;
}
