import * as constant from '../constants/apiConstants';

export const loadSession = () => {
  try {
    const serializedState = localStorage.getItem(constant.SESSION_STORAGE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const loadCurrentUser = () => {
  try {
    const serializedState = localStorage.getItem(constant.CURRENT_USER_STORAGE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveSession = (token, user) => {
  try {
    const queryString = require('query-string');

    const serializedState = JSON.stringify(token);
    const serializedUsername = JSON.stringify(queryString.parse(user).username);
    
    localStorage.setItem(constant.SESSION_STORAGE, serializedState);
    localStorage.setItem(constant.CURRENT_USER_STORAGE, serializedUsername);
  } catch (e) {
    return;
  }
};

export const deleteSession = (key = constant.SESSION_STORAGE) => {
  try {
    localStorage.removeItem(key);
    localStorage.removeItem(constant.CURRENT_USER_STORAGE);
  } catch (e) {
    return;
  }
};
