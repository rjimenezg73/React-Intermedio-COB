import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

  constructor(props){
    super(props);
    this.state = {
      age: 49
    }
  }
 
  render() {
    return (
      <div>
        <h1>
          ¡Hola {this.props.name}, desde componente de Clase !
        </h1>
        <h2>
          Tu edad es de: {this.state.age} años 
        </h2>
        <div>
          <button onClick={this.birthDay}>
            Cumplir Años
          </button>
        </div>
      </div>
    );
  }

  birthDay = () => {
    this.setState((prevState) => (
      {
        age: prevState.age + 1,
      }
    ))
  };

}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;



