import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling divination cards.
 */
class DivinationCardModule extends ItemBaseClass {
  /**
   * Creates an instance of DivinationCardModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "DivinationCard");
  }
}

export default DivinationCardModule;
