import fetchData from "../itemFetch/fetchItem";
import filterProperties from "../../../mainfunctions/propertyFilter";

/**
 * Asynchronously fetches and filters item-related data from a specified URL.
 *
 * @param league - The name of the current league.
 * @param type - The type of item data to fetch.
 * @param requestedProperties - (Optional) An array of property names to include in the filtered result.
 * @returns A promise that resolves to the fetched or filtered item data.
 * @throws Throws an error if there's an issue fetching or processing the data.
 */
async function getData(league: string, type: string, requestedProperties?: string[]): Promise<object[]> {
  try {
    // Fetch data using the fetchData function
    const fetchedData = await fetchData(league, type);

    // If requestedProperties are specified, filter the data based on those properties
    if (requestedProperties) {
      const result = filterProperties(fetchedData, requestedProperties);
      return result;
    } else {
      // If no specific properties are requested, return the entire fetched data
      return fetchedData;
    }
  } catch (error) {
    /**
     * Throws an error if there's an issue fetching or processing the item data.
     * @throws {Error}
     */
    throw new Error(`Error fetching data: ${(error as Error).message}`);
  }
}

export default getData;
