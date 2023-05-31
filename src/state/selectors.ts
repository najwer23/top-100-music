import { selector } from "recoil"
import { musicListTopUrl, musicListTopSearchValue } from "./atoms"

export const fetchMusicListTopSelctor = selector({
  key: "FetchMusicListTopSelctor",
  get: async ({ get }) => {
    try {
      const url = get(musicListTopUrl)
      const response = await fetch(url)
      const data = await response.json()
			return data?.feed?.entry;
    } catch (error) {
      throw error
    }
  },
})

export const musicListTopFilteredSelector = selector({
  key: 'MusicListTopFilteredSelector',
  get: ({get}) => {
		let arrMusicListTop = get(fetchMusicListTopSelctor);
		let currentMusicListTopSearchValue = get(musicListTopSearchValue)

		if (currentMusicListTopSearchValue === null) {
			return arrMusicListTop
		}

		let filtered = arrMusicListTop.filter((item:any) => {
			return (
				item["im:artist"].label.includes(currentMusicListTopSearchValue) ||
				item["im:name"].label.includes(currentMusicListTopSearchValue)
			)
		})

		return filtered;
	},
	set: ({set}, newValue) => {
		set(musicListTopSearchValue, (newValue))
	}
});