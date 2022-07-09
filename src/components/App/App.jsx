import React from 'react';
import { useState, useEffect } from 'react';
import API_PATH from '../../utils/constants';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

export default function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  useEffect(() => {
    const getData = async () => {
      setState((prevState) => ({ ...prevState, isLoading: true, hasError: false }));

      try {
        const res = await fetch(API_PATH);
        /* console.log('fetch done'); */
        if (!res.ok) {
          throw new Error(`An error has occurred! Error status: ${res.status}`)
        }

        const data = await res.json();
        /* console.log('json done'); */
        setState((prevState) => ({ ...prevState, data: data.data, isLoading: false, hasError: false }));
        /* console.log('setState done'); */
      } catch (error) {
        /* console.log('catch section'); */
        console.log(error);
        setState((prevState) => ({ ...prevState, isLoading: false, hasError: true }));
      }


    }

    getData();
  }, []);


  return (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        {state.isLoading && <p>{"LOADING..."}</p>}
        {state.hasError && <p>{"AN ERROR HAS OCCURED (SEE CONSOLE)!"}</p>}
        {!state.isLoading && !state.hasError &&
          <>
            <BurgerIngredients data={state.data} />
            <BurgerConstructor data={state.data} />
          </>
        }
      </main>
    </>
  );
}
