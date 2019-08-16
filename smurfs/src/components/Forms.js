import React from 'react'
import { Form as Formik, Field, withFormik } from 'formik'
import { Segment, Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import SmurfList from './SmurfList'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'

const Forms = props => {
    const fetchSmurfs = e => {
        e.preventDefault();
        props.getSmurfs();
    }
    return (
        <Segment rasied compact>
            <Form>
                <Formik>
                    <Form.Field>
                        <Field type="text" name="name" placeholder="smurf name" />
                    </Form.Field>
                    <Form.Field>
                        <Field type="text" name="height" placeholder="Height" />
                    </Form.Field>
                    <Form.Field>
                        <Field type="text" name="age" placeholder="age" />
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Formik>
                <br></br>
                <Button onClick={fetchSmurfs}>Get Smurfy</Button>
            </Form>
        </Segment>
    )
}

const FormikForm = withFormik({
    mapPropsToValues(values) {
        return {
            name: values.name || '',
            height: values.height || '',
            age: values.age || ''
        }
    },
    handleSubmit(values, { setStatus }) {
        axios.post('http://localhost:3333/smurfs/', values)
            .then(res => alert("Smurf Created"))
            .catch(err => alert(err))
    }
})(Forms);

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(FormikForm)
