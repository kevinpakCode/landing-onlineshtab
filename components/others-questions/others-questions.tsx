import {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


const OthersQuestion = () => {
  const [successRequest , setSuccessRequest] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      questionRequestCheckbox:''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Обязательно поля'),
      email: Yup.string().email('Введите правильный адрес электронной почты').required('Обязательно поля'),
      phone: Yup.string()
        .required('Обязательно поля'),
      questionRequestCheckbox: Yup.boolean().oneOf([true], 'Field must be checked').required('Обязательно поля'),
    }),
    onSubmit: (values, {resetForm}) => {
      const dataForm = {
        data : {
          name : values.name,
          email: values.email,
          phone: values.phone,
          company: "",
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
      })
      .catch(function (error) {
        console.log(error)
      })
    },
  })

  return (
    <div className="others-questions" id="main-form">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="others-questions__inner">
                <div className="others-questions__head">
                <Row>
                  <Col sm={6}>
                    <h3 className="pl-40">Остались вопросы?</h3>
                  </Col>
                  <Col sm={6} className="text-right">
                  <div className="download">
                    <img src="/images/uploads/document_icon.svg" />
                    <span className="download__text"> Публичная оферта </span> 
                    <a href="/documents/pdf/oferta.pdf" className="download__link">скачать</a>
                  </div>
                  </Col>
                </Row>
                </div>
                <div className="others-questions__body">
                  <div className="others-questions__body-left">
                    <h3 className="others-questions__body-title">
                      Узнайте, как ОнлайнШтаб сможет повысить эффективность <br/>вашей кампании
                    </h3>
                    <ul className="others-questions__body-contacts">
                      <li className="others-questions__body-contacts-item phone"><a href="tel:+7 (495) 23-00-823">+7 (495) 23-00-823</a></li>
                      <li className="others-questions__body-contacts-item email"><a href="mailto:info@onlineshtab.ru">info@onlineshtab.ru</a></li>
                    </ul>
                  </div>
                  <div className="others-questions__body-right">
                    { 
                      successRequest&&
                      <div className="successRequest">
                        Ваша заявка успешно отправлена!
                      </div>
                    }
                    <form onSubmit={formik.handleSubmit} className="others-questions__form cpn-form-control">
                      <div className="form-row">
                        <input
                          type="text"
                          className={`cpn-field ${formik.touched.name && formik.errors.name ? 'cpn-field--error': 'cpn-field--valid'}`}
                          name="name"
                          placeholder="Имя"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (<div className="cpn-field-message">{formik.errors.name}</div>) : null}
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
                          placeholder="Телефон"
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
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
export default OthersQuestion