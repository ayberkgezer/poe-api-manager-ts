import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents an item submodule for retrieving data on Coffin items.
 */
class CoffinModule extends ItemBaseClass {
    /**
     * Constructs an instance of CoffinModule.
     * @param league - The name of the league to retrieve data for.
     */
  constructor(league: string) {
    const type: string = "Coffin";
    super(league, type);
  }
}

export default CoffinModule;