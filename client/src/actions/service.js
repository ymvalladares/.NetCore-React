import axios from "axios";

export const getUser = (url) => {
  var query = axios.get(url);
  return query;
};

export const create = (url, newRecord) => {
  var query = axios.post(url, newRecord);
  return query;
};

export const GetUserById = (url, id) => {
  var query = axios.get(url + id);
  return query;
};

export const UpdateUser = (url, record) => {
  var query = axios.put(url, record);
  return query;
};

export const DeleteUser = (url, id) => {
  var query = axios.delete(url + id);
  return query;
};
