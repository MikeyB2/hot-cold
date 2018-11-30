// form section for input and button submittion

import React from 'react';
import './gameForm.css';


export default class GameForm extends React.Component {
	onSubmit(event) {
		event.preventDefault();

		if (this.props.onMakeGuess) {
			const value = this.input.value;
			this.props.onMakeGuess(value);
		}
		this.input.value = '';
		this.input.focus();
	}

	render() {
		return (
			<form onSubmit={e => this.onSubmit(e)}>
				<input
					type="number"
					name="userGuess"
					id="userGuess"
					className="text"
					min="1"
					max="100"
					ref={input => (this.input = input)}
					required
				/>
				<button
					type="submit"
					name="submit"
					id="guessButton"
					className="button"
				>Guess
		  </button>
			</form>
		);
	}
}