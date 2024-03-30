import getData from "./methods/getData";

/**
 * Represents an item base class for retrieving data.
 */
class ItemBaseClass {
  /**
   * The type of item to retrieve data for.
   */
  private readonly type: string;
  
  /**
   * The name of the current league.
   */
  private readonly league: string;

  /**
   * Constructs an instance of ItemBaseClass.
   * @param {string} league - The name of the league to retrieve data for.
   * @param {string} typeName - The type of item to retrieve data for.
   */
  constructor(league: string, typeName: string) {
    this.type = typeName;
    this.league = league;
  }

  /**
   * Retrieves item data based on requested properties.
   * @param requestedProperties - An array of properties to retrieve for each item.
   * @returns A promise that resolves with the requested item data.
   * @throws If there is an error fetching the data.
   */
  public async getData(requestedProperties: string[]): Promise<object[]> {
    try {
      return await getData(this.league, this.type, requestedProperties);
    } catch (error: any) {
      throw new Error(`Error fetching ${this.type} data: ${error.message}`);
    }
  }
}

export default ItemBaseClass;
