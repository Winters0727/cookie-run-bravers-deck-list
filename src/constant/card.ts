import BS1_CARDS from "./BS/bs1";
import ST1_CARDS from "./ST/st1";
import ST2_CARDS from "./ST/st2";
import ST3_CARDS from "./ST/st3";

import type { CardPack, Pack } from "../types/card.type";

export const CARDS: { [pack in CardPack]: Pack } = {
  ST1: ST1_CARDS,
  ST2: ST2_CARDS,
  ST3: ST3_CARDS,
  BS1: BS1_CARDS,
};

export const PACKS: { [pack in CardPack]: string } = {
  ST1: "썬키스드",
  ST2: "스파키오",
  ST3: "테라바움",
  BS1: "퍼스트 브레이브",
};
