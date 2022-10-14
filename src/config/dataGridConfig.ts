import ProductDTO from '../dto/ProductDTO';
import { DataGridConfigReturnType } from '../types/DataGridConfigReturnType';

function dataGridConfig(products: Array<ProductDTO>): DataGridConfigReturnType {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
    },
    {
      field: 'brand',
      headerName: 'Brand',
      width: 150,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 110,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      editable: false,
      width: 110,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      editable: false,
      width: 110,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      editable: true,
      width: 110,
    },
  ];

  let rows = [];
  for (const product of products) {
    rows.push({
      id: product.id,
      title: product.title,
      brand: product.brand,
      category: product.category,
      price: product.price,
      rating: product.rating,
      quantity: 1,
    });
  }

  return { rows, columns };
}

export default dataGridConfig;
