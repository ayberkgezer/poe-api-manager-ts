import axios from "axios";
import mergeData from "./merge/mergeData";
import currencyUrlGenerator from "../currencyUrlGenerator/CurrencyUrlGenerator";

/**
 * Fetches data from a specified API endpoint, merges relevant data, and returns the result.
 * @param league The game league for which to fetch currency data.
 * @param type The type of data to fetch. (e.g. "Currency", "Fragment")
 * @returns A promise that resolves to an array of merged objects containing both line and currency details.
 * @throws Throws an error if there's an issue with the API response or data fetching process.
 */
async function fetchData(league: string, type: string): Promise<object[]> {
  try {
    const url: string = currencyUrlGenerator(league, type);
    const response = await axios.get(url, {
      headers: {
          'Accept-Encoding': 'identity',
      },
  });

    if (response.data && response.data.lines && response.data.currencyDetails) {
      const lines: any[] = response.data.lines;
      const currencyDetails: any[] = response.data.currencyDetails;

      // Merge data using the mergeData function
      return mergeData(lines, currencyDetails);
    } else {
      throw new Error(
        "Invalid response format from POE Ninja API CurrencyView"
      );
    }
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

export default fetchData;
