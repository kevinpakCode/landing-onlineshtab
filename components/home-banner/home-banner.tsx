import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Link} from '../btn/btn'

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <Container>
        <Row>
          <Col xs={12} sm={4} >
            <div className="home-banner__inner">
              <h1>Управление электоральным проектом</h1>
              <div className="home-banner__text">
                <p>Отслеживайте ход электоральной кампании в режиме online и сделайте ее более эффективной</p>
              </div>
              <Link href="#main-form" className="home-banner__btn cpn-btn cpn-btn--red">Узнать больше</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeBanner