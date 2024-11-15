import { Text } from '@medusajs/ui';

import LocalizedClientLink from '@modules/common/components/localized-client-link';

import styles from './SignInPrompt.module.css';

function SignInPrompt() {
  return (
    <div className="flex justify-between">
      <div>
        <h3>
          Souhaitez-vous une meilleure expérience ?
        </h3>
        <Text className="txt-medium mt-2 text-[#F5F5F7]">
          Connectez vous pour avoir accès à vos commandes et informations personnelles.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account" className={styles.link}>
          Se connecter
        </LocalizedClientLink>
      </div>
    </div>
  );
}

export default SignInPrompt;
