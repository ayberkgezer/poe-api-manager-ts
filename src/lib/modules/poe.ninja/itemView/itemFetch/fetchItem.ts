import axios from "axios";
import urlGenerator from "../itemUrlGenerator/itemUrlGenerator";

/**
 * Asynchronously fetches data from a specified URL for item-related information.
 *
 * @param league - The league name for the data fetch operation.
 * @param type - The specific type of item data to fetch.
 * @returns A promise that resolves to the fetched item data.
 * @throws Throws an error if there's an issue fetching or processing the data.
 */
async function fetchData(league: string, type: string): Promise<object[]> {
  try {
    const url: string = urlGenerator(league, type);

    const response = await axios.get(url, {
      headers: {
          'Accept-Encoding': 'identity',
      },
  });

    if (response.data && response.data.lines) {
      return response.data.lines;
    } else {
      throw new Error("Invalid response format from POE Ninja API ItemView");
    }
  } catch (error) {
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
}

export default fetchData;
