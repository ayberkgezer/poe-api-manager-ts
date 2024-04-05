import getData from "./allModules/methods/getData";

/**
 * Basic class for handling data retrieval.
 */
abstract class WatchBaseClass {
  /**
   * The league name for which data is requested.
   */
  protected readonly league: string;

  /**
   * The type of data.
   */
  protected readonly typeName: string;

  /**
   * Creates a new instance of WatchBaseClass.
   * @param league - The league from which the data will be fetched.
   * @param type - The type of data to be fetched.
   */
  constructor(league: string,type: string) {
    this.league = league;
    this.typeName = type;
  }

  /**
   * Executes queries to fetch data.
   * @async
   * @param requestedProperties - List of properties to be fetched.
   * @returns - A Promise containing an object with the requested properties.
   * @throws - Throws errors encountered while fetching data.
   */
  public async getData(requestedProperties: string[] = []): Promise<object[]> {
    try {
      return await getData(this.league, this.typeName, requestedProperties);
    } catch (error) {
      throw new Error(`Error fetching WatchView data: ${(error as Error).message}`);
    }
  }
}

export default WatchBaseClass;
