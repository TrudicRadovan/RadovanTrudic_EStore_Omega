/* eslint-disable */
import './Favourites.css';
import { Counter } from '../../redux/features/counter/Counter';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import { selectCount } from '../../redux/features/counter/counterSlice';

const Favourites = () => {
  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <Counter></Counter>
    </div>
  );
};

export default Favourites;
