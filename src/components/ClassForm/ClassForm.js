import React, { Component } from 'react';
import { Formik } from 'formik'
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';



class ClassForm extends Component {

  constructor(props) {
    super(props)
  }

  alerta(obj) {
    console.log(obj);
    window.alert(JSON.stringify(obj));
  }

  render() {
    const schema = yup.object().shape({
      name: yup.string().required(),
      code: yup.string().required(),
      startDate: yup.string().required(),
      endDate: yup.string().required(),
      teacherName: yup.string().required(),
      
    });
    
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.alerta.bind(this)}
        initialValues={{
          name: '',
          code: '',
          startDate: '',
          endDate: '',
          teacherName: '',
          
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

              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Código:</Form.Label>
                <Form.Control
                  type="text"
                  name="code"
                  value={values.code}
                  onChange={handleChange}
                  isInvalid={touched.code && errors.code}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Data inicial:</Form.Label>
                <Form.Control
                  type="text"
                  name="startDate"
                  value={values.startDate}
                  onChange={handleChange}
                  isInvalid={touched.startDate && errors.startDate}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Data final:</Form.Label>
                <Form.Control
                  type="text"
                  name="endDate"
                  value={values.endDate}
                  onChange={handleChange}
                  isInvalid={touched.endDate && errors.endDate}
                />
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="validationFormik02">
                <Form.Label>Nome professor:</Form.Label>
                <Form.Control
                  type="text"
                  name="teacherName"
                  value={values.teacherName}
                  onChange={handleChange}
                  isInvalid={touched.teacherName && errors.teacherName}
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form.Row>
          </Form>
        )}
      </Formik>
    )
  }

}
export default ClassForm;