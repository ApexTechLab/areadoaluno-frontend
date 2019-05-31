import React, { Component } from 'react';
import { Formik } from 'formik'
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
//import DatePicker from "react-datepicker";

class StudentForm extends Component {
  constructor(props) {
    super(props)
  }

  alerta(objeto) {
    console.log(objeto);
    window.alert(JSON.stringify(objeto));
  }

  render() {
    const schema = yup.object().shape({
      name: yup.string().required().min(3),
      email: yup.string().required().email(),
      birthDate: yup.number().required(),
      phone: yup.string().required().min(10).max(11),
      cpf: yup.string().required().length(11),
      classes: yup.array().required(),
    });

    //Multiselect: (<Multiselect />)
    //
    //var React = require('react');
    //var Multiselect = require('react-bootstrap-multiselect');
    //var someReactComponent = React.createClass({
    //    render: function () {
    //        return (
    //            <Multiselect />
    //        );
    //    }
    //});

    //Datapicker:
    //
    //<DatePicker
    //  selected={values.birthDate}
    //  onChange={handleChange}
    ///>
    
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.alerta.bind(this)}
        initialValues={{
          name: '',
          email: '',
          birthDate: new Date(),
          phone: '',
          cpf: '',
          classes: [],
        }}>

        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && errors.email}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>Data de Nascimento:</Form.Label>
                <Form.Control
                  type="text"
                  value="aqui iria o datapicker da birthDate"
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>Telefone:</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={touched.phone && errors.phone}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>CPF:</Form.Label>
                <Form.Control
                  type="text"
                  name="cpf"
                  value={values.cpf}
                  onChange={handleChange}
                  isInvalid={touched.cpf && errors.cpf}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationFormik01">
                <Form.Label>Classes:</Form.Label>
                <Form.Control
                  type="text"
                  value="aqui iria o multiselect do array do classes"
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
              </Form.Group>

              <Button type="submit">Enviar Cadastro</Button>

            </Form.Row>
          </Form>
        )}
      </Formik>
    )
  }

}
export default StudentForm;