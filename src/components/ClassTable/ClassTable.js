import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import StudentsTable from '../StudentsTable/StudentsTable';
import { Container } from 'react-bootstrap';

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
        const tableRows = this.props.classes.map(clazz => {
            const new_starDate = new Intl.DateTimeFormat('en-GB', { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit' 
            }).format(clazz.startDate);

            const new_endDate = new Intl.DateTimeFormat('en-GB', { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit' 
            }).format(clazz.endDate);

            return (
                <tr key={clazz.id}>
                    <th>{clazz.name}</th>
                    <th>{clazz.code}</th>
                    <th>{clazz.new_starDate}</th>
                    <th>{clazz.new_endDate}</th>
                    <th>{clazz.teacherName}</th>
                    <th>
                        <button type="button" className="btn" onClick={this.handleShow.bind(this, clazz.id)} >Lista de Alunos </button>
                    </th>
                </tr>
            )
        });
       
        return (
            <div>
                <table className="table" border='1'>
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Codigo</th>
                            <th scope="col">Data Inicial</th>
                            <th scope="col">Data Final</th>
                            <th scope="col">Professor</th>
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
              <StudentsTable students={this.props.classes.length ? this.props.classes[this.state.studentSelected].students : []} />
              <Button type="submit">Apagar</Button>
            </Modal.Body>
        </Modal>

            </div>

            
        )
    }
}

export default ClassTable;