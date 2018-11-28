// form section for input and button submittion

import React from 'react';



export default function GameForm() {

	return (
		<form>
			<input type="number" required />
			<button type="submit">Guess</button>

		</form>
	);
}