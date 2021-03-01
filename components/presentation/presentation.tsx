import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Link} from '../btn/btn'
import  Functionality from './functionality'
import  ForWho from './for-who'
import  Principle from './principle'
import  Advantage from './advantage'
import  Faq from './faq'

const HomeBanner = () => {
  return (
    <div className="presentation">
      <div className="presentation__about">
        <Container>
          <Row>
            <Col sm={5} className="presentation__left">
              <div className="presentation__img"><img src="/images/uploads/2nd_image.png" alt=""/></div>
            </Col>
            <Col sm={7} className="presentation__right">
              <div className="presentation__inner">
                <h2 className="secondTitle">
                  ОнлайнШтаб — это возможность получать всю информацию о ходе электоральной кампании в режиме онлайн, находясь в любой точке планеты.
                </h2>
                <div className="presentation__text">
                  <p>
                    Вы можете оперативно принять решение, как ее скорректировать в случае необходимости. Эффективно перераспределять ресурсы, координировать и оценивать действия разных структурных частей команды.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Functionality />
      <ForWho />
      <Principle />
      <Advantage />
      <Faq />
    </div>
  )
}

export default HomeBanner