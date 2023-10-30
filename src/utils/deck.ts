import { CARDS } from "../constant/card";
import type { CardPack } from "../types/card.type";

interface Deck {
  [code: string]: number;
}

const CARD_SPLITER = "$";
const CARD_TYPE_SPLITER = "&";
const PACK_KEYS = Object.keys(CARDS);

export const encodeBase64 = (rearString: string) => btoa(rearString);
export const decodeBase64 = (encodedString: string) => atob(encodedString);

export const createDeckArray = (deck: Deck) => {
  const cardList = Object.keys(deck);
  cardList.sort((prev, next) => (prev <= next ? -1 : 1));

  const sortedDeck = cardList
    .map((card) => Array.from({ length: deck[card] }).fill(card))
    .flat(1) as string[];
  return sortedDeck;
};

const createDeckMap = (deck: Deck) => {
  const deckMap = new Map<string, string[]>();
  PACK_KEYS.forEach((packKey) => deckMap.set(packKey, []));

  const cardCodes = Object.keys(deck);
  cardCodes.forEach((cardCode) => {
    const [cardPrefix, cardNumber] = cardCode.split("-") as [CardPack, string];

    const cardInfo = `${cardNumber},${deck[cardCode]}`;

    const cardInfos = deckMap.get(cardPrefix) as string[];
    deckMap.set(cardPrefix, [...cardInfos, cardInfo]);
  });

  return deckMap;
};

export const createDeckCode = (deck: Deck) => {
  const deckMap = createDeckMap(deck);

  const deckCode = encodeBase64(
    PACK_KEYS.map((packKey) => {
      const cardInfos = deckMap.get(packKey);
      return cardInfos?.length
        ? `${packKey}-${cardInfos.join(CARD_SPLITER)}`
        : "";
    })
      .filter((deckString) => deckString.length)
      .join(CARD_TYPE_SPLITER)
  );

  return deckCode;
};

export const parseDeckCode = (deckCode: string) => {
  const deck: Deck = {};
  const deckString = decodeBase64(deckCode);

  const packInfos = deckString.split(CARD_TYPE_SPLITER);
  packInfos.forEach((packInfo) => {
    const [cardPrefix, cards] = packInfo.split("-");
    const cardInfos = cards.split(CARD_SPLITER);
    cardInfos.forEach((cardInfo) => {
      const [cardNumber, counts] = cardInfo.split(",");
      deck[`${cardPrefix}-${cardNumber}`] = parseInt(counts);
    });
  });

  return deck;
};
