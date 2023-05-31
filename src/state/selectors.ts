import { selector } from "recoil"
import { musicListTopUrl, musicListTopSearchValue } from "./atoms"
import { Album } from "../types"

export const fetchMusicListTopSelctor = selector<Album[]>({
  key: "FetchMusicListTopSelctor",
  get: async ({ get }) => {
    try {
      const url = get(musicListTopUrl)
      const response = await fetch(url)
      const data = await response.json()

			let albums = data?.feed?.entry;

			//workaround for missing position in chart
			for (let i=0; i<albums.length; i++) {
				albums[i]["customId"] = i+1
			}

			return albums as Album[];

    } catch (error) {
      throw error
    }
  },
})

export const musicListTopFilteredSelector = selector<{
	searchValue: string;
	filteredList: Album[];
}>({
  key: 'MusicListTopFilteredSelector',
  get: ({get}) => {
		let arrMusicListTop = get(fetchMusicListTopSelctor);
		let currentMusicListTopSearchValue = get(musicListTopSearchValue)

		let filtered = arrMusicListTop.filter((item:Album) => {
			return (
				item["im:artist"].label.toLowerCase().includes(currentMusicListTopSearchValue.searchValue) ||
				item["im:name"].label.toLowerCase().includes(currentMusicListTopSearchValue.searchValue)
			)
		})

		return {
			searchValue: currentMusicListTopSearchValue.searchValue,
			filteredList: filtered,
		};
	},
	set: ({set}, newValue) => set(musicListTopSearchValue, (newValue))
});