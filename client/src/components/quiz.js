import React, { useState } from 'react';
import MessageForm from '../components/messageForm';

	function Quiz(){
		const questions = [
		{
			questionText: 'Which is the closest planet to the Sun?',
			answerOptions: [
				{ answerText: 'Mercury', isCorrect: true },
				{ answerText: 'Venus', isCorrect: false },
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Mars', isCorrect: false },
			],
		}, 
		{
			questionText: 'Which planet has the longest orbit?',
			answerOptions: [
				{ answerText: 'Neptune', isCorrect: false },
				{ answerText: 'Uranus', isCorrect: true },
				{ answerText: 'Saturn', isCorrect: false },
				{ answerText: 'Jupiter', isCorrect: false },
			],
		},
		{
			questionText: 'Which planet is called the Goldilocks planet?',
			answerOptions: [
				{ answerText: 'Earth', isCorrect: true },
				{ answerText: 'Mars', isCorrect: false },
				{ answerText: 'Saturn', isCorrect: false },
				{ answerText: 'Neptune', isCorrect: false },
			],
		},
		{
			questionText: 'How many moons does the planet Mars have?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '27', isCorrect: false },
				{ answerText: '2', isCorrect: true },
			],
		},

		{
			questionText: 'How many moons(official) does the planet Jupiter have?',
			answerOptions: [
				{ answerText: '100', isCorrect: false },
				{ answerText: '9', isCorrect: false },
				{ answerText: '27', isCorrect: false },
				{ answerText: '79', isCorrect: true },
			],
		},

		{
			questionText: 'Which is the biggest planet in our solar system?',
			answerOptions: [
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Uranus', isCorrect: false },
				{ answerText: 'Jupiter', isCorrect: true },
				{ answerText: 'Mars', isCorrect: false },
			],
		},

		{
			questionText: 'Which is the hottest and most inhabitable planet?',
			answerOptions: [
				{ answerText: 'Saturn', isCorrect: false },
				{ answerText: 'Venus', isCorrect: true },
				{ answerText: 'Mars', isCorrect: false },
				{ answerText: 'Mercury', isCorrect: true },
			],
		},

		{
			questionText: 'Which planet has the tallest mountain?',
			answerOptions: [
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Venus', isCorrect: false },
				{ answerText: 'Mars', isCorrect: true },
				{ answerText: 'Jupiter', isCorrect: true },
			],
		},


	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
					))}
					</div>
				</>
			)}
		</div>
	);
}
	//start function here

class QuizForm extends React.Component {
		constructor() {
			super()
			this.state = {
				userId: null,
				input: null,
				score: [],
				submitted: false
			}
			// this.handleInputScore = this.handleInputScore(this);
			this.handleUserId = this.handleUserId.bind(this)
			this.submitScore = this.submitScore.bind(this);
		}
		
		handleInputScore(e) {
			e.preventDefault(); 
			this.setState({
				input: e.target.value,
			});
			
		};
	
		handleUserId(e) {
			e.preventDefault(); 
			this.setState({
				userId: e.target.value,
			});
		};
		
		componentDidMount() {
			fetch("/users")
			.then(res => res.json())
			.then(data => {
				this.setState({
					userId: data,
					score: data
				})
			})
			.catch(err => {
				console.log(err);
			});
			
		}

		submitScore(){
			this.setState({
				userId: null,
				input: null,
				submitted:true
			})
			alert("Score submitted")
			fetch("/users/quiz", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					userId: this.state.userId,
					score: this.state.input
				})
			})
			.then(res => {
				res.json();
				// this.componentDidMount();
				//alert("Submitted");
			})
			// .then(data => {
			// 	//console.log("data with id", data);
			// 	const updatedScore = [
			// 	{
			// 		id: data.insertID,
			// 		userId: this.state.userId,
			// 		score: this.state.input
			// 	}
			// 	];
			// 	this.setstate({ score: [...this.state.score, ...updatedScore] });
			// 	console.log(this.state.score);
			// })
			.catch(error => {
				console.log(error);
			})
    }
		render() {
			return this.state.submitted ? (
				<MessageForm />
			) : (
					<div>
						<Quiz/>
						<div id="messageForm">
							<h2>Submit your score</h2>
								<form> 
									{/* onSubmit={this.submitScore} */}
								
								<br />
								<div className="form-group">
									<label htmlFor="user ID">Your UserId</label>
									<div className="form-inputs">
										<input
										value={this.state.handleUserId}
										type="text"
										onChange={e => this.handleUserId(e)}
										/>
									</div>
								</div> 
								<br />
					
								<div className="form-group">
									<label htmlFor="score">Your Score</label>
									<div className="form-inputs">
										<input
										value={this.state.handleInputScore}
										
										type="textarea"
										onChange={e => this.handleInputScore(e)}
										/>
										<span id="charLimit">(150 characters limit)</span>
										<button 
											id="messageButton" 
											type="submit"
											onClick={e => this.submitScore()}
											>
											Submit your score
										</button>
									</div>
								</div>
								</form> 
						</div>
					</div>  
				)
			}
		}

export default QuizForm;



// import { useEffect } from 'react';

// const Quiz = url => {
//   useEffect(() => {
//     const script = document.createElement('script');

//     script.src = "https://files.liveworksheets.com/embed/embed.js";
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
      
//     }
//   }, ["https://www.liveworksheets.com/worksheets/en/Science/The_Solar_System/Our_Solar_System_xa5810sy"]);
// };


