import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import InputMask from 'react-input-mask';

class StudentList extends Component {
  constructor(props) {
    super(props)
  }

  alerta(objeto, { resetForm, initialValues }) {    
    console.log(objeto);
    this.props.onSubmit(objeto);
    resetForm(initialValues);
  }

  render() {
    const schema = yup.object().shape({
      name: yup.string().required().min(6),
      email: yup.string().required().email(),
      birthDate: yup.string().required().min(10),
      phone: yup.string().required().min(16),
      cpf: yup.string().required().min(14),
      classes: yup.array()
    });

    //lembrar de tirar o options
    const options = [
      { value: '1', label: 'Formação Frontend Terças/Quintas' },
      { value: '2', label: 'Formação Java Sabados' },
      { value: '3', label: 'Formação C# segundao/quarta/sexta' }
    ];

    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Nome Completo</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone Móvel</th>
            <th scope="col">CPF</th>
            <th scope="col">Data de Nascimento</th>
            <th scope="col">Turma(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>João Paulo Hotequil</td>
            <td>joao@joao.com.br</td>
            <td>(47) 9 9999-9999</td>
            <td>111.111.111-11</td>
            <td>10/06/1990</td>
            <td>Turma frontend terca e quinta</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default StudentList;