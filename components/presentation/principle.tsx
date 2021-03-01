import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Principle = () => {
  return (
    <div className="principle">
        <Container>
          <Row>
            <Col sm={12} lg={4} className="principle__left ">
              <Row>
                <Col sm={12} md={3}  lg={12}>
                  <div className="pl-40">
                    <i className="principle__left-icon">
                      <img src="/images/svg/check_icon.svg"/>
                    </i>
                  </div>
                </Col>
                <Col sm={12} md={9}  lg={12}>
                <div className="pl-40">
                    <h3 className="principle__left-title">
                      IT- сопровождение электорального проекта от выдвижения до выбров/избрания/оглашения результатов.
                    </h3>
                </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} lg={4} className="principle__right ">
              <h3 className="principle__right-title">3 наших ключевых принципа:</h3>
              <div className="principle__right-item">
                <span className="principle__right-item-btn cpn-btn">Сравнение</span>
                <p>
                  <strong>Понимание приходит в момент наблюдения и сравнения.</strong> Вы
                  сравниваете визуальную динамику данных, что позволяет выявить
                  новые возможности и риски для вашей электоральной кампании.
                </p>
              </div>

              <div className="principle__right-item">
                <span className="principle__right-item-btn cpn-btn">Оперативность</span>
                <p>
                  <strong>Получение мгновенной ценности.</strong> 
                  ОнлайнШтаб предоставит самые точные и актуальные данные в режиме реального времени из различных источников.
                </p>
              </div>

              <div className="principle__right-item">
                <span className="principle__right-item-btn cpn-btn">Дизайн</span>
                <p>
                  <strong>Четкий и эстетичный дизайн.</strong> Нам важна красота и эстетика представления данных и
                  в дашбордах и в сформированных на их основе отчетах.
                </p>
              </div>

            </Col>
          </Row>
        </Container>
    </div>
  )
}


export default Principle