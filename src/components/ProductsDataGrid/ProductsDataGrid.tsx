import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ProductsDataGridPropsType } from '../../types/ProductsDataGridPropsType';
import dataGridConfig from '../../config/dataGridConfig';
import { Button } from '@mui/material';
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ProductsDataGrid = ({ products }: ProductsDataGridPropsType) => {
  let config = dataGridConfig(products);

  return (
    <div className="products-data-grid">
      <Box sx={{ height: 370.5, width: '100%' }}>
        <DataGrid
          rows={config.rows}
          columns={config.columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        <Button
          variant="contained"
          startIcon={<ShoppingCartIconOutlined />}
          sx={{ color: 'white', background: '#00bbff', marginTop: 2 }}
        >
          Buy
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteOutlineIcon />}
          sx={{ color: 'white', background: '#00bbff', marginTop: 2, marginLeft: 2 }}
        >
          Delete
        </Button>
      </Box>
    </div>
  );
};

export default ProductsDataGrid;
