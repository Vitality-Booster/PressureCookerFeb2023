import { atom, selector } from "recoil";

export const showScoreboard = atom({
    key: "showScoreboard",
    default: false,
});