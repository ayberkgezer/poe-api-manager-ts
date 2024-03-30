import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling skill gems.
 */
class SkillGemModule extends ItemBaseClass {
  /**
   * Creates an instance of SkillGemModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "SkillGem");
  }
}

export default SkillGemModule;
