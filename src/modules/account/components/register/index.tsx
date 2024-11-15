"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signup, null)

  return (
    <div className="max-w-sm flex flex-col items-center" data-testid="register-page">
      <p className="text-center text-base-regular text-[var(--white-medium)] mb-4">
        Créez votre profil Liome et accédez à une expérience d’achat améliorée.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Prénom"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Nom"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input label="Téléphone" name="phone" type="tel" autoComplete="tel" data-testid="phone-input" />
          <Input
            label="Mot de passe"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="text-center text-[var(--white-dark)] text-small-regular mt-6">
          En créant un compte, vous acceptez la
          {' '}
          <LocalizedClientLink
            href="/legal/privacy-policy"
            className="underline"
          >
            Politique de confidentialité
          </LocalizedClientLink>
          {' '}
          et
          {' '}
          <LocalizedClientLink
            href="/legal/terms-of-use"
            className="underline"
          >
            les conditions d’utilisation
          </LocalizedClientLink>
          {' '}
          de Liome.
        </span>
        <SubmitButton className="w-full mt-6" data-testid="register-button">
          Créer un compte
        </SubmitButton>
      </form>
      <span className="text-center text-[var(--white-light)] text-small-regular mt-6">
        Vous avez déjà un compte?
        {' '}
        <button
          type="button"
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Se connecter
        </button>
        .
      </span>
    </div>
  )
}

export default Register
