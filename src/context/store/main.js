import React, { createContext } from 'react';

import mainReducer from '../reducer/main';

/**
 * @type {Object} initialState
 */
export const initialState = {
};

export const MainStore = createContext();

export default function MainProvider({ children }) {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  return <MainStore.Provider value={{ state, dispatch }}>{children}</MainStore.Provider>;
}
