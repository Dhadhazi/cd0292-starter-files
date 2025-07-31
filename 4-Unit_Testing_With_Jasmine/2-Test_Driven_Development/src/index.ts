/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v3.1/name/{name} for countries by name
 * https://restcountries.com/v3.1/region/{regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(name: string) {
    const getApi = await axios(`https://restcountries.com/v3.1/name/${name}`);
    const data = getApi.data[0];
    return {
        capital: data.capital[0], 
        region: data.region,
        fifa: data.fifa
    };
}

/** Create a test for this getRegion function */
async function getRegionCountries(region: string) {
  const getApi = await axios(
    `https://restcountries.com/v3.1/region/${region}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getCurrency function here */
async function getCurrency(country: string) {
    const getApi = await axios(`https://restcountries.com/v3.1/currency/${country}`);
    const data = getApi.data[0];
    return data;
}

export default {
  getCountry,
  getRegionCountries,
  getCurrency
};
