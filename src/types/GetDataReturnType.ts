import ProductDTO from '../dto/ProductDTO';

export type GetDataReturnType = {
  data: ProductDTO | null;
  loading: boolean;
  error: string | null;
};
