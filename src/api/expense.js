import axios from 'axios';
const cs = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

export const apiSaveExpense = expense => {
  return axios.post(`${cs}/expenses/addExpense`, expense);
};

export const apiFetchExpense = month => {
  const prefix =`${cs}/expenses/allExpensesOfUser`;
  const url = month ? `${prefix}/${month}` : prefix;
  return axios.get(url);
};
