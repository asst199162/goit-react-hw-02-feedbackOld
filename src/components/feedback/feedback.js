import React from "react";

export class Feedback extends React.Component{
state = {
        good: 0,
        neutral: 0,
        bad: 0, 
        }

    handelGood = () => {
        this.setState(prevState => {
            return { good: prevState.good + 1 }
        })
    };

    handelNeutral = () => {
        this.setState(prevState => {
            return { neutral: prevState.neutral + 1 }
        })
    };

    handelBad = () => {
        this.setState(prevState => {
            return { bad: prevState.bad + 1 }
        })
    };
//çcountTotalFeedback()



    render() {
        return (
            <>
            <h1>Please leave Feedback</h1>
            <button type = 'button' onClick={this.handelGood}>good</button>
            <button type = 'button' onClick={this.handelNeutral}>neutral</button>
                <button type='button' onClick={this.handelBad}>bad</button>
                <h2>Statistics</h2>
                <span>good: {this.state.good}</span>
                <span>neutral: {this.state.neutral}</span>
                <span>bad : {this.state.bad}</span>
            </>
        )
    }
}