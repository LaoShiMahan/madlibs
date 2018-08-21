import React, { Component } from 'react';

class Content extends Component {
    render() {

        const data = this.props.data;

        return (
            <p>
                Ladies and gentlemen, this is <b>{data.colorOne}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b>{data.pluralNoun}</b> and the <b>{data.adjOne}</b> Yankees. <b>{data.celebOne}</b> is pitching for the Yankees. Here's the pitch! It's a low <b>{data.adjTwo}</b> ball that just cuts the inside of the <b>{data.nounOne}</b> for a strike. That makes the count <b>{data.numOne}</b> strikes and <b>{data.numTwo}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{data.nounTwo}</b> out to <b>{data.adjThree}</b> field. But <b>{data.celebTwo}</b> is coming up fast and has it for the second out. The next batter up is <b>{data.celebThree}</b>, the Cleveland <b>{data.adjFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b>{data.nounThree}</b>. <b>{data.celebFour}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b>{data.adjFive}</b> League!
            </p>
        )
    }
}

export default Content;

// Ladies and gentlemen, this is {this.renderLabel(data.colorOne)} Barber, your sportscaster, bringing you the last inning of the game between the Cleveland {this.renderLabel(data.pluralNoun)} and the {this.renderLabel(data.adjOne)} Yankees. {this.renderLabel(data.celebOne)} is pitching for the Yankees. Here's the pitch! It's a low {this.renderLabel(data.adjTwo)} ball that just cuts the inside of the {this.renderLabel(data.nounOne)} for a strike. That makes the count {this.renderLabel(data.numOne)} strikes and {this.renderLabel(data.numTwo)} balls. Now here's the next pitch. The batter swings and connects. It's a long, high {this.renderLabel(data.nounTwo)} out to {this.renderLabel(data.adjThree)} field. But {this.renderLabel(data.celebTwo)} is coming up fast and has it for the second out. The next batter up is {this.renderLabel(data.celebThree)}, the Cleveland {this.renderLabel(data.adjFour)}-stop. Here's the pitch... and it's hit... a short ground ball to third {this.renderLabel(data.nounThree)}. {this.renderLabel(data.celebFour)} scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the {this.renderLabel(data.adjFive)} League!
// Ladies and gentlemen, this is <b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b>{data.pluralNoun}</b> and the <b>{data.adjectiveOne}</b> Yankees. <b>{data.celebOne}</b> is pitching for the Yankees. Here's the pitch! It's a low <b>{data.adjectiveTwo}</b> ball that just cuts the inside of the <b>{data.nounOne}</b> for a strike. That makes the count <b>{data.numberOne}</b> strikes and <b>{data.numberTwo}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{data.nounTwo}</b> out to <b>{data.adjectiveThree}</b> field. But <b>{data.celebTwo}</b> is coming up fast and has it for the second out. The next batter up is <b>{data.celebThree}</b>, the Cleveland <b>{data.adjectiveFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b>{data.nounThree}</b>. <b>{data.celebFour}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b>{data.adjectiveFive}</b> League!