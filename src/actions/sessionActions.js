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

export const saveSession = (token) => {
  try {
    const serializedState = JSON.stringify(token);
    localStorage.setItem(constant.SESSION_STORAGE, serializedState);
  } catch (e) {
    return;
  }
};

export const deleteSession = (key = constant.SESSION_STORAGE) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    return;
  }
};
