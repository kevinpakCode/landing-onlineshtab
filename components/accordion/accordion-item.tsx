const AccordionItem = ({question='', answer=''}) => {
  return (
    <>
      <dt className="cpn-accordion__item-label"><h4>{question}</h4></dt>
      <dd className="cpn-accordion__item-body">{question}</dd>
    </>
  )
}
export default AccordionItem