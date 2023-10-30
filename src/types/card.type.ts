export type CardType = "cookie" | "item" | "trap" | "stage";
export type CardColor = "R" | "Y" | "G" | "M";
export type CardLevel = 1 | 2 | 3;
export type CardRarity =
  | "C"
  | "U"
  | "R"
  | "SR"
  | "UR"
  | "SEC"
  | "SSR"
  | "SUR"
  | "UNKNOWN";
export type CardPack = "ST1" | "ST2" | "ST3" | "BS1";

interface CardBasicInfo {
  code: string;
  name: string;
  type: CardType;
  color: CardColor;
  rarity: CardRarity[];
  description?: string;
  pack: CardPack[];
}

export interface CookieCard extends CardBasicInfo {
  level: CardLevel;
}
export interface ItemCard extends CardBasicInfo {}
export interface TrapCard extends CardBasicInfo {}
export interface StageCard extends CardBasicInfo {}

export type Card = CookieCard | ItemCard | TrapCard | StageCard;

export type Pack = {
  [key in CardType]: Card[];
} & { repack?: string[] };
