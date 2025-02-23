import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type BaseTextFieldProps = {
  className?: string
}

type InputTextFieldProps = BaseTextFieldProps & {
  multiline?: false
} & InputHTMLAttributes<HTMLInputElement>

type TextareaTextFieldProps = BaseTextFieldProps & {
  multiline: true
} & TextareaHTMLAttributes<HTMLTextAreaElement>

type TextFieldProps = InputTextFieldProps | TextareaTextFieldProps

const TextField = ({ className = '', multiline, ...props }: TextFieldProps) => {
  if (multiline) {
    return (
      <textarea
        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={`${textFieldStyle} resize-none ${className}`}
      />
    )
  }
  
  return (
    <input
      {...(props as InputHTMLAttributes<HTMLInputElement>)}
      style={{ outline: 'none' }}
      className={`${textFieldStyle} h-8 ${className}`}
    />
  )
}

const textFieldStyle =
  'text-[13px] border-b-[1px] outline-hidden w-full border-b-neutral-200 duration-300 focus:border-b-black'

export default TextField