import axios from 'axios';
import Mustache from 'mustache';

export default async function getProducts(limit: string, skip: string, allData: any, setAllData: any, setLoading: any) {
  setLoading(true);
  const url = Mustache.render(process.env.REACT_APP_API_GET_CERTAIN_PRODUCTS as string, {
    limit,
    skip,
  });
  let response = await axios.get(url);
  console.log(response);
  let all = new Set([...allData, ...response.data.products]);
  console.log(all);
  setAllData([...all]);
  setLoading(false);
}
