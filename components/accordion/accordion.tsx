import AccordionItem from './accordion-item'

const Accordion = (props) => {
  const dataInfos = props.data ?? []
  let listAccondion = ''
  if(dataInfos.length) {
    listAccondion = dataInfos.map((item, index) => {
      return (
        <div className="cpn-accordion__item" key={index}>
          <AccordionItem question={item.question} answer={item.answer}/>
        </div>
      )
    })

  }

  return (
    <dl className="cpn-accordion">
      {listAccondion}
    </dl>
  )
}
export default Accordion