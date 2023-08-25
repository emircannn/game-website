
import Button from '@/components/UI & Layout/Form/Button'
import Input from '@/components/UI & Layout/Form/Input'
import { registerSchema } from '@/schema/register'
import { animated, useSpring } from '@react-spring/web'
import { useFormik } from 'formik'

const SignUp = ({setLogin}) => {

    const springs = useSpring({
        from: { x: -500 },
        to: { x: 0 },
      })


      const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
        useFormik({
        initialValues: {
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
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
            <form className="mt-[40px] flex flex-col gap-[15px]">
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
            />
        </form>
    </animated.div>
  )
}

export default SignUp