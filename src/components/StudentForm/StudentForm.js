import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import MaskedInput from 'react-text-mask';
import Select from 'react-select';

class StudentForm extends Component {
  constructor(props) {
    super(props)
  }

  alerta(objeto, { resetForm, initialValues }) {
    console.log(objeto);
    window.alert(JSON.stringify(objeto));
    resetForm(initialValues);
  }

  render() {
    const schema = yup.object().shape({
      name: yup.string().required().min(3),
      email: yup.string().required().email(),
      birthDate: yup.date().required(),
      phone: yup.string().required(),
      cpf: yup.string().required(),
      classes: yup.array()
    });

    const options = [
      { value: '1', label: 'Formação Frontend Terças/Quintas' },
      { value: '2', label: 'Formação Java Sabados' },
      { value: '3', label: 'Formação C# segundao/quarta/sexta' }
    ];
    
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.alerta.bind(this)}
        initialValues={{
          name: '',
          email: '',
          phone: '',
          cpf: '',
          birthDate: undefined,
          classes: []
        }}>

        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
          setFieldValue,
          setFieldTouched
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Nome Completo:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && errors.email}
                />
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Telefone Móvel:</Form.Label>
                <Field
                name="phone"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={[
                      "(",
                      /[1-9]/,
                      /\d/,
                      ")",
                      " ",
                      /\d/,
                      " ",
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/
                    ]}
                    id="phone"
                    type="text"
                    onChange={handleChange}
                    value={values.phone}
                    onBlur={handleBlur}
                    className={
                      errors.phone && touched.phone
                        ? "text-input form-control error"
                      : "text-input form-control"
                    }
                  />
                )}
              />
              </Form.Group>
             
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>CPF:</Form.Label>
                <Field
                name="cpf"
                render={({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={[
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ".",
                      /\d/,
                      /\d/,
                      /\d/,
                      ".",
                      /\d/,
                      /\d/,
                      /\d/,
                      "-",
                      /\d/,
                      /\d/
                    ]}
                    id="cpf"
                    type="text"
                    value={values.cpf}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.cpf && touched.cpf
                        ? "text-input form-control error"
                      : "text-input form-control"
                    }
                  />
                )}
              />
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="validationFormik01">
                <Form.Label>Data de Nascimento:</Form.Label><br />
                  <DatePicker
                    selected={values.birthDate}
                    className={"text-input form-control"}
                    onChange={(e) => {
                      setFieldValue ('birthDate', e);
                        setFieldTouched('birthDate');
                      }}
                    isInvalid={touched.birthDate && errors.birthDate}
                  />
              </Form.Group>

              <Form.Group as={Col} md="10" controlId="validationFormik01">
                <Form.Label>Seleciona a turma: </Form.Label>
                <Select
                  id="classes"
                  name="classes"
                  options={options}
                  isMulti={true}
                  onChange={(option) => setFieldValue('classes', option)}
                  onBlur={handleBlur}
                  value={values.classes}
                  isInvalid={touched.classes && errors.classes}
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