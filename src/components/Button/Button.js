import React from 'react'
import './Button.css'

const Button = (props) => {
          return (
                    <button className={`
                              button
                              ${props.operation ? 'operation' : ''}
                              ${props.double ? 'double' : ''}
                              ${props.topoperation ? 'topoperation' : ''}
                              ${props.btnzero ? 'btnzero' : ''}
                    
                    }
          `}
                              onClick={(e) => props.click && props.click(props.label)}

                    >{props.currentLabel}</button>
          )
}

export default Button