import { Checkbox, Label } from "@medusajs/ui"
import React from "react"

type CheckboxProps = {
  checked?: boolean
  onChange?: () => void
  label: string
  name?: string
  "data-testid"?: string
}

const CheckboxWithLabel: React.FC<CheckboxProps> = ({
  checked = true,
  onChange,
  label,
  name,
  "data-testid": dataTestId,
}) => (
  <div className="flex items-center space-x-2 ">
    <input
      className="text-base-regular flex items-center gap-x-2"
      id="checkbox"
      role="checkbox"
      type="checkbox"
      checked={checked}
      aria-checked={checked}
      onClick={onChange}
      name={name}
      data-testid={dataTestId}
    />
    <Label
      htmlFor="checkbox"
      className="!transform-none !txt-medium text-[#F5F5F7]"
      size="large"
    >
      {label}
    </Label>
  </div>
)

export default CheckboxWithLabel
