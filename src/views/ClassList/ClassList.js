import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import ClassTable from '../../components/ClassTable/ClassTable';
import api from '../../services/api';

const calssObj = [{
    id: 1,
    name: 'Formação Frontend Terças/Quintas',
    code: 'FRONTEND1',
    startDate: '1326028144',
    endDate: '1559088058',
    teacherName: 'Theo Victor Schlegel',
    students: []
},
{
    id: 2,
    name: 'Formação Backend',
    code: 'FRONTEND2',
    startDate: '1326028144',
    endDate: '1559088058',
    teacherName: 'Batman',
    students: [
    {
        id: 2,
        name: 'Roni',
        cpf: '09878890283',
        birthDate: '1559088058',
        phone: '47999087621',
        email: 'joao_hotequil@gmail.com',
        classes: [2]
    },
    {
        id: 3,
        name: 'Amorim',
        cpf: '09878890283',
        birthDate: '1559088058',
        phone: '47999087621',
        email: 'joao_hotequil@gmail.com',
        classes: [3,2]
    }
    ]
},
{
    id: 3,
    name: 'Formação de quadrilha',
    code: 'FRONTEND3',
    startDate: '1326028144',
    endDate: '1559088058',
    teacherName: 'Coringa',
    students: [{
        id: 3,
        name: 'Amorim',
        cpf: '09878890283',
        birthDate: '1559088058',
        phone: '47999087621',
        email: 'joao_hotequil@gmail.com',
        classes: [3]
    }]
}
]

class ClassList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ClassTable classes={calssObj}/>
        )
    }

}

export default ClassList;
