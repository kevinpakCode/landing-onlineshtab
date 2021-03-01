import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <Container>
          <Row>
            <Col sm={12} md={3}>
              <a href="#" className="footer__logo"><img src="/images/svg/logo_white.svg" alt="logo"/></a>
            </Col>
            <Col sm={12} md={9} className="footer__text">
              <p>© 2020. ОнлайнШтаб. Все права защищены</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}



