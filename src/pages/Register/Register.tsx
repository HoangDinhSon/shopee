import { SubmitHandler, useForm, type SubmitErrorHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import getRules from 'src/utils/rules'
import Input from 'src/components/Input'
interface IFormInput {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<IFormInput>()
  const rules = getRules(getValues)
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log("submit pass valisate ", data)
  const errorSubmit: SubmitErrorHandler<IFormInput> = (data) => console.log("error", data);


  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={handleSubmit(onSubmit, errorSubmit)} noValidate>
              <div className='text-2xl'> Đăng Ký</div>
              <div className='mt-8'>
                <Input
                  register={register('email', {
                    ...rules.email
                  })}

                  type='email'
                  name='email'
                  placeholder='Email'
                />
                <div className='mt-1 text-red-600 text-sm .min-h-[1.1rem]'>{errors.email?.message}</div>
              </div>
              <div className='mt-3'>
                <Input
                 register=  {register('password', rules.password)}
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                <div className='mt-1 text-red-600 text-sm .min-h-[1rem]'>{errors.password?.message}</div>
              </div>
              <div className='mt-3'>
                <Input
                 register=  {register('confirm_password', { ...rules.confirm_password })}
                  type='password'
                  name='confirm_password'
                  autoComplete='on'
                  placeholder='Confirm Password'
                />
                <div className='mt-1 text-red-600 text-sm .min-h-[1rem]'>{errors.confirm_password?.message}</div>
              </div>
              <div className='mt-3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng Ký
                </button>
              </div>

              <div className='flex items-center justify-center mt-8'>
                <span className='text-slate-400'>Bạn đã có tài khoản</span>
                <Link className='text-red-400 ml-1' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
