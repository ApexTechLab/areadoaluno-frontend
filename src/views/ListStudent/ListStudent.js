import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import StudentList from '../../components/StudentList/StudentList';
import api from '../../services/api';

class ListStudent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StudentList/>
        )
    }

}

export default ListStudent;