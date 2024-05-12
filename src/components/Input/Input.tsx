import React from "react"
import type { UseFormGetValues } from "react-hook-form"
import { Rules } from "src/utils/rules"

interface InputProps {
  name?: String
  type?: React.HTMLInputTypeAttribute,
  placeholder?: String,
  register?: any
  autoComplete?: React.HTMLInputAutoCompleteAttribute
  // rules: Rules
}
export default function Input({ register, placeholder, type, autoComplete,  name }: InputProps) {
  return (
    <>
      <input
        {...register}
        type={type}
        name={name}
        autoComplete={autoComplete}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm '
        placeholder={placeholder}
      />
    </>
  )
}
