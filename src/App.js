import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Most popular JavaScript framework?',
			answerOptions: [
				{ answerText: 'Angular', isCorrect: false },
				{ answerText: 'React', isCorrect: true },
				{ answerText: 'Vue', isCorrect: false },
				{ answerText: 'Metor', isCorrect: false },
			],
		},
		{
			questionText: 'React is developed by?',
			answerOptions: [
				{ answerText: 'Google', isCorrect: false },
				{ answerText: 'Tesla', isCorrect: false },
				{ answerText: 'Facebook', isCorrect: true },
				{ answerText: 'Apple', isCorrect: false },
			],
		},
		{
			questionText: 'Which is called superset of JavaScript?',
			answerOptions: [
				{ answerText: 'Bootstrap', isCorrect: false },
				{ answerText: 'TypeScript', isCorrect: true },
				{ answerText: 'EcmaScript', isCorrect: false },
				{ answerText: 'VisualScript', isCorrect: false },
			],
		},
		{
			questionText: 'IOS is developed using?',
			answerOptions: [
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Objective-C', isCorrect: true },
				{ answerText: 'Python', isCorrect: false },
				{ answerText: 'Swift', isCorrect: false },
			],
		},		{
			questionText: 'Linux is ?',
			answerOptions: [
				{ answerText: 'Operating System', isCorrect: false },
				{ answerText: 'Programming Language', isCorrect: false },
				{ answerText: 'Kernal', isCorrect: true },
				{ answerText: 'Code Editor', isCorrect: false },
			],
		},		{
			questionText: 'NoSQL database is ?',
			answerOptions: [
				{ answerText: 'Sql', isCorrect: false },
				{ answerText: 'MySql', isCorrect: false },
				{ answerText: 'MongoDB', isCorrect: true },
				{ answerText: 'IndexDB', isCorrect: false },
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
		</div>
	);
}
