import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class RecordsList extends Component {
    
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/read' />;
        }
        return (<p>
                        { this.props.obj.Name }
                </p>);
    }
} export default RecordsList;