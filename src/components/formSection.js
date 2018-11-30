// parent form section

import React from 'react';
import GameForm from './gameForm';
import Response from './response';


export default function FormSection(props) {
	const { feedback, guessCount } = props;
	return (
		<section>
			<Response feedback={feedback} guessCount={guessCount} />
			<GameForm onMakeGuess={guess => props.onMakeGuess(guess)} />
		</section>
	);
}