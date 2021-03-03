import {useState, useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import Link from 'next/link'

const HomeBanner = () => {
  const [doScroll, setDoScroll] = useState(false)
  const [idElem, setIdElem] = useState(null)
  const btn = useRef(null)

  /*
  *
  */
  const scrollDocument = (event) => {
    event.preventDefault()

    const elem = btn.current
    const path = elem.getAttribute('href')
    const elemId = path.replace(/[#\/]/g, '')
    setDoScroll(!doScroll)
    setIdElem(elemId)  
  }

 
  /*
  *
  */
  useEffect(()=> {
    if(idElem) {
      const elem = document.getElementById(idElem)
      const elemPosition = elem.offsetTop
      window.scrollTo({
        top: elemPosition,
        behavior: "smooth"
      });
    }
    
  }, [doScroll])


  return (
    <>
      <div className="home-banner">
        <Container>
          <Row>
            <Col xs={12} sm={4} >
              <div className="home-banner__inner">
                <h1>Управление электоральным проектом</h1>
                <div className="home-banner__text">
                  <p>Отслеживайте ход электоральной кампании в режиме online и сделайте ее более эффективной</p>
                </div>
                <a href="#main-form" className="home-banner__btn cpn-btn cpn-btn--red" ref={btn} onClick={()=> scrollDocument(event)}>Узнать больше</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HomeBanner