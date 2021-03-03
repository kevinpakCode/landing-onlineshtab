import  Head from 'next/head'
import Styles from '../../styles/admin/login.module.scss'
import FormCard from './../../components/card/form-card'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const AdminLogin = () => {

  //Validation form
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Введите правильный адрес электронной почты').required('Обязательно поля'),
      password: Yup.string().required('Обязательно поля'),
      rememberMe: Yup.boolean(),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/uploads/favshtab.png" />
      </Head>
      <div className={Styles.loginWrap}>
        <main className="main">
          <FormCard className="login">
            <div className={Styles.loginBody}>
              <form onSubmit={formik.handleSubmit} className="cpn-form-control">
                <div className="form-row">
                  <input
                    type="text"
                    className={`cpn-field ${formik.touched.email && formik.errors.email ? 'cpn-field--error': 'cpn-field--valid'}`}
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                    {formik.touched.email && formik.errors.email ? (<div  className="cpn-field-message">{formik.errors.email}</div>) : null}
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    className={`cpn-field ${formik.touched.password && formik.errors.password ? 'cpn-field--error': 'cpn-field--valid'}`}
                    name="password"
                    placeholder="Ваш пароль"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                    {formik.touched.password && formik.errors.password ? (<div  className="cpn-field-message">{formik.errors.password}</div>) : null}
                </div>
                <div className="form-row">
                  <input
                    type="checkbox"
                    className={`cpn-field-checkbox ${((formik.touched.rememberMe && formik.errors.rememberMe)) ? 'cpn-field--error': 'cpn-field--valid'}`}
                    name="rememberMe"
                    id="rememberme"
                    onChange={formik.handleChange}
                    value={formik.values.rememberMe}
                  />
                    
                  <label htmlFor="rememberme" className="cpn-accept-condition-label">
                    <span className="cpn-accept-condition-label__item">Запомнить меня</span>
                  </label>
                </div>
                <div className="form-row">
                  <button type="submit" className="cpn-btn cpn-btn--red cpn-form-control__btn">Войти в штаб</button>
                </div>
              </form>
            </div>
          </FormCard>
        </main>
      </div>
      
      <style jsx global>{`
        .login {
          max-width: 350px;
          margin: 7% auto 10px;
        }

        .cpn-field {
          border-color: #e2e2e2;
        }
        .cpn-form-control__btn {
          right: calc(50% - 100px) !important;
        }
      `}</style>
    </>
  )
}

export default AdminLogin