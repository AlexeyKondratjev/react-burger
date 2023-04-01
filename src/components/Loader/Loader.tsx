import React, { FC } from 'react';
import style from './Loader.module.css';
import { LoaderSvg } from './LoaderSvg';
import { TLoaderSize, TLoader } from '../../services/types/data';



const loaderSizes: { [size in TLoaderSize]: number } = {
  small: 16,
  medium: 24,
  large: 40,
  superLarge: 100
};


const Loader: FC<TLoader> = ({ size }) => {
  const loaderColor = '#3C39EC';
  const wrapperStyleKey = 'wrapper_' + size;

  return (
    <div className={style[wrapperStyleKey]}>
      <LoaderSvg color={loaderColor} size={loaderSizes[size]} />
    </div>
  );
};



export default Loader;
