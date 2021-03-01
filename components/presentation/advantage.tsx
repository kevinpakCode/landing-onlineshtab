import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Advantage = () => {
  return (
    <div className="advantage">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="advantage__inner pl-40">
                <h3 className="advantage__title">Наши преимущества</h3>
                <div className="advantage__list">
                <div className="advantage__list-item">
                  <i className="advantage__list-item-icon">
                    <img src="/images/svg/advant_icon01.svg"/>
                  </i>
                  <div className="advantage__list-item-text">
                    <p>
                      Получение информации о ходе
                      электоральной кампании
                      в онлайн-режиме, автоматизированным
                      способом
                    </p>
                  </div>
                </div>
                <div className="advantage__list-item">
                  <i className="advantage__list-item-icon">
                    <img src="/images/svg/advant_icon02.svg"/>
                  </i>
                  <div className="advantage__list-item-text">
                    <p>
                      Сервис для планирования <br/>
                      стратегии электоральной кампании
                      (событийный календарь / среда <br/>
                      жизни проекта).
                    </p>
                  </div>
                </div>
                <div className="advantage__list-item">
                  <i className="advantage__list-item-icon">
                    <img src="/images/svg/advant_icon03.svg"/>
                  </i>
                  <div className="advantage__list-item-text">
                    <p>
                      Формирование отчетов <br/>
                      в единой форме из любого
                      количества и объема данных
                    </p>
                  </div>
                </div>
                <div className="advantage__list-item">
                  <i className="advantage__list-item-icon">
                    <img src="/images/svg/advant_icon04.svg"/>
                  </i>
                  <div className="advantage__list-item-text">
                    <p>
                      Обучение представителей
                      заказчика по работе <br/>
                      с системой
                    </p>
                  </div>
                </div>
                <div className="advantage__list-item">
                  <i className="advantage__list-item-icon">
                    <img src="/images/svg/advant_icon05.svg"/>
                  </i>
                  <div className="advantage__list-item-text">
                    <p>
                      Закрепление за заказчиком
                      персонального аналитика <br/>
                      с нашей стороны
                    </p>
                    </div>
                </div>
                <div className="advantage__list-item">
                  <i className="advantage__list-item-icon">
                    <img src="/images/svg/advant_icon06.svg"/>
                  </i>
                  <div className="advantage__list-item-text">
                    <p>
                      Постоянная техническая
                    </p>
                  </div>
                </div>
              </div>
              </div>     
            </Col>
          </Row>
        </Container>
    </div>
  )
}
export default Advantage