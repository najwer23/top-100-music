import { selector } from "recoil"
import { musicListTopUrl, musicListTopSearchValue } from "./atoms"

export const fetchMusicListTop100Selctor = selector({
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

export const musicListTopFiltredSelector = selector({
  key: 'MusicListTopFiltredSelector',
  get: ({get}) => {
		let arrMusicListTop = get(fetchMusicListTop100Selctor);
		let currentMusicListTopSearchValue = get(musicListTopSearchValue)

		if (currentMusicListTopSearchValue === null) {
			return arrMusicListTop
		}

		let filtred = arrMusicListTop.filter((x:any) => {
			return (
				x["im:artist"].label.includes(currentMusicListTopSearchValue) ||
				x["im:name"].label.includes(currentMusicListTopSearchValue)
			)
		})

		return filtred;
	},
	set: ({set}, newValue) => {
		set(musicListTopSearchValue, (newValue))
	}
});