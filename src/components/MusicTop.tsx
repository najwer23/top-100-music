import { FC, useRef } from "react";
import { useRecoilState } from "recoil"
import { musicListTopFilteredSelector } from "../state/selectors"
import Input from "./inputs/search";
import MusicList from "./MusicList"

const MusicTop:FC = () => {
	const [musicFiltered, setMusicFiltred] = useRecoilState(musicListTopFilteredSelector);
	const musicFilteredId = useRef<HTMLInputElement>(null)

	function updateMusicFiltered(): void {
		let value = musicFilteredId.current!.value;

		if (value !== '') {
			value = value.toLowerCase();
		}

		setMusicFiltred({
			...musicFiltered,
			searchValue: value
		});
	}

  return (
		<div className="mx-10 my-10">
			<h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Top hits</h1>

			<Input
					innerRef={musicFilteredId}
					id={"music-top-search"}
					label={"Search"}
					type="search"
					onKeyUp={updateMusicFiltered}
					onBlur={updateMusicFiltered}
				/>

			<MusicList albums={musicFiltered.filteredList} />
		</div>
  )

}

export default MusicTop;