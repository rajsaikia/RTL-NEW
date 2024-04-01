import { fetchData } from "../reducers/usersSlice";


export const fetchDataFromAPI = () => async (dispatch) => {
  try {
    dispatch(fetchData.pending());
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    dispatch(fetchData.fulfilled(data));
  } catch (error) {
    dispatch(fetchData.rejected(error.message));
  }
};
