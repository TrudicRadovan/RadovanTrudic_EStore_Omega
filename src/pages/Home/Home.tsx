/* eslint-disable */
import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import React, { useEffect, useRef, useState } from 'react';
import SortSelect from '../../components/SortSelect/SortSelect';
import Filter from '../../components/Filter/Filter';
import { Grid } from '@mui/material';
import getProducts from '../../services/productService/getProducts';
import DataCard from '../../components/DataCard/DataCard';

const TOTAL_PAGES = 5;
const LIMIT = 16;

const Home = () => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);
  const [lastElement, setLastElement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(0);

  const observer = useRef(
    new IntersectionObserver(entries => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum(no => no + 1);
      }
    })
  );

  useEffect(() => {
    if (pageNum <= TOTAL_PAGES) {
      getProducts(LIMIT.toString(), (pageNum * LIMIT).toString(), allData, setAllData, setLoading);
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

  return (
    <div className="home">
      <h1>Home</h1>
      {allData && (
        <>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item minWidth={700} paddingBottom={5}>
              <SearchBar setFilteredData={setFilteredData} />
            </Grid>
          </Grid>
          <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" marginBottom={1}>
            <Grid
              item
              container
              maxWidth={'50%'}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <SortSelect setFilteredData={setFilteredData} />
            </Grid>
            <Grid item container maxWidth={'50%'} direction="column" justifyContent="flex-start" alignItems="flex-end">
              <Filter />
            </Grid>
          </Grid>
        </>
      )}
      {filteredData && (
        <>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              paddingTop: 5,
            }}
          >
            {filteredData.map(data => (
              <Grid item lg={3} container key={data.id}>
                <DataCard product={data} />
              </Grid>
            ))}
            {filteredData?.length == 0 && (
              <Grid item>
                <p>There is no product matching this search.</p>
              </Grid>
            )}
          </Grid>
        </>
      )}
      {!filteredData && (
        <>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              paddingTop: 5,
            }}
          >
            {allData.length > 0 &&
              allData.map((data: any, i) => {
                return i === allData.length - 1 && !loading && pageNum <= TOTAL_PAGES ? (
                  <Grid
                    item
                    lg={3}
                    container
                    key={`${data.id}-${i}`}
                    ref={setLastElement as unknown as React.RefObject<HTMLDivElement>}
                  >
                    <DataCard product={data} />
                  </Grid>
                ) : (
                  <Grid item lg={3} container key={`${data.id}-${i}`}>
                    <DataCard product={data} />
                  </Grid>
                );
              })}
          </Grid>
          <Grid container spacing={3} direction="row" justifyContent="center" alignItems="flex-start" paddingTop={10}>
            {loading && <p className="text-center">Loading...</p>}
            {pageNum - 1 === TOTAL_PAGES && <p className="text-center my-10">You have reached the end.</p>}
          </Grid>
        </>
      )}
    </div>
  );
};

export default Home;
