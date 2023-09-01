import type { PageServerLoad } from './$types';

export const load = (async () => {
	const result = rollDice();
	return {
		result
	};
}) satisfies PageServerLoad;

export const actions = {
	default: () => {
		return { result: rollDice() };
	}
};

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}
