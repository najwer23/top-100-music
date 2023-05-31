import { atom } from "recoil"
import { Album } from "../types"

export const musicListTopUrl = atom({
  key: "MusicListTopUrl",
  default: `https://itunes.apple.com/us/rss/topalbums/limit=100/json` as string,
})

export const musicListTopSearchValue = atom({
  key: "MusicListTopSearchValue",
  default: {
		searchValue: "" as string,
		filteredList: [] as Album[],
	}
})