import CartDTO from '../dto/CartDTO';
import { DataGridConfigReturnType } from '../types/DataGridConfigReturnType';

function dataGridConfig(products: Array<CartDTO>): DataGridConfigReturnType {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
    },
    {
      field: 'price',
      headerName: 'Price (€)',
      type: 'number',
      editable: false,
      width: 110,
    },
    {
      field: 'discountPercentage',
      headerName: 'Discount (%)',
      type: 'number',
      editable: false,
      width: 110,
    },
    {
      field: 'discountedPrice',
      headerName: 'Discounted Price (€)',
      type: 'number',
      editable: false,
      width: 170,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      editable: true,
      width: 110,
    },
    {
      field: 'total',
      headerName: 'Total (€)',
      type: 'number',
      editable: false,
      width: 110,
    },
  ];

  let rows = [];
  for (const product of products) {
    rows.push({
      id: product.id,
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      discountedPrice: product.discountedPrice,
      quantity: product.quantity,
      total: product.total,
    });
  }

  return { rows, columns };
}

export default dataGridConfig;
