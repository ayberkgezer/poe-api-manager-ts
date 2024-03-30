import CurrencyBaseClass from "../../CurrencyBaseClass";
import getQuickCurrency from "../../methods/getQuickCurrency";

/**
 * Represents a module for interacting with currency data.
 */
class CurrencyModule extends CurrencyBaseClass {
  /**
   * The league name for which currency data is requested.
   */
  protected league: string;

  /**
   * The type name for which currency data is requested.
   */
  protected typeName: string;

  /**
   * Constructs a new CurrencyModule instance.
   * @param league The league name for which currency data is requested.
   */
  constructor(league: string) {
    const type: string = "Currency";
    super(league, type);
    this.league = league;
    this.typeName = type;
  }

  /**
   * Fetches quick currency data for a given currency ID. Defaults to "Divine Orb" if no ID is provided.
   * @param currencyTypeName The "currencyTypeName" of the currency to fetch data for. Defaults to "Divine Orb".
   * @returns A promise that resolves with the currency data, including the currency type name and its chaos equivalent.
   * @throws Throws an error if fetching currency data fails.
   */
  async getQuickCurrency(currencyTypeName: string = "Divine Orb"): Promise<{ currencyTypeName: string, chaosEquivalent: number }> {
    try {
      return await getQuickCurrency(
        this.league,
        this.typeName,
        currencyTypeName
      );
    } catch (error: any) {
      throw new Error(`Error fetching CurrencyData data: ${error.message}`);
    }
  }
}

export default CurrencyModule;
