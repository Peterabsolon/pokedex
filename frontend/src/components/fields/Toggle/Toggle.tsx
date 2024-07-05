import cx from 'classnames'
import { InputHTMLAttributes } from 'react'

import { Field } from '~/components/ui'

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The field label, rendered above
   */
  label: string

  /**
   * Off label, rendeerd on the left
   */
  labelOff?: string

  /**
   * On label, rendered on the right
   */
  labelOn?: string

  /**
   * Is the toggle enabled?
   */
  checked?: boolean
}

export const Toggle = ({ name, label, labelOff, labelOn, checked, onChange, className, ...rest }: ToggleProps) => {
  return (
    <Field name={name} label={label}>
      <label htmlFor={name} className={cx('inline-flex cursor-pointer items-center', className)}>
        <input id={name} type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" {...rest} />

        {labelOff}

        <div
          className={cx(
            'relative h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-400 dark:border-slate-600 dark:bg-slate-700',
            'peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-500',
            "after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-['']",
          )}
        />

        {labelOn && <span className="ml-2">{labelOn}</span>}

        {/* <span className="ms-3 text-sm font-medium">{label}</span> */}
      </label>
    </Field>
  )
}
