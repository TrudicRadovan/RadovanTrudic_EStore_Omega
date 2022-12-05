import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ProductsDataGridPropsType } from '../../types/ProductsDataGridPropsType';
import dataGridConfig from '../../config/dataGridConfig';
import { Button, Grid } from '@mui/material';
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
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
          <Grid item xs={8} container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIconOutlined />}
                sx={{ color: 'white', background: '#00bbff', marginTop: 2 }}
              >
                Buy
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                startIcon={<DeleteOutlineIcon />}
                sx={{ color: 'white', background: '#00bbff', marginTop: 2 }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={4} container direction="column" justifyContent="flex-end" alignItems="flex-end">
            <Grid item sx={{ marginTop: 2.5 }}>
              <h3>Total Amount: 3731€</h3>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductsDataGrid;
