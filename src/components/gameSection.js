import React from 'react';

import Title from './title';
import FormSection from './formSection';
import Guesses from './guesses';
import Instructions from './instructions';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Think you can Guess my Number?!',
			correctAnswer: Math.floor(Math.random() * 100) + 1
		};
	}

	restartGame() {
		this.setState({
			guesses: [],
			feedback: 'Think you can Guess my Number?!',
			auralStatus: '',
			correctAnswer: Math.floor(Math.random() * 100) + 1
		});
	}

	makeGuess(guess) {
		guess = parseInt(guess, 10);
		if (isNaN(guess)) {
			this.setState({ feedback: 'Please enter a  whole number' });
			return;
		}

		const difference = Math.abs(guess - this.state.correctAnswer);

		let feedback;
		if (difference >= 50) {
			feedback = 'You\'re Freezing Cold...';
		} else if (difference >= 30) {
			feedback = 'You\'re Very Cold...';
		} else if (difference >= 25) {
			feedback = 'You\'re Cold.';
		} else if (difference >= 20) {
			feedback = 'You\'re Warm.';
		} else if (difference >= 15) {
			feedback = 'You\'re Warmer.';
		} else if (difference >= 10) {
			feedback = 'You\'re Hotter.';
		} else if (difference >= 5) {
			feedback = 'You\'re On Fire.';
		} else if (difference >= 1) {
			feedback = 'You\'re Melting!';
		} else {
			feedback = 'You got it!';
		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, guess]
		});
	}


	render() {
		const { feedback, guesses } = this.state;
		const guessCount = guesses.length;

		return (
			<div>
				<Title
					onRestartGame={() => this.restartGame()}
				/>
				<main role="main">
					<FormSection
						feedback={feedback}
						guessCount={guessCount}
						onMakeGuess={guess => this.makeGuess(guess)}
					/>
					<Guesses guesses={guesses}
					/>
					<Instructions />
				</main>
			</div>
		);
	}
}