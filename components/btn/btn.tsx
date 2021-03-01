import { Children } from 'react'
//import './btn.scss'

export function Btn(props){
  return (
    <button>
    </button>
  )
}


export function Link(props){
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  )
}