/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado privado a través de un Hook y 
 * además poder mofificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

  // Valor inicial para un contador
  const valorInicial = 0;

  // Valor inicial para una persona (objeto literal)
  const personaInicial = {
    nombre: "Juan",
    email: "juanjo@gmail.com"
  }

  /**
   * Queremos que el VALORINICIAL y PERSONAINICIAL sean parte del estado del 
   * componente, para así poder gestionar su cambio y que éste se vea reflejado
   * en la vista del componente
   * 
   * const [ nombreVariableEstado, funcionParaCambiar ] = useState( valorInicial )
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Función para actualizar el estado privado que contiene el contador
   */
  function incrementarContador(){
    setContador(contador + 1);
  }

  /**
   * Función para actualizar el estado de persona en el componente
   */
  function actualizarPersona(){
    setPersona(
      {
        nombre: "Piolín",
        email: "piolin@melgar.com"
      }
    );
  }

  return (
    <div>
      <h1>*** Ejemplo se useState() ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA</h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h4>E-mail: {persona.email}</h4>
      {/** Bloque de botones para actualizar el estado */}
      <button onClick={incrementarContador}>Incrementar Contador</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
}

export default Ejemplo1;
