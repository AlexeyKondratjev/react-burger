import React from 'react';
import commonStyles from './commonStyles.module.css';
import IngredientDetails from '../components/IngredientDetails/IngredientDetails';


export function IngredientDetailsPage() {

  return (
    <main className={commonStyles.main}>
      <div className={commonStyles.container}>
        <IngredientDetails />
      </div>
    </main>
  );
}
