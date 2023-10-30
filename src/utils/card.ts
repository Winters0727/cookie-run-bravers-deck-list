import type {
  Card,
  CardColor,
  CardLevel,
  CardPack,
  CardRarity,
  CardType,
  CookieCard,
  Pack,
} from "../types/card.type";

interface GroupValueParameter {
  color?: CardColor;
  type?: CardType;
}

interface GroupArrayParameter {
  rarity?: CardRarity;
  pack?: CardPack;
}

export const flattenCards = (
  packs: { [key in CardPack]: Pack },
  flag: "all" | CardType = "all"
) => {
  const packList = Object.keys(packs) as CardPack[];

  return flag === "all"
    ? packList
        .map((packKey) => {
          const { cookie, item, trap, stage } = packs[packKey];
          return [...cookie, ...item, ...trap, ...stage];
        })
        .flat()
    : packList.map((packKey) => packs[packKey][flag]).flat();
};

export const sortByFlag = (
  cards: Card[],
  flag: keyof Omit<Card, "level"> = "code"
) => {
  const copiedCards = [...cards];

  copiedCards.sort((prev, next) => (prev[flag]! <= next[flag]! ? -1 : 1));

  return copiedCards;
};

export const groupByLevel = (cards: CookieCard[], level: CardLevel) => {
  let copiedCards = [...cards];

  copiedCards = copiedCards.filter((card) => card.level === level);

  return copiedCards;
};

export const groupByValue = (cards: Card[], parameter: GroupValueParameter) => {
  let copiedCards = [...cards];

  const { color, type } = parameter;

  if (type) copiedCards = copiedCards.filter((card) => card.type === type);
  if (color) copiedCards = copiedCards.filter((card) => card.color === color);

  return copiedCards;
};

export const groupByArray = (cards: Card[], parameter: GroupArrayParameter) => {
  let copiedCards = [...cards];

  const { rarity, pack } = parameter;

  if (pack)
    copiedCards = copiedCards.filter((card) => card.pack.includes(pack));
  if (rarity)
    copiedCards = copiedCards.filter((card) => card.rarity.includes(rarity));

  return copiedCards;
};

export const searchByKeyword = (keyword: string, cards: Card[]) => {
  const keywordRegex = new RegExp(keyword);
  return cards.filter((card) => keywordRegex.test(card.name));
};
