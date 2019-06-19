import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import ClassTable from '../../components/ClassTable/ClassTable';
import api from '../../services/api';

class ClassList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: []
        }
    }

    async componentDidMount() {
        let response = await api.get('/class');
        this.setState({
            classes: response.data.result
        })
    }

    render() {
        return (
            <ClassTable classes={this.state.classes}/>
        )
    }

}

export default ClassList;
