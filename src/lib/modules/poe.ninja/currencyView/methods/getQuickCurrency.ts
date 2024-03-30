import fetchData from "../currencyFetch/fetchData";

interface CurrencyData {
    currencyTypeName: string;
    chaosEquivalent: number;
  }
  
  /**
   * Retrieves quick currency data for a specific currency in a given league and type.
   * @param {string} league - The league for which to fetch currency data.
   * @param {string} type - The type of currency data to fetch.
   * @param {string} currencyTypeName - The currencyTypeName of the currency to fetch data for.
   * @returns {Promise<{currencyTypeName: string, chaosEquivalent: number}>} An object containing the currency type name and its chaos equivalent.
   * @throws {Error} Throws an error if the currency data cannot be fetched or if the currency is not found.
   */
  async function getQuickCurrency(league: string, type: string, currencyTypeName: string): Promise<CurrencyData> {
    try {
      // Assuming fetchData is an async function
      const fetchedData: CurrencyData[] = await fetchData(league, type) as CurrencyData[];
  
      for (const data of fetchedData) {
        if (data.currencyTypeName === currencyTypeName) {
          return {
            currencyTypeName: data.currencyTypeName,
            chaosEquivalent: data.chaosEquivalent,
          };
        }
      }
  
      throw new Error("Currency not found");
    } catch (error) {
      throw new Error(`Error fetching currency data: ${(error as Error).message}`);
    }
  }
  
  export default getQuickCurrency;
