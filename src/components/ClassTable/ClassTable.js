import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import StudentsTable from '../StudentsTable/StudentsTable';

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

class ClassTable extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          clazz: 0,
          studentSelected: [0]
        };
    }
    
    handleClose() {
    this.setState({ show: false });
    }

    handleShow(clazz) {
    this.setState({ show: true,
                    studentSelected: clazz -1 });    
    }



    render() {
        const tableRows = calssObj.map(clazz => {
            const new_starDate =   new Intl.DateTimeFormat('en-GB', { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit' 
            }).format(clazz.startDate);

            const new_endDate =   new Intl.DateTimeFormat('en-GB', { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit' 
            }).format(clazz.endtDate);

            
            return (
                <tr key={clazz.id}>
                    <th>{clazz.name}</th>
                    <th>{clazz.code}</th>
                    <th>{new_starDate}</th>
                    <th>{new_endDate}</th>
                    <th>
                    <button type="button" className="btn" onClick={this.handleShow.bind(this, clazz.id)} >Alunos {clazz.id}</button>
                    </th>
                </tr>
            )
        });
       
        return (
            <div>
                <table className="table " border='1'>
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
        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Lista de Alunos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <StudentsTable students={calssObj[this.state.studentSelected].students} />
            </Modal.Body>
        </Modal>

            </div>

            
        )
    }
}

export default ClassTable;