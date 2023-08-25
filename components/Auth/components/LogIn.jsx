import Button from '@/components/UI & Layout/Form/Button'
import Input from '@/components/UI & Layout/Form/Input'
import { loginSchema } from '@/schema/login'
import { animated, useSpring } from '@react-spring/web'
import { useFormik } from 'formik'
import { FcGoogle } from 'react-icons/fc'

const LogIn = () => {

    const springs = useSpring({
        from: { x: -500 },
        to: { x: 0 },
      })




      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        
        validationSchema: loginSchema,
        });


  return (
    <animated.div
        style={{...springs}}>
            <form className="mt-[40px] flex flex-col gap-[15px]">
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
            />
        </form>

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
            />
        </animated.div>
  )
}

export default LogIn