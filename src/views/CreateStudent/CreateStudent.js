import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import StudentForm from '../../components/StudentForm/StudentForm';

class CreateStudent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <StudentForm />
            </Container>
        )
    }

}

export default CreateStudent;