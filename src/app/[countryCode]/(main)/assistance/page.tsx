import { Metadata } from 'next';

import Assistance from 'pageComponent/Assistance/Assistance';

export const metadata: Metadata = {
  title: 'Assistance • liome',
  description: 'Nous sommes là pour vous aider',
};

export default function AssistancePage() {
  return <Assistance />;
}
