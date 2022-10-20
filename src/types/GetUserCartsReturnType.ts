import CartDTO from '../dto/CartDTO';

export type GetUserCartsReturnType = {
  data: Array<CartDTO> | null;
  loading: boolean;
  error: string | null;
};
