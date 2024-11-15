'use client';

import { useState } from 'react';

import Register from '@modules/account/components/register';
import Login from '@modules/account/components/login';

import styles from './LoginTemplate.module.css';

export enum LOGIN_VIEW {
  SIGN_IN = 'sign-in',
  REGISTER = 'register',
}

function LoginTemplate() {
  const [currentView, setCurrentView] = useState('sign-in');

  return (
    <div className={styles.root}>
      {currentView === 'sign-in' ? (
        <Login setCurrentView={setCurrentView} />
      ) : (
        <Register setCurrentView={setCurrentView} />
      )}
    </div>
  );
}

export default LoginTemplate;
