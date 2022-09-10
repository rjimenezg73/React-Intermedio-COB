import React, { useState} from 'react'
import PropTypes from 'prop-types'

const GreetingF = (props) => {
  // Breve introducción a useState(Hook) desde un componente funcional que por ser de esta cuaidad carece de método constructor.
  // const [variable Estado , Método para actualizarla] = useState(valor Inicial);
  const [age, setAge] = useState(49);

  const birthDay = () => {
    // Actualiza el State 
    setAge(age + 1);
  }

  return (
    <div>
      <h1>
        ¡Hola {props.name}, desde componente Funcional !
      </h1>
      <h2>
        Tu edad es de: {age} años 
      </h2>
      <div>
        <button onClick={birthDay}>
          Cumplir Años
        </button>
      </div> 
    </div>
  )
}

GreetingF.propTypes = {
  name: PropTypes.string,
}

export default GreetingF;

