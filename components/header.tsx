import {useState, useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import Link from 'next/link'

import { useFormik } from 'formik'
import * as Yup from 'yup'


export default function Header() {

  //Modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //Validation form
  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      email: '',
      tel: '',
      questionRequestCheckbox:''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Обязательно поля'),
      city: Yup.string().required('Обязательно поля'),
      email: Yup.string().email('Введите правильный адрес электронной почты').required('Обязательно поля'),
      tel: Yup.string().required('Обязательно поля'),
      questionRequestCheckbox: Yup.boolean().oneOf([true], 'Field must be checked').required('Обязательно поля'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  
  return (
    <>
      <header className="header">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="header__inner">
                <div className="header__logo">
                  <a href="#" className="header__logo-link"><img src="/images/svg/logo_onlineshtab.svg" alt="logo"/></a>
                </div>
                <ul className="header__btns">
                  <li className="header__item"><a href="#" className="header__btns-link cpn-btn" title="Подать заявку"  onClick={handleShow}>Подать заявку</a></li>
                  <li className="header__item"><Link href="/" ><a className="header__btns-link cpn-btn cpn-btn--login" title="Войти">Войти</a></Link></li>
                </ul>
              </div> 
            </Col>
          </Row>
        </Container>
      </header>
      <Modal show={show} onHide={handleClose} className="cpn-modal">
        <div className="cpn-modal__head">
          <div className="cpn-modal__head-logo">
            <img src="/images/svg/logo_white.svg" alt="logo"/>
          </div>
        </div>
        <div className="cpn-modal__body">
          <div className="cpn-modal__body-title">Подать заявку в ОнлайнШтаб</div>
          <div className="cpn-modal__body-content">
            <form onSubmit={formik.handleSubmit} className="cpn-form-control">
              <div className="form-row">
                <input
                  type="text"
                  className={`cpn-field ${formik.touched.name && formik.errors.name ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="name"
                  placeholder="Фамилия и имя"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              {formik.touched.name && formik.errors.name ? (<div className="cpn-field-message">{formik.errors.name}</div>) : null}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  className={`cpn-field ${formik.touched.city && formik.errors.city ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="city"
                  placeholder="Ваш регион, город"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
              {formik.touched.city && formik.errors.city ? (<div className="cpn-field-message">{formik.errors.city}</div>) : null}
              </div>
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
                  className={`cpn-field ${formik.touched.tel && formik.errors.tel ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="tel"
                  placeholder="Телефон для связи"
                  onChange={formik.handleChange}
                  value={formik.values.tel}
                />
                {formik.touched.tel && formik.errors.tel ? (<div  className="cpn-field-message">{formik.errors.tel}</div>) : null}
              </div>
              <div className="form-row">
                <input
                  type="checkbox"
                  className={`cpn-field-checkbox ${((formik.touched.questionRequestCheckbox && formik.errors.questionRequestCheckbox)) ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="questionRequestCheckbox"
                  id="accept-condition"
                  onChange={formik.handleChange}
                  value={formik.values.questionRequestCheckbox}
                />
                  
                <label htmlFor="accept-condition" className="cpn-accept-condition-label">
                  <span className="cpn-accept-condition-label__item">Я согласен с <a href="/documents/pdf/onlineshtab-privacy-policy.pdf">политикой конфиденциальности</a></span>
                  <span className="cpn-accept-condition-label__item">и <a href="/documents/pdf/onlineshtab-personal-data-processing-policy.pdf">политикой обработки персональных данных</a></span>
                </label>
              </div>
              <div className="form-row">
                <button type="submit" className="cpn-btn cpn-btn--red cpn-form-control__btn">Отправить</button>
              </div>
            </form>
          </div>
          
        </div>
      </Modal>
    </>
  )
}