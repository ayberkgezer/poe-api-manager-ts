import { BaseTypeModule, BeastModule, DeliriumOrbsModule, DivinationCardModule, EssenceModule, FossilModule, HelmetEnchantModule, IncubatorModule, MapModule, OilModule, ResonatorModule, ScarabModule, SkillGemModule, UniqueAccessoryModule, UniqueArmourModule, UniqueFlaskModule, UniqueJewelModule, UniqueMapModule, UniqueWeaponModule, VialsModule, OmenModule, MemoryModule, InvitationModule, UniqueRelicsModule, ClusterJewelModule, BlightedMapModule, BlightRavagedMapModule } from './itemSubmodules/itemSubModules';

/**
 * Represents a module for viewing item-related information in a specific Path of Exile league.
 */
export class ItemViewModule {
  /**
   * Represents a submodule for base type item information.
   */
  public baseType: BaseTypeModule;

  /**
   * Represents a submodule for beast item information.
   */
  public beast: BeastModule;

  /**
   * Represents a submodule for delirium orbs item information.
   */
  public deliriumOrbs: DeliriumOrbsModule;

  /**
   * Represents a submodule for divination card item information.
   */
  public divinationCard: DivinationCardModule;

  /**
   * Represents a submodule for essence item information.
   */
  public essence: EssenceModule;

  /**
   * Represents a submodule for fossil item information.
   */
  public fossil: FossilModule;

  /**
   * Represents a submodule for helmet enchant item information.
   */
  public helmetEnchant: HelmetEnchantModule;

  /**
   * Represents a submodule for incubator item information.
   */
  public incubator: IncubatorModule;

  /**
   * Represents a submodule for map item information.
   */
  public map: MapModule;

  /**
   * Represents a submodule for oil item information.
   */
  public oil: OilModule;

  /**
   * Represents a submodule for resonator item information.
   */
  public resonator: ResonatorModule;

  /**
   * Represents a submodule for scarab item information.
   */
  public scarab: ScarabModule;

  /**
   * Represents a submodule for skill gem item information.
   */
  public skillGem: SkillGemModule;

  /**
   * Represents a submodule for unique accessory item information.
   */
  public uniqueAccessory: UniqueAccessoryModule;

  /**
   * Represents a submodule for unique armour item information.
   */
  public uniqueArmour: UniqueArmourModule;

  /**
   * Represents a submodule for unique flask item information.
   */
  public uniqueFlask: UniqueFlaskModule;

  /**
   * Represents a submodule for unique jewel item information.
   */
  public uniqueJewel: UniqueJewelModule;

  /**
   * Represents a submodule for unique map item information.
   */
  public uniqueMap: UniqueMapModule;

  /**
   * Represents a submodule for unique weapon item information.
   */
  public uniqueWeapon: UniqueWeaponModule;

  /**
   * Represents a submodule for vials item information.
   */
  public vials: VialsModule;

  /**
   * Represents a submodule for omen item information.
   */
  public omen: OmenModule;

  /**
   * Represents a submodule for memory item information.
   */
  public memory: MemoryModule;

  /**
   * Represents a submodule for invitation item information.
   */
  public invitation: InvitationModule;

  /**
   * Represents a submodule for unique relics item information.
   */
  public uniqueRelics: UniqueRelicsModule;

  /**
   * Represents a submodule for cluster jewel item information.
   */
  public clusterJewel: ClusterJewelModule;

  /**
   * Represents a submodule for blighted map item information.
   */
  public blightedMap: BlightedMapModule;

  /**
   * Represents a submodule for blight ravaged map item information.
   */
  public blightRavagedMap: BlightRavagedMapModule;

  /**
   * Creates a new instance of ItemWievModule.
   * @param league - The Path of Exile league for which the item information is retrieved.
   */
  constructor(league: string) {
    this.baseType = new BaseTypeModule(league);
    this.beast = new BeastModule(league);
    this.deliriumOrbs = new DeliriumOrbsModule(league);
    this.divinationCard = new DivinationCardModule(league);
    this.essence = new EssenceModule(league);
    this.fossil = new FossilModule(league);
    this.helmetEnchant = new HelmetEnchantModule(league);
    this.incubator = new IncubatorModule(league);
    this.map = new MapModule(league);
    this.oil = new OilModule(league);
    this.resonator = new ResonatorModule(league);
    this.scarab = new ScarabModule(league);
    this.skillGem = new SkillGemModule(league);
    this.uniqueAccessory = new UniqueAccessoryModule(league);
    this.uniqueArmour = new UniqueArmourModule(league);
    this.uniqueFlask = new UniqueFlaskModule(league);
    this.uniqueJewel = new UniqueJewelModule(league);
    this.uniqueMap = new UniqueMapModule(league);
    this.uniqueWeapon = new UniqueWeaponModule(league);
    this.vials = new VialsModule(league);
    this.omen = new OmenModule(league);
    this.memory = new MemoryModule(league);
    this.invitation = new InvitationModule(league);
    this.uniqueRelics = new UniqueRelicsModule(league);
    this.clusterJewel = new ClusterJewelModule(league);
    this.blightedMap = new BlightedMapModule(league);
    this.blightRavagedMap = new BlightRavagedMapModule(league);
  }
}
