import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import {
  INCREASE,
  DECREASE,
  REMOVE,
  LOADING,
  DISPLAY_ITEMS,
  CLEAR_CART,
} from './actions';
import cartItems from './data';
import { getTotals } from './utils';

const GlobalContext = createContext();

const defaultState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increaseItem = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decreaseItem = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;

export const useGlobalContext = () => useContext(GlobalContext);
