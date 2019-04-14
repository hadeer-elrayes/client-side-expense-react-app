import axios from 'axios';

export const apiSaveExpense = expense => {
  return axios.post('/expenses/addExpense', expense);
};

export const apiFetchExpense = month => {
  const prefix = '/expenses/allExpenses';
  const url = month ? `${prefix}/${month}` : prefix;
  return axios.get(url);
};
