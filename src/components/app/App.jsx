import React from 'react';

import testData from '../../utils/data';

import appStyles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

export const App = () => {
  return (
    <>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients data={testData}/>
        <BurgerConstructor data={testData}/>
      </main>
    </>
  );
}
