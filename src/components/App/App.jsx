import React from 'react';
import { useState, useEffect, useReducer } from 'react';
import { API_PATH_INGREDIENTS, TOTAL_PRICE_INITIAL_STATE } from '../../utils/constants';
import { totalPriceReducer } from '../../utils/utils';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import { IngredientsContext, TotalPriceContext } from '../../services/appContext';


export default function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: [],
    ingredientsId: [],
    orderData: {
      name: "",
      order: {
        number: null,
      },
      success: false,
    }
  });
  const [totalPriceState, totalPriceDispatcher] = useReducer(totalPriceReducer, TOTAL_PRICE_INITIAL_STATE, undefined);

  useEffect(() => {
    const getData = async () => {
      setState((prevState) => ({ ...prevState, isLoading: true, hasError: false }));

      try {
        const res = await fetch(API_PATH_INGREDIENTS);

        if (!res.ok) {
          throw new Error(`An error has occurred! Error status: ${res.status}`)
        }

        const data = await res.json();
        setState((prevState) => ({ ...prevState, data: data.data, isLoading: false, hasError: false }));

      } catch (error) {
        console.log(error);
        setState((prevState) => ({ ...prevState, isLoading: false, hasError: true }));
      }

    }

    getData();
  }, []);



  return (
    <div className={appStyles.page}>
      <AppHeader />
      <main className={appStyles.main}>
        {state.isLoading && <p>{"LOADING..."}</p>}
        {state.hasError && <p>{"AN ERROR HAS OCCURED (SEE CONSOLE)!"}</p>}
        {!state.isLoading && !state.hasError &&
          <>
            <BurgerIngredients data={state.data} />
            <IngredientsContext.Provider value={{ state, setState }}>
              <TotalPriceContext.Provider value={{ totalPriceState, totalPriceDispatcher }}>
                <BurgerConstructor />
              </TotalPriceContext.Provider>
            </IngredientsContext.Provider>
          </>
        }
      </main>
    </div>
  );
}
