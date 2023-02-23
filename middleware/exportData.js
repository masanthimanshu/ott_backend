import { readFileSync } from "node:fs";

export const cards = JSON.parse(readFileSync("data/cards.json"));
export const allData = JSON.parse(readFileSync("data/allData.json"));
export const topCard = JSON.parse(readFileSync("data/topCard.json"));
export const featured = JSON.parse(readFileSync("data/featured.json"));
export const channels = JSON.parse(readFileSync("data/liveChannels.json"));
