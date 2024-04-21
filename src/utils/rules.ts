import type { RegisterOptions } from 'react-hook-form'
type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
const rules: Rules = {
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
    }
  }
}
export default rules
