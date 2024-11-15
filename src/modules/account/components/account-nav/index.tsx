/* eslint-disable react/require-default-props */
/* eslint-disable no-use-before-define */

'use client';

import { clx } from '@medusajs/ui';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

import { signout } from "@lib/data/customer"

import LocalizedClientLink from '@modules/common/components/localized-client-link';

function AccountNav() {
  const route = usePathname();
  const { countryCode } = useParams() as { countryCode: string };

  const handleLogout = async () => {
    await signout(countryCode);
  };

  return (
    <div className="mb-6">
      <div data-testid="account-nav">
        <div>
          <div className="text-base-regular">
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
              <li>
                <AccountNavLink
                  href="/account"
                  route={route!}
                  data-testid="overview-link"
                >
                  Vue d’ensemble
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/profile"
                  route={route!}
                  data-testid="profile-link"
                >
                  Profil
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/addresses"
                  route={route!}
                  data-testid="addresses-link"
                >
                  Adresses
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink
                  href="/account/orders"
                  route={route!}
                  data-testid="orders-link"
                >
                  Commandes
                </AccountNavLink>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  data-testid="logout-button"
                  className="text-[var(--white-medium)] hover:text-[var(--white-light)]"
                >
                  Se déconnecter
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
  'data-testid'?: string
}

function AccountNavLink({ href, route, children, 'data-testid': dataTestId }: AccountNavLinkProps) {
  const { countryCode }: { countryCode: string } = useParams();

  const active = route.split(countryCode)[1] === href;
  return (
    <LocalizedClientLink
      href={href}
      className={clx('text-[var(--white-medium)] hover:text-[var(--white-light)]', {
        'text-[var(--white-light)] font-semibold': active,
      })}
      data-testid={dataTestId}
    >
      {children}
    </LocalizedClientLink>
  );
}

export default AccountNav;
