import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const OthersQuestion = () => {
  return (
    <div className="others-questions">
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
                    <a href="/welcome/oferta.pdf" className="download__link">скачать</a>
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
                    <form method="post"  className="others-questions__form">
                      <div className="form-row">
                        <input type="text" className="cpn-field" name="name" placeholder="Имя" required/>
                      </div>
                      <div className="form-row">
                        <input type="text" className="cpn-field" name="email"  placeholder="Email" required/>
                      </div>
                      <div className="form-row">
                        <input type="text" className="cpn-field" name="tel" placeholder="Телефон" required/>
                      </div>
                      <div className="form-row">
                        <input type="checkbox" name="question_request_checkbox" id="accept-condition" required/>
                        <label htmlFor="accept-condition" className="accept-condition-label">
                          <span className="form-control-row-accept-label">Я согласен с <a href="/welcome/onlineshtab-privacy-policy.pdf">политикой конфиденциальности</a></span>
                          <span className="form-control-row-accept-label">и <a href="/welcome/onlineshtab-personal-data-processing-policy.pdf">политикой обработки персональных данных</a></span>
                        </label>
                      </div>
                      <div className="form-row">
                        <button className="cpn-btn cpn-btn--red others-questions__form-btn">Отправить</button>
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