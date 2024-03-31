export const POST = 'POST';
const restURL = '/';

const fetchData = (method: string, type: any, params: any) => {
	return fetch(`${restURL}/${type}`, {
		method,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(params),
	}).then(res => res.json().then(result => result));
};

export const getRules = () =>
	fetchData(POST, `rules`, {
		action: 'SUBSCRIBE',
	});


