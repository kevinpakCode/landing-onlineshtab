import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import style from './header.module.scss'
import {Link} from '../components/btn/btn'

//import Logo from '/images/svg/logo_online.svg'

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="header__inner">
              <div className="header__logo">
                <a href="#" className="header__logo-link"><img src="/images/svg/logo_onlineshtab.svg" alt="logo"/></a>
              </div>
              <ul className="header__btns">
                <li className="header__item"><Link href="#" className="header__btns-link cpn-btn" title="Подать заявку">Подать заявку</Link></li>
                <li className="header__item"><Link href="#" className="header__btns-link cpn-btn cpn-btn--login" title="Войти">Войти</Link></li>
              </ul>
            </div> 
          </Col>
        </Row>
      </Container>
    </header>
  )
}