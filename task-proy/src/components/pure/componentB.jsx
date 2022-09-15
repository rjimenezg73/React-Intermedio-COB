import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const componentB = ({contact}) => {
  return (
    <div>
      <h2>
        Contact First Name: { contact.firstName }
      </h2>
      <h3>
        Contact Last Name: { contact.lastName }
      </h3>
      <h4>
        E-mail: { contact.email } 
      </h4>
      <h5>
        Online: { contact.online ? 'Cntacto en Linea' : 'Contacto No Disponible'}
      </h5>
    </div>
  );
};


componentB.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};


export default componentB;
