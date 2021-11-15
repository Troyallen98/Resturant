import React, { Component } from 'react';
import axios from 'axios';
import Page from './Page.js';

// const api = axios.create({
//             baseURL: 'https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/'
//         })

class Meal extends Component {
    constructor() {
        // data to save in model
        super();

        this.state = {
            arr1: [],
            arr2: [],
            arr3: [],
            arr4: [],
            arr5: []
        }
        // have state here
    }
    // controller methods
    componentDidMount() {
        axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/items/4')
            .then(res => {
                console.log(res.data)
                // save data to state
                this.setState({ arr1: res.data })

            })
        axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/items/4')
            .then(res => {
                console.log(res.data)
                // save data to state
                this.setState({ arr2: res.data })
                console.log(this.state.arr2[2]);

            })
        axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/items/4')
            .then(res => {
                console.log(res.data)
                // save data to state
                this.setState({ arr3: res.data })
                console.log(this.state.arr2[2]);

            })
        axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/items/4')
            .then(res => {
                console.log(res.data)
                // save data to state
                this.setState({ arr4: res.data })
                console.log(this.state.arr2[2]);

            })
        axios.get('https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/items/4')
            .then(res => {
                console.log(res.data)
                // save data to state
                this.setState({ arr5: res.data })
                console.log(this.state.arr2[2]);

            })

    }
    // view
    render() {
        return (
            <Page arr2={this.state.arr2} arr1={this.state.arr1} arr3={this.state.arr3} arr4={this.state.arr4} arr5={this.state.arr5} />
        )
    }
}
export default Meal
