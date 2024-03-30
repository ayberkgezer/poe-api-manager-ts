import ItemBaseClass from "../../ItemBaseClass";

/**
 * Represents a module for handling invitations.
 */
class InvitationModule extends ItemBaseClass {
  /**
   * Creates an instance of InvitationModule.
   * @param league - The league name.
   */
  constructor(league: string) {
    super(league, "Invitation");
  }
}

export default InvitationModule;
