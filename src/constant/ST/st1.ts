import type {
  CookieCard,
  ItemCard,
  TrapCard,
  StageCard,
  Pack,
} from "../../types/card.type";

const ST1_COOKIE_CARDS: CookieCard[] = [
  {
    code: "ST1-001",
    name: "공주맛 쿠키",
    type: "cookie",
    color: "R",
    level: 2,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-002",
    name: "닌자맛 쿠키",
    type: "cookie",
    color: "R",
    level: 2,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-003",
    name: "다이노사워 쿠키",
    type: "cookie",
    color: "R",
    level: 2,
    rarity: ["U"],
    pack: ["ST1"],
  },
  {
    code: "ST1-004",
    name: "당근맛 쿠키",
    type: "cookie",
    color: "R",
    level: 1,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-005",
    name: "대파맛 쿠키",
    type: "cookie",
    color: "R",
    level: 2,
    rarity: ["U"],
    pack: ["ST1"],
  },
  {
    code: "ST1-006",
    name: "명량한 쿠키",
    type: "cookie",
    color: "R",
    level: 2,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-007",
    name: "민트초코 쿠키",
    type: "cookie",
    color: "R",
    level: 3,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-008",
    name: "벚꽃맛 쿠키",
    type: "cookie",
    color: "R",
    level: 3,
    rarity: ["U"],
    pack: ["ST1"],
  },
  {
    code: "ST1-009",
    name: "에스프레소맛 쿠키",
    type: "cookie",
    color: "R",
    level: 3,
    rarity: ["SR"],
    pack: ["ST1"],
  },
  {
    code: "ST1-010",
    name: "연금술사맛 쿠키",
    type: "cookie",
    color: "R",
    level: 1,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-011",
    name: "용감한 쿠키",
    type: "cookie",
    color: "R",
    level: 1,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-012",
    name: "좀비맛 쿠키",
    type: "cookie",
    color: "R",
    level: 1,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-013",
    name: "탐험가맛 쿠키",
    type: "cookie",
    color: "R",
    level: 1,
    rarity: ["C"],
    pack: ["ST1"],
  },
  {
    code: "ST1-014",
    name: "페페론치노맛 쿠키",
    type: "cookie",
    color: "R",
    level: 3,
    rarity: ["SR"],
    pack: ["ST1"],
  },
  {
    code: "ST1-015",
    name: "피스타치오맛 쿠키",
    type: "cookie",
    color: "R",
    level: 3,
    rarity: ["U"],
    pack: ["ST1"],
  },
];

const ST1_ITEM_CARDS: ItemCard[] = [
  {
    code: "ST1-016",
    name: "끈끈이 젤리",
    type: "item",
    color: "R",
    rarity: ["U"],
    pack: ["ST1"],
  },
  {
    code: "ST1-017",
    name: "비장의 케이크 나이프",
    type: "item",
    color: "R",
    rarity: ["U"],
    pack: ["ST1"],
  },
  {
    code: "ST1-018",
    name: "슈가범벅 달팽이 캔디",
    type: "item",
    color: "R",
    rarity: ["U"],
    pack: ["ST1"],
  },
  {
    code: "ST1-019",
    name: "화끈한 젤리 덩어리",
    type: "item",
    color: "R",
    rarity: ["U"],
    pack: ["ST1"],
  },
];

const ST1_TRAP_CARDS: TrapCard[] = [
  {
    code: "ST1-020",
    name: "옴짝달싹 반죽늪",
    type: "trap",
    color: "R",
    rarity: ["U"],
    pack: ["ST1"],
  },
  {
    code: "ST1-021",
    name: "잘못 밟은 별사탕",
    type: "trap",
    color: "R",
    rarity: ["U"],
    pack: ["ST1"],
  },
];

const ST1_STAGE_CARDS: StageCard[] = [
  {
    code: "ST1-022",
    name: "이글이글 젤리화산",
    type: "stage",
    color: "R",
    rarity: ["U"],
    pack: ["ST1"],
  },
];

const ST1_CARDS: Pack = {
  cookie: ST1_COOKIE_CARDS,
  item: ST1_ITEM_CARDS,
  trap: ST1_TRAP_CARDS,
  stage: ST1_STAGE_CARDS,
};

export default ST1_CARDS;