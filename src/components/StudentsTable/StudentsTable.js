import React, { Component } from 'react';

class StudentsTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const tableRows = this.props.students.map(students => {
        

            return (
                
                <tr key={students.id}>
                    <th>{students.name}</th>
                    <th >{students.phone}</th>
                    <th>{students.email}</th>
                    <th>
                    <button type="button" className="btn">Detalhes</button>
                    </th>
                </tr>

              
            )
        })
       
        return (
        <div>

        <table className="table" border='1'>
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Email</th>
            <th scope="col">Ação</th>
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

export default StudentsTable;