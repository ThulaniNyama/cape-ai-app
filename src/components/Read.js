import React, { Component } from 'react';
import axios from 'axios';
//import RecordsList from './RecordsList';
// import readDB from '../../server/readDB.php';

export default class READ extends Component {
    constructor(props) {
        super(props);
        this.state = { Candidate: [] };
    }
    componentDidMount() {
        axios.get('cape-ai-app-main_backend/readDB.php')
            .then(response => {
                this.setState({ Name: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    candidateList() {
        return this.state.Candidate.map(function (object, i) {
            return <readDB obj={object} key={i} />;
        });
    }
    render() {
        return (
            <div id="capeAIElements">
                <div id="thulani">
                    <img src="TMAN.jpg" alt="Thulani Nyama" width="280px" height="360px" />
                </div>

                <h3 align="center">About {this.candidateList()}</h3>
                <p align="center">
                    <br />
                    Thulani is a prospective Software Engineer at Cape AI<br />
                    AKA "Tools" that's what his friends and peers call him.<br />
                    We assume it's the meer fact that he is a coder's "toolbox".<br />
                    Be it design or development he has proven to be<br />
                    a natural problem solver. Maybe its his perculiar taste<br />
                    in chess, board games and rubik's cubes that make him <br />
                    such a versitile coder with skills such as C#, Java, PHP,<br />
                    SQL databeses and Firebase. He enjoys outdoor activities<br />
                    like jogging, hiking and zip-lining among others.
                </p>
            </div>  
        );
    }
}
