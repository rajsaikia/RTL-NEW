import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// export const POST = 'POST';
// const restURL = '/';


// const fetchData = (method: string, type: any, params: any) => {
// 	return fetch(`${restURL}/${type}`, {
// 		method,
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify(params),
// 	}).then(res => res.json().then(result => result));
// };

// export const getRules = () =>
// 	fetchData(POST, `rules`, {
// 		action: 'SUBSCRIBE',
// 	});


export const fetchUserDetails = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

export default fetchUserDetails;