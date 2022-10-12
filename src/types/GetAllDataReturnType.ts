import ProductDTO from '../dto/ProductDTO';

export type GetAllDataReturnType = {
  data: Array<ProductDTO> | null;
  loading: boolean;
  error: string | null;
};
