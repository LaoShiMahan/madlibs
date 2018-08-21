import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const INITIAL_STATE = {
    colorOne: '',
    pluralNoun: '',
    adjOne: '',
    celebOne: '',

    adjTwo: '',
    nounOne: '',
    numOne: '',
    numTwo: '',

    nounTwo: '',
    adjThree: '',
    celebTwo: '',
    celebThree: '',

    adjFour: '',
    nounThree: '',
    celebFour: '',
    adjFive: '',
    contentVisible: false
}

class Card extends Component {
    constructor() {
        super()
        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if (this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true })
        }

        this.setState({ contentVisible: !this.state.contentVisible })
    }

    render() {

        const inputData = [
            {name: 'colorOne', title: 'Color', state: this.state.color},
            {name: 'pluralNoun', title: 'Plural Noun', state: this.state.pluralNoun},
            {name: 'adjOne', title: 'Adjective', state: this.state.adjOne},
            {name: 'celebOne', title: 'Celebrity', state: this.state.celebOne},

            {name: 'adjTwo', title: 'Adjective', state: this.state.color},
            {name: 'nounOne', title: 'Noun', state: this.state.nounOne},
            {name: 'numOne', title: 'Number', state: this.state.numOne},
            {name: 'numTwo', title: 'Number', state: this.state.numTwo},

            {name: 'nounTwo', title: 'Noun', state: this.state.nounTwo},
            {name: 'adjThree', title: 'Adjective', state: this.state.adjThree},
            {name: 'celebTwo', title: 'Celebrity', state: this.state.celebTwo},
            {name: 'celebThree', title: 'Celebrity', state: this.state.celebThree},

            {name: 'adjFour', title: 'Adjective', state: this.state.adjFour},
            {name: 'nounThree', title: 'Noun', state: this.state.nounThree},
            {name: 'celebFour', title: 'Celebrity', state: this.state.celebFour},
            {name: 'adjFive', title: 'Adjective', state: this.state.adjFive},
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                    {
                        inputData.map((data, index) => {
                            return Input((data), this.handleInputChange, index)
                        })
                    }
                </div>
                <button type="submit">{this.state.contentVisible ? 'Clear Form' : 'Generate Madlib'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;