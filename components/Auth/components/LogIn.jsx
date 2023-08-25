import Button from '@/components/UI & Layout/Form/Button'
import Input from '@/components/UI & Layout/Form/Input'
import { loginSchema } from '@/schema/login'
import { animated, useSpring } from '@react-spring/web'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { FcGoogle } from 'react-icons/fc'

const LogIn = () => {

    const springs = useSpring({
        from: { x: -500 },
        to: { x: 0 },
      })
      const {reload} = useRouter()
      const [loading, setLoading] = useState(false)

      const onSubmit = async() => {
        try {
          const form = {
            email: values.email,
            password: values.password
          }
          setLoading(true)
          const res = await axios.post(`${process.env.REQUEST}auth/login`, form)
          if(!res.data.error) {
            toast.success(res.data.message, {position: 'bottom-center'})
            setLoading(false)
            localStorage.setItem('authToken', res.data.token);
            reload()
          }
        } catch (error) {
          console.log(error)
          toast.error(error?.response?.data?.message.split(':')[1], {position: 'bottom-center'})
          console.log(error)
          setLoading(false)
        }
      };

      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit,
        validationSchema: loginSchema,
        });


  return (
    <animated.div
        style={{...springs}}>
            <div className="mt-[40px] flex flex-col gap-[15px]">
            <Input
            type='email'
            name='email'
            labelText='Email'
            fontSize="14"
            placeholder='Email girin...'
            value={values.email}
            errors={errors.email}
            touched={touched.email}
            onBlur={handleBlur}
            onChange={handleChange}
            />

            <Input
            type='password'
            name='password'
            labelText='Şifre'
            fontSize="14"
            placeholder='**********'
            value={values.password}
            errors={errors.password}
            touched={touched.password}
            onBlur={handleBlur}
            onChange={handleChange}
            />

            <Button
            type='submit'
            title='Giriş Yap'
            disabled={loading}
            onClick={() => onSubmit()}
            />
        </div>

        <div className="flex items-center justify-center gap-[10px]">
            <div  className="my-[40px] bg-secondary w-full h-[2px]" />
                <span className="text-secondary font-medium">veya</span>
            <div  className="my-[40px] bg-secondary w-full h-[2px]" />
        </div>


        <Button
            title='Google ile Giriş Yap'
            wfull={true}
            iconLeft={<FcGoogle size={25}/>}
            bgColor="secondary"
            hoverv2='hover:bg-graident'
            mt='0'
            disabled={loading}
            />
        </animated.div>
  )
}

export default LogIn