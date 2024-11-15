"use client"

import { Button, Heading } from "@medusajs/ui"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"

import useToggleState from "@lib/hooks/use-toggle-state"
import CountrySelect from "@modules/checkout/components/country-select"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import { HttpTypes } from "@medusajs/types"
import { addCustomerAddress } from "@lib/data/customer"
import styles from "./AddAddress.module.css"

const AddAddress = ({ region }: { region: HttpTypes.StoreRegion }) => {
  const [successState, setSuccessState] = useState(false)
  const { state, open, close: closeModal } = useToggleState(false)

  const [formState, formAction] = useFormState(addCustomerAddress, {
    success: false,
    error: null,
  })

  const close = () => {
    setSuccessState(false)
    closeModal()
  }

  useEffect(() => {
    if (successState) {
      close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successState])

  useEffect(() => {
    if (formState.success) {
      setSuccessState(true)
    }
  }, [formState])

  return (
    <>
      <button
        type="button"
        className="border bg-[#303134] text-[var(--white-light)] border-ui-border-base rounded-rounded p-5  w-full flex justify-between"
        onClick={state ? close : open}
        data-testid="add-address-button"
      >
        <span className="text-base-semi">Ajouter une nouvelle adresse</span>
      </button>
      {state && (
        <div>
          <form action={formAction}>
            <div className="flex flex-col gap-y-2">
              <div className="grid grid-cols-2 gap-x-2">
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
              </div>
              <Input
                label="Entreprise"
                name="company"
                autoComplete="organization"
                data-testid="company-input"
              />
              <Input
                label="Adresse"
                name="address_1"
                required
                autoComplete="address-line1"
                data-testid="address-1-input"
              />
              <Input
                label="Appartement, suite, etc."
                name="address_2"
                autoComplete="address-line2"
                data-testid="address-2-input"
              />
              <div className="grid grid-cols-[144px_1fr] gap-x-2">
                <Input
                  label="Code postal"
                  name="postal_code"
                  required
                  autoComplete="postal-code"
                  data-testid="postal-code-input"
                />
                <Input
                  label="Ville"
                  name="city"
                  required
                  autoComplete="locality"
                  data-testid="city-input"
                />
              </div>
              <Input
                label="Région"
                name="province"
                autoComplete="address-level1"
                data-testid="state-input"
              />
              <CountrySelect
                region={region}
                name="country_code"
                required
                autoComplete="country"
                data-testid="country-select"
              />
              <Input
                label="Téléphone"
                name="phone"
                autoComplete="phone"
                data-testid="phone-input"
              />
            </div>
            {formState.error && (
              <div
                className="text-rose-500 text-small-regular py-2"
                data-testid="address-error"
              >
                {formState.error}
              </div>
            )}
            <div className="flex gap-3">
              <Button
                type="reset"
                variant="secondary"
                onClick={close}
                className={styles.buttonSecondary}
                data-testid="cancel-button"
              >
                Annuler
              </Button>
              <SubmitButton data-testid="save-button">Enregistrer</SubmitButton>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default AddAddress
