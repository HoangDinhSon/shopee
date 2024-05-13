import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

export type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
import { object, string, InferType, ref } from 'yup'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'email được yêu cầu '
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'email không đúng định dạng '
    },
    maxLength: {
      value: 160,
      message: 'độ dài từ 5 - 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'độ dài từ 5 - 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'password được yêu cầu '
    },
    maxLength: {
      value: 160,
      message: 'độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'độ dài từ 6 - 160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'confirm_password được yêu cầu '
    },
    maxLength: {
      value: 160,
      message: 'độ dài từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'độ dài từ 6 - 160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (confirmPassword) => confirmPassword === getValues('password') || 'Password không khớp'
        : undefined
  }
})

export const registerForm = object({
  email: string()
    .required('email được yêu cầu')
    .email('email không đúng định dạng ')
    .max(160, 'Email phải nhỏ hơn 160 kí tự')
    .min(5, 'Email phải lớn hơn 5 kí tự '),
  password: string()
    .required('Password được yêu cầu')
    .max(160, 'Password phải nhỏ hơn 160 kí tự')
    .min(5, 'Password phải lớn hơn 5 kí tự '),
  confirm_password: string()
    .required('Password được yêu cầu')
    .max(160, 'Password phải nhỏ hơn 160 kí tự')
    .min(5, 'Password phải lớn hơn 5 kí tự ')
    .oneOf([ref('password'), ''], 'Passwords phải khớp')
})
export type RegisterForm = InferType<typeof registerForm>

export default getRules
