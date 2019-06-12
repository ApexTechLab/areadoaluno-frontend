import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ClassForm from '../../components/ClassForm/ClassForm';

class CreateClass extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <ClassForm />
      </Container>
    )
  }

}

export default CreateClass;