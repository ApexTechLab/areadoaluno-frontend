import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import InputMask from 'react-input-mask';

class StudentForm extends Component {
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
      <div className={"form"}>
        <Formik
          validationSchema={schema}
          onSubmit={this.alerta.bind(this)}
          initialValues={{
            name: '',
            email: '',
            phone: '',
            cpf: '',
            birthDate: '',
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
            <Form name="form" noValidate onSubmit={handleSubmit} id="formform">
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationFormik01">
                  <Form.Label>Nome Completo:</Form.Label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Coloque o nome completo."
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && errors.name}
                    className={
                      touched.name && errors.name
                        ? "text-input form-control is-invalid error"
                      : "text-input form-control"
                    }
                  />
                  <span class="card-text text-small"><small class="text-muted">Campo obrigatório.</small></span>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik01">
                  <Form.Label>E-mail:</Form.Label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Coloque o e-mail."
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && errors.email}
                    className={
                      errors.email && touched.email
                        ? "text-input form-control is-invalid error"
                      : "text-input form-control"
                    }
                  />
                  <span class="card-text text-small"><small class="text-muted">Campo obrigatório.</small></span>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik01">
                  <Form.Label>Telefone Móvel:</Form.Label>
                  <InputMask id="phone"
                    name="phone"
                    type="text"
                    onChange={handleChange}
                    placeholder="Coloque o telefone móvel"
                    value={values.phone}
                    onBlur={handleBlur}
                    isInvalid={touched.phone && errors.phone}
                    maskChar=""
                    mask="(99) 9 9999-9999"
                    className={
                      errors.phone && touched.phone
                        ? "text-input form-control is-invalid error"
                      : "text-input form-control"
                    }/>
                  <span class="card-text text-small"><small class="text-muted">Campo obrigatório.</small></span>
                </Form.Group>
              
                <Form.Group as={Col} md="6" controlId="validationFormik01">
                  <Form.Label>CPF:</Form.Label>
                  <InputMask id="cpf"
                    name="cpf"
                    type="text"
                    onChange={handleChange}
                    placeholder="Coloque o CPF."
                    value={values.cpf}
                    onBlur={handleBlur}
                    isInvalid={touched.cpf && errors.cpf}
                    maskChar=""
                    mask = "999.999.999-99"
                    className={
                      errors.cpf && touched.cpf
                        ? "text-input form-control is-invalid error"
                      : "text-input form-control"
                    }/>
                  <span class="card-text text-small"><small class="text-muted">Campo obrigatório.</small></span>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik01">
                  <Form.Label>Data de Nascimento:</Form.Label>
                  <InputMask 
                    id="birthDate"
                    name="birthDate"
                    type="text"
                    onChange={handleChange}
                    placeholder="Coloque a data de nascimento."
                    value={values.birthDate}
                    onBlur={handleBlur}
                    isInvalid={touched.birthDate && errors.birthDate}
                    maskChar=""
                    mask = "99/99/9999"
                    className={
                      errors.birthDate && touched.birthDate
                        ? "text-input form-control is-invalid error"
                      : "text-input form-control"
                    }/>
                  <span class="card-text text-small"><small class="text-muted">Campo obrigatório.</small></span>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik01">
                  <Form.Label>Seleciona a turma: </Form.Label>
                  <Select
                    placeholder="Selecione uma ou mais turma."
                    id="classes"
                    name="classes"
                    options={options}
                    isMulti={true}
                    onChange={(option) => setFieldValue('classes', option)}
                    onBlur={handleBlur}
                    value={values.classes}
                  />
                  <span class="card-text text-small"><small class="text-muted">Campo não obrigatório.</small></span>
                </Form.Group>

                <Button type="submit">Enviar Cadastro</Button>

              </Form.Row>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default StudentForm;