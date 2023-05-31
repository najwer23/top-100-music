import { atom } from "recoil"

export const musicListTopUrl = atom({
  key: "MusicListTopUrl",
  default: `https://itunes.apple.com/us/rss/topalbums/limit=100/json` as string,
})

export const musicListTopSearchValue = atom({
  key: "MusicListTopSearchValue",
  default: "Tina Turner"
})