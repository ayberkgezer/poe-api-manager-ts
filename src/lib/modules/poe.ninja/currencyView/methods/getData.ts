import fetchData from "../currencyFetch/fetchData";
import filterProperties from "../../../mainfunctions/propertyFilter";

/**
 * Retrieves data from a specified API endpoint, optionally filters the data based on requested properties, and returns the result.
 * @param league The league for which to fetch currency data.
 * @param type The type of data to fetch.
 * @param requestedProperties An optional array of property names to filter the fetched data.
 * @returns A promise that resolves to an array of objects containing the fetched and possibly filtered data.
 * @throws Throws an error if there's an issue with the data fetching process or filtering process.
 */
async function getData(league: string, type: string, requestedProperties?: string[]): Promise<object[]> {
  try {
    // Fetch data using the fetchData function
    const fetchedData: object[] = await fetchData(league, type);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      const result: object[] = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

export default getData;
