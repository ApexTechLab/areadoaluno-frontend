import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ClassForm from '../../components/ClassForm/ClassForm';

class CreateClass extends Component {

  constructor(props) {
    super(props);
  }

  sendClass(classe){
    alert(`O alerta foi desparado pelo pai: ${JSON.stringify(classe)}`);
  }

  render() {
    return (
      <Container>
        <ClassForm onSubmit={this.sendClass.bind(this)}/>
      </Container>
    )
  }

}

export default CreateClass;