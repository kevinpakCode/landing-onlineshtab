import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ForWho = () => {
  return (
    <div className="for-who">
        <Container>
          <Row>
            <Col sm={12} className="for-who__inner ">
              <h3 className="for-who__title pl-40">Для кого?:</h3>
              <div className="for-who__list">
                <div className="for-who__item card">
                  <i className="for-who__item-icon">
                    <img src="/images/svg/for_icon01.svg" alt="Для кого?"/>
                  </i>
                  <h4 className="for-who__item-title">Для исполнителей</h4>
                  <div className="for-who__item-text">
                    <p>Инструмент для оперативного <br className="hidden-s"/> предоставления отчетных <br className="hidden-s"/> данных </p>
                  </div>
                </div>
                <div className="for-who__item card">
                  <i className="for-who__item-icon">
                    <img src="/images/svg/for_icon02.svg" alt="Для заказчика"/>
                  </i>
                  <h4 className="for-who__item-title">Для заказчика</h4>
                  <div className="for-who__item-text">
                    <p>Мониторинг текущего состояния <br className="hidden-s"/> кампании и ее основных <br className="hidden-s"/> показателей</p>
                  </div>
                </div>
                <div className="for-who__item card">
                  <i className="for-who__item-icon">
                    <img src="/images/svg/for_icon03.svg" alt="Для начальника штаба"/>
                  </i>
                  <h4 className="for-who__item-title">Для начальника штаба</h4>
                  <div className="for-who__item-text">
                    <p>Инструмент сбора и обработки <br className="hidden-s"/> различных данных для принятия <br className="hidden-s"/> решений</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}


export default ForWho