import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ClassForm from '../../components/ClassForm/ClassForm';
import api from '../../services/api';

class CreateClass extends Component {

  constructor(props) {
    super(props);
  }

  sendClass = async (classe) => {
    try {
      await api.post('/class', classe);
      alert('Turma cadastrada com sucesso!')
    } catch(err) {
      console.error(err);
      alert('Aconteceu um erro: ' + JSON.stringify(err));
    }
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