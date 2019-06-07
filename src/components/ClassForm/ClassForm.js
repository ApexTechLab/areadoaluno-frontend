import React, { Component } from 'react';
import { Formik } from 'formik'
import * as yup from 'yup';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';

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
      name: yup.string().required().min(3),
      code: yup.string().required(),
      startDate: yup.date().required(),
      endDate: yup.date().required(),
      teacherName: yup.string().required(),
      
    });
    
    return (
      <Formik
        validationSchema={schema}
        onSubmit={this.alerta.bind(this)}
        initialValues={{
          name: '',
          code: '',
          startDate: undefined,
          endDate: undefined,
          teacherName: '',
          
        }}>

        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldTouched,
          setFieldValue,
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
                  placeholderText="Selecione Data Final"
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

              <Form.Group as={Col} sm="12" md="3" controlId="validationFormik01">
                <Form.Label>Data Inicial:</Form.Label><br />
                <DatePicker
                  className="form-control"
                  selected={values.startDate}
                  dateFormat="dd/MM/yyyy"
                  locale={pt}
                  placeholderText="Selecione Data Inicio"
                  onChange={(e) => {
                    setFieldValue ('startDate', e);
                    setFieldTouched('startDate');
                  }}
                  isInvalid={touched.startDate && errors.startDate}
                />
              </Form.Group>

               <Form.Group as={Col} sm="12" md="9" controlId="validationFormik01">
                <Form.Label>Data Final:</Form.Label><br />
                <DatePicker
                  className="form-control"
                  selected={values.endDate}
                  dateFormat="dd/MM/yyyy"
                  locale={pt}
                  placeholderText="Selecione Data Final"
                  onChange={(e) => {
                    setFieldValue ('endDate', e);
                    setFieldTouched('endDate');
                  }}
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
              <Button type="submit">Enviar</Button>
            </Form.Row>
          </Form>
        )}
      </Formik>
    )
  }

}
export default ClassForm;