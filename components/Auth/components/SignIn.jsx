
import Button from '@/components/UI & Layout/Form/Button'
import Input from '@/components/UI & Layout/Form/Input'
import { registerSchema } from '@/schema/register'
import { animated, useSpring } from '@react-spring/web'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { setCookie } from 'cookies-next';

const SignUp = ({setLogin}) => {

    const springs = useSpring({
        from: { x: -500 },
        to: { x: 0 },
      })

      const {reload} = useRouter()

      const [loading, setLoading] = useState(false)

      const onSubmit = async() => {
        try {
          const form = {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password
          }
          setLoading(true)
          const res = await axios.post(`${process.env.REQUEST}auth/signup`, form)
          if(!res.data.error) {
            toast.success(res.data.message, {position: 'bottom-center'})
            setLoading(false)
            localStorage.setItem('authToken', res.data.token);
            reload()
          }
        } catch (error) {
          toast.error(error.response.data.message.split(':')[1], {position: 'bottom-center'})
          setLoading(false)
        }
      };


      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
        initialValues: {
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        onSubmit,
        validationSchema: registerSchema,
        });

        const inputs = [
          {
            type : 'text',
            name: 'name',
            labelText: 'İsim',
            placeholder: 'İsim girin...',
            errors: errors.name,
            touched: touched.name,
            value: values.name,
          },
          {
            type : 'text',
            name: 'username',
            labelText: 'Kullanıcı Adı',
            placeholder: 'Kullanıcı Adı girin...',
            errors: errors.username,
            touched: touched.username,
            value: values.username,
          },
          {
            type : 'email',
            name: 'email',
            labelText: 'Email',
            placeholder: 'Email girin...',
            errors: errors.email,
            touched: touched.email,
            value: values.email,
          },
          {
            type : 'password',
            name: 'password',
            labelText: 'Şifre',
            placeholder: '**********',
            errors: errors.password,
            touched: touched.password,
            value: values.password,
          },
          {
            type : 'password',
            name: 'confirmPassword',
            labelText: 'Şifre Doğrulama',
            placeholder: '**********',
            errors: errors.confirmPassword,
            touched: touched.confirmPassword,
            value: values.confirmPassword,
          },
        ]

  return (
    <animated.div
        style={{...springs}}>
            <div className="mt-[40px] flex flex-col gap-[15px]">
            {inputs.map((input) => (
              <Input
              key={input.name}
              type={input.type}
              name={input.name}
              labelText={input.labelText}
              fontSize="14"
              placeholder={input.placeholder}
              value={input.value}
              errors={input.errors}
              touched={input.touched}
              onChange={handleChange}
              onBlur={handleBlur}/>
            ))}

            <Button
            title='Üye Ol'
            type='submit'
            disabled={loading}
            height='h-[50px]'
            onClick={() => handleSubmit()}
            />
        </div>
    </animated.div>
  )
}

export default SignUp