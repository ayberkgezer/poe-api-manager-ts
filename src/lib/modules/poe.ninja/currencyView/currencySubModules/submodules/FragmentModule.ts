import CurrencyBaseClass from "../../CurrencyBaseClass";

/**
 * Represents a module for interacting with Fragment data.
 */
class FragmentModule extends CurrencyBaseClass {
    /**
   * The league name for which Fragment data is requested.
   */
protected league: string;

/**
 * The type name for which Fragment data is requested.
 */
protected typeName: string;

/**
 * Constructs a new Fragment instance.
 * @param league The league name for which Fragment data is requested.
 */
constructor(league: string) {
  const type: string = "Fragment";
  super(league, type);
  this.league = league;
  this.typeName = type;
}

}

export default FragmentModule;
