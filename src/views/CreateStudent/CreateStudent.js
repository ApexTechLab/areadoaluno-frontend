import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import StudentForm from '../../components/StudentForm/StudentForm';
import api from '../../services/api';

class CreateStudent extends Component {

    constructor(props) {
        super(props);
    }

    sendStudent = async (student) => {
        //alert(`Alerta disparado do componente pai ${JSON.stringify(student)}`);

        try {
            await api.post('/student', student);
            alert(`Estudante cadastrado com sucessor`);
        } catch(err) {
            console.error(err);
            alert(`Ocorreu um erro ${JSON.stringify(err)}`);
        }
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