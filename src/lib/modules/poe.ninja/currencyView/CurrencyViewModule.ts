import { CurrencyModule, FragmentModule } from "./currencySubModules/CurrencySubModules";

/**
 * Represents a module for fetching currency overview data.
 */
export class CurrencyViewModule {
  /**
   * Represents a module for fetching currency data.
   */
  public currency: CurrencyModule;

  /**
   * Represents a module for fetching fragment data.
   */
  public fragment: FragmentModule;

  /**
   * Creates a new CurrencyViewModule instance.
   * @param league The name of the Path of Exile league.
   */
  constructor(league: string) {
    this.currency = new CurrencyModule(league);
    this.fragment = new FragmentModule(league);
  }
}
