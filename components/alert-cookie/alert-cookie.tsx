import React, {useState, useEffect} from 'react'
import {Link} from './../btn/btn'

const  AlertCookie = () => {
  const [statusAlertCookie, setStatusAlertCookie] = useState(false)

  const  checkStatusCookie = () => {
    const cookieDate = localStorage.getItem('cookieDate')
    const now = Date.now()

    if(!cookieDate || (+Number(cookieDate) + 31536000000 ) < now ) {
      setStatusAlertCookie(true)
    }
  }

  const  closeAlertCookie = event => {
    event.preventDefault()
    const now = Date.now()
    localStorage.setItem('cookieDate', now.toString())
    setStatusAlertCookie(false)
  }
  
  useEffect(() => {
    checkStatusCookie()
  }, [statusAlertCookie])
  

  return (
    <>
    <div className={`alert-cookie ${statusAlertCookie? 'alert-cookie--open':''}`} id="alert-cookie" >
      <a href="#" className="alert-cookie__btn-close  icon-close icon-inner" onClick={()=> closeAlertCookie(event)}></a>
      <div className="alert-cookie__inner">
        <h5 className="alert-cookie__title">
          <i className="alert-cookie__title-icon icon-cookie icon-inner"></i>
          Мы используем файлы cookie
        </h5>
        <div className="alert-cookie__text">
          <p>
            Это поможет нам улучшить работу сайта. Оставаясь на сайте, вы соглашаетесь с нашей  <a className="alert-cookie__link" href="/welcome/onlineshtab-privacy-policy.pdf">политикой использования cookie.</a>
            
          </p>
          <a href="#" className="alert-cookie__btn cpn-btn cpn-btn--blue-second btn-close-alert-cookie" onClick={()=> closeAlertCookie(event)}>Понятно</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default AlertCookie