import React, { useState } from 'react';
import QuizForm from '../components/quizForm';
// import GetLeaderBoard from '../components/getleaderboard';

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
					<QuizForm />
					{/* <GetLeaderBoard/> */}
					
				</div>
			) : (
				<>
				<h2>Get started</h2>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button btn btn-lg onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
					))}
					</div>
					
				</>
			)}
		</div>
	);
}

export default Quiz;






