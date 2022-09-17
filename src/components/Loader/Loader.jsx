import style from './Loader.module.css';
import { LoaderSvg } from './LoaderSvg';
import PropTypes from 'prop-types';

const loaderSizes = {
  small: 16,
  medium: 24,
  large: 40,
  superLarge: 100
};


const Loader = ({ size }) => {
  const loaderColor = '#3C39EC';
  const wrapperStyleKey = 'wrapper_' + size;

  return (
    <div className={style[wrapperStyleKey]}>
      <LoaderSvg color={loaderColor} size={loaderSizes[size]} />
    </div>
  );
};



Loader.propTypes = { size: PropTypes.string.isRequired };



export default Loader;
