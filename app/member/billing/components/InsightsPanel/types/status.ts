export const complainStatusEnum = {
  RESOLVED: "RESOLVED",
  PENDING: "PENDING",
} as const;

export type ComplainStatus =
  (typeof complainStatusEnum)[keyof typeof complainStatusEnum];

export const ComplainTypeEnum = {
  FOOD: "FOOD",
  ROOM: "ROOM",
  GAME: "GAME",
  OTHERS: "OTHERS",
} as const;

export type ComplainType =
  (typeof ComplainTypeEnum)[keyof typeof ComplainTypeEnum];
