/* eslint-disable */
import { Paper, ButtonBase, Typography, Button, Grid, styled } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import FavouritesButton from '../../components/FavouritesButton/FavouritesButton';
import './Favourites.css';
import ShoppingCartIconOutlined from '@mui/icons-material/ShoppingCartOutlined';

const TOTAL_PAGES = 5;
type TestState = any[];
const initialState: TestState = [];
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Favourites = () => {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState(initialState);
  const [pageNum, setPageNum] = useState(1);
  const [lastElement, setLastElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(entries => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum(no => no + 1);
      }
    })
  );

  const callData = async () => {
    setLoading(true);
    let response = await axios.get(`https://dummyjson.com/products?limit=${pageNum * 16}&skip=0`);
    console.log(response);
    let all = new Set([...allData, ...response.data.products]);
    console.log(all);
    setAllData([...all]);
    setLoading(false);
  };

  useEffect(() => {
    if (pageNum <= TOTAL_PAGES) {
      callData();
    }
  }, [pageNum]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  const DataCard = ({ data }: { data: any }) => {
    return (
      <Grid item lg={3} container>
        <Paper
          sx={{
            margin: 'auto',
            maxWidth: 200,
            flexGrow: 1,
            backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
          }}
        >
          <Grid
            item
            lg={12}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
            maxHeight="400px"
          >
            <Grid item container direction="row" justifyContent="flex-end" alignItems="center">
              <Grid item>
                <FavouritesButton />
              </Grid>
            </Grid>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img src={data.thumbnail} />
              </ButtonBase>
            </Grid>
            <Grid item>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                flexGrow="1"
                textAlign="center"
                fontFamily="Quicksand"
              >
                {data.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="body1" fontFamily="Quicksand">
                <strong>{data.price} €</strong>
              </Typography>
            </Grid>
            <Grid item paddingBottom={2}>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIconOutlined />}
                sx={{ color: 'white', background: '#00bbff' }}
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  };

  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <Paper
        sx={{
          paddingTop: 7,
          paddingBottom: 7,
          margin: 'auto',
          maxWidth: 1000,
          flexGrow: 1,
          backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
        }}
      >
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start">
          {allData.length > 0 &&
            allData.map((data: any, i) => {
              return i === allData.length - 1 && !loading && pageNum <= TOTAL_PAGES ? (
                <div key={`${data.id}-${i}`} ref={setLastElement as unknown as React.RefObject<HTMLDivElement>}>
                  <DataCard data={data} />
                </div>
              ) : (
                <DataCard data={data} key={`${data.id}-${i}`} />
              );
            })}
        </Grid>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start" paddingTop={10}>
          {loading && <p className="text-center">Loading...</p>}
          {pageNum - 1 === TOTAL_PAGES && <p className="text-center my-10">You have reached the end.</p>}
        </Grid>
      </Paper>
    </div>
  );
};

export default Favourites;
