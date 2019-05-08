import React, {Component} from 'react'
import QuizQuestions from './QuizQuestion'

let quizData = require('./quiz_data.json')

class Quiz extends Component{
    constructor(props) {
        super(props)
        this.state = {quiz_position: 1}
    }
 render() {
     return (
         <div>
            <QuizQuestions quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]} />
         </div>
         
     )
 }
}

export default Quiz