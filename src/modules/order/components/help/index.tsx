import React from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

function Help() {
  // TODO: Modify the information when adding return conditions, etc.
  return (
    <div className="mb-6">
      <h2 className="mb-4 mt-6">Besoin d'aide ?</h2>
      <div className="text-base-regular text-[var(--white-light)]">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <LocalizedClientLink href="/assistance">
              Nous contacter
            </LocalizedClientLink>
          </li>
          <li>
            <LocalizedClientLink href="/legal/returns-policy">
              Retours et échanges
            </LocalizedClientLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
