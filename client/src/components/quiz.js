import React, { useState } from 'react';

export default function Quiz() {
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
		<div className='app'>
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
      
      <div className="form-group">
							<span>
                            <label htmlFor="your score">Your score</label></span>
                            <div className="form-inputs">
							<input
              					type="text"
								placeholder="input score here"
								
                                // onChange={e => this.handleInputMessage(e)}
                                />
							<span><label htmlFor="your USER ID">Your user ID</label></span>
							<div className="form-inputs"></div>
								<input
              					type="text"
								placeholder="number id eg:1" 
								
                                // onChange={e => this.handleInputMessage(e)}
                                />
                            
                                <button 
                                    id="messageButton" 
                                    type="submit"
                                    // onClick={e => this.submitMessage()}
                                    >
                                    Save your score
                                </button>
                            </div>
                        </div>
		</div>
	);
}

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

// export default Quiz;

