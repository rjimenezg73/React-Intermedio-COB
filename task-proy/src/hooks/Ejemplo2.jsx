/**
 * Ejemplo del uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react'


const Ejemplo2 = () => {

  /**
   * Vamos a crear los contadores distintos, cada uno en un estado diferente
   */

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();  // Posteriormente se va a asociar en el HTML

  function incrementarContador1(){
    setContador1(contador1 + 1);
  }

  function incrementarContador2(){
    setContador2(contador2 + 1);
  }

  /**
   * Trabajando con useEffect()
   */

  /**
   * Caso 1: Ejecutar SIEMPRE un snippet de código
   * Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté
   * dentro del useEffect()
   */
  // useEffect(() => {
  //   console.log("Cambio en el estado del componente");
  //   console.log("Mostrando referencia a elemento del DOM:");
  //   console.log(miRef);
  // });

  /**
   * Caso 2: Ejecutar SOLO en algunos caso (Solo cuando cambie contador 1)
   * En caso de que cambie contador2 no ocurrirá nada
   */
  useEffect(() => {
    console.log("Cambio en el estado del CONTADOR 1");
    console.log("Mostrando referencia a elemento del DOM:");
    console.log(miRef);
  },[contador1]);


  return (
    <div>
      <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      {/** Elemento referenciado */}
      <h4 ref={miRef}>
        Ejemplo de Elemento Referenciado
      </h4>
      {/** Botones para cambiar los contadores */}
      <div>
        <button onClick={incrementarContador1}>Incrementar Contador 1</button>
        <button onClick={incrementarContador2}>Incrementar Contador 2</button>
      </div>

    </div>
  );
}

export default Ejemplo2; 