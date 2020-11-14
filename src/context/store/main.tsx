import React, {createContext, ReactNode} from 'react';

import mainReducer from '../reducer/main'

/**
 * @type {Object} initialState
 */
export const initialState = {}


export const MainStore = createContext(initialState);

interface IProps {
  children: ReactNode
}

export default function MainProvider({ children }: IProps) {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  return <MainStore.Provider value={{ state, dispatch }}>{children}</MainStore.Provider>;
}
