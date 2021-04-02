import {useState, useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import Link from 'next/link'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


export default function Header() {
  const [successRequest , setSuccessRequest] = useState(false)

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
      phone: '',
      questionRequestCheckbox:''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Обязательно поля'),
      city: Yup.string().required('Обязательно поля'),
      email: Yup.string().email('Введите правильный адрес электронной почты').required('Обязательно поля'),
      phone: Yup.string().required('Обязательно поля'),
      questionRequestCheckbox: Yup.boolean().oneOf([true], 'Field must be checked').required('Обязательно поля'),
    }),
    onSubmit: (values, {resetForm}) => {
      const dataForm = {
        data : {
          name : values.name,
          email: values.email,
          phone: values.phone,
          company: values.city,
          text: ""
        }
      }

      
      //=> Axios, post data
      axios({
        method: 'post',
        url: `${process.env.API_URL}/api/v1/forms`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: JSON.stringify(dataForm),
      })
      .then(function (response) {
        resetForm({values:''})
        setSuccessRequest(true)

        setTimeout(()=> {
          setSuccessRequest(false)
        }, 3000)

        setTimeout(()=> {
          handleClose(false)
        }, 4000)
      })
      .catch(function (error) {
        console.log(error)
      })
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
            { 
              successRequest&&
              <div className="successRequest">
                Ваша заявка успешно отправлена!
              </div>
            }
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
                  className={`cpn-field ${formik.touched.phone && formik.errors.phone ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="phone"
                  placeholder="Телефон для связи"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (<div  className="cpn-field-message">{formik.errors.phone}</div>) : null}
              </div>
              <div className="form-row">
                <input
                  type="checkbox"
                  className={`cpn-field-checkbox ${((formik.touched.questionRequestCheckbox && formik.errors.questionRequestCheckbox)) ? 'cpn-field--error': 'cpn-field--valid'}`}
                  name="questionRequestCheckbox"
                  id="accept-condition2"
                  onChange={formik.handleChange}
                  value={formik.values.questionRequestCheckbox}
                />
                  
                <label htmlFor="accept-condition2" className="cpn-accept-condition-label">
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