import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      questionId: 1,
      question: '',
      answerChoices: [],
      answer: '',
      answersCount: {
        red: 0,
        green: 0,
        blue: 0,
        yellow: 0,
      },
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }


  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerChoices={this.state.Choices}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={colorQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
}