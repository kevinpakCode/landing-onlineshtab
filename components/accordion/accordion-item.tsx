import {useState, useRef} from 'react'

const AccordionItem = ({question='', answer=''}) => {
  const [show, setShow] = useState(false)
  const item = useRef(null)
  const handleToggle = () => {
    const elem = item.current
    const elemChildren = elem.children
    const childrenHeight = elemChildren[0].clientHeight

    if(show) {
      elem.closest('.cpn-accordion__item').classList.remove('open')
      elem.style.height = 0
    }else {
      elem.closest('.cpn-accordion__item').classList.add('open')
      elem.style.height = `${childrenHeight}px`
    }
    setShow(!show)

  }
  
  return (
    <>
      <dt className="cpn-accordion__item-label" onClick={handleToggle}><h4>{question}</h4></dt>
      <dd className="cpn-accordion__item-body" ref={item}>
        <div className="cpn-accordion__item-body-content">{ answer}</div>
      </dd>
    </>
  )
}
export default AccordionItem