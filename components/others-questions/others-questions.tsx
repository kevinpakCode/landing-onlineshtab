import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useFormik } from 'formik'
import * as Yup from 'yup'


const OthersQuestion = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      tel: '',
      questionRequestCheckbox:''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Обязательно поля'),
      email: Yup.string().email('Введите правильный адрес электронной почты').required('Обязательно поля'),
      tel: Yup.string()
        .required('Обязательно поля'),
      questionRequestCheckbox: Yup.boolean().oneOf([true], 'Field must be checked').required('Обязательно поля'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
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
                    <img src="/assets/welcome/document_icon-42fa64bedb17d857f4c87f4cea8d62f02b87d6e996085c927b49915171ef64c8.svg" />
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
                          className={`cpn-field ${formik.touched.tel && formik.errors.tel ? 'cpn-field--error': 'cpn-field--valid'}`}
                          name="tel"
                          placeholder="Телефон"
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
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}
export default OthersQuestion