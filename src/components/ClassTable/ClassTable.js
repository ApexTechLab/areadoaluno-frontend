import React, { Component } from 'react';

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
    students: []
},
{
    id: 3,
    name: 'Formação de quadrilha',
    code: 'FRONTEND3',
    startDate: '1326028144',
    endDate: '1559088058',
    teacherName: 'Coringa',
    students: []
}
]

const classStudant = [{
    id: 1,
    name: 'Joao Hotequil',
    cpf: '09878890283',
    birthDate: '1559088058',
    phone: '47999087621',
    email: 'joao_hotequil@gmail.com',
    classes: []
},
{
    id: 2,
    name: 'Roni',
    cpf: '09878890283',
    birthDate: '1559088058',
    phone: '47999087621',
    email: 'joao_hotequil@gmail.com',
    classes: []
},
{
    id: 3,
    name: 'Amorim',
    cpf: '09878890283',
    birthDate: '1559088058',
    phone: '47999087621',
    email: 'joao_hotequil@gmail.com',
    classes: []
}
]



class ClassTable extends Component {

    render() {

        const tableRows = calssObj.map(clazz => {
            return (
                <tr>
                    <th>{clazz.name}</th>
                    <th>{clazz.code}</th>
                    <th>{clazz.startDate}</th>
                    <th>{clazz.endDate}</th>
                </tr>
            )
        })

        return (
        <div>
        <table class="table table-dark" border='1'>
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Codigo</th>
            <th scope="col">Data Inicial</th>
            <th scope="col">Data Final</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
      </div>  
        )  
    }
}

export default ClassTable;