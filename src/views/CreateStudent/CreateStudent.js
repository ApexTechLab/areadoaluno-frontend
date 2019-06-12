import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import StudentForm from '../../components/StudentForm/StudentForm';

class CreateStudent extends Component {

    constructor(props) {
        super(props);
    }

    sendStudent(student) {
        alert(`Alerta disparado do componente pai ${JSON.stringify(student)}`)
    }

    render() {
        return (
            <Container>
                <StudentForm onSubmit={this.sendStudent.bind(this)}/>
            </Container>
        )
    }

}

export default CreateStudent;