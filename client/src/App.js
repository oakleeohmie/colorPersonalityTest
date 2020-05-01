import React, { Component } from 'react';

class App extends Component {
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