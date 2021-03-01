import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Functionality = () => {
  return (
    <div className="functionality">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="functionality__inner pl-40">
                <h3 className="functionality__title">Вы можете:</h3>
                <ol className="functionality__list">
                  <li className="functionality-item">Отслеживать все основные показатели электоральной кампании в режиме реального времени.</li>
                  <li className="functionality-item">Корректировать стратегию кампании на основе данных.</li>
                  <li className="functionality-item">Визуализировать сложные аналитические данные красиво и просто с помощью искусственного интеллекта.</li>
                  <li className="functionality-item">Оформлять отчеты за любой период электоральной кампании.</li>
                  <li className="functionality-item">Спланировать основные мероприятия для достижения результата.</li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}


export default Functionality