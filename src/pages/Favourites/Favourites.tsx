/* eslint-disable */
import { Button } from '@mui/material';
import './Favourites.css';
import { Counter } from '../../redux/features/counter/Counter';
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../redux/features/counter/counterSlice';
import { incrementByAmount2, decrementByAmount2, selectCount2 } from '../../redux/features/favorites/favoritesSlice';

const Favourites = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const count2 = useAppSelector(selectCount2);
  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <Counter></Counter>
      <Button onClick={() => dispatch(incrementByAmount2(count))}>aloo</Button>
      <p>{count2}</p>
    </div>
  );
};

export default Favourites;
