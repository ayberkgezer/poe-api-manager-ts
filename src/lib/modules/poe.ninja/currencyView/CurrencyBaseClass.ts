import getData from "./methods/getData";

/**
 * Represents a base class for interacting with data.
 */
abstract class CurrencyBaseClass {
  /**
   * The league name for which data is requested.
   */
  protected readonly league: string;

  /**
   * The type of data.
   */
  protected readonly typeName: string;

  /**
   * Constructs a new CurrencyBaseClass instance.
   * @param league The league name for which data is requested.
   * @param typeName The type of data.
   */
  constructor(league: string, typeName: string) {
    this.league = league;
    this.typeName = typeName;
  }

  /**
   * Retrieves data based on the specified properties.
   * @async
   * @param requestedProperties The properties to include in the fetched data.
   * @returns The fetched data in JSON format.
   * @throws If an error occurs during the data fetching process.
   */
  public async getData(requestedProperties: string[] = []): Promise<object[]> {
    try {
      return await getData(this.league, this.typeName, requestedProperties);
    } catch (error: any) {
      throw new Error(`Error fetching ${this.typeName} data: ${error.message}`);
    }
  }
}

export default CurrencyBaseClass;
