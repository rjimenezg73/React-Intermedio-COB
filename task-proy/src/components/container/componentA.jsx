import React from 'react';
import { Contact } from '../../models/contact.class';
import ComponentB from '../pure/componentB';


const ComponentA = () => {

  const defaultContact = new Contact('Roberto', 'Jimenez', 'micorreo@midominio.com', false);
 

  return (
    <div>
      <div>
        <h1>
          Contact: 
        </h1>
      </div>
      {/* Aplicar un For/Map para realizar una lista de tareas */}
      <ComponentB contact = { defaultContact }> </ComponentB>
    </div>
  );
};


export default ComponentA;
