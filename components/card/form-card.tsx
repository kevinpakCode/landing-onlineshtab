import Styles from '../../styles/components/form-card.module.scss'
import Link from 'next/link'
const FormCard = (props) => {
  return (
    <>
    <div className={`${Styles.formCard} ${props.className??''}`}>
      <div className={Styles.formCardHead}>
        {props.head?? 
          <div className={Styles.formCardHeadLogo}>
            <Link href="/">
              <a><img src="/images/svg/logo_white.svg" alt="logo"/></a>
            </Link>
          </div>
        }
      </div>
      <div className={Styles.formCardBody}>
        <div className={Styles.formCardBodyContent}>{props.children}</div>
      </div>
    </div>
    </>
  )
}

export default FormCard