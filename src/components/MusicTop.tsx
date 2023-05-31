import { FC, useRef } from "react";
import { useRecoilState } from "recoil"
import { musicListTopFilteredSelector } from "../state/selectors"
import Input from "./inputs/search";
import MusicList from "./MusicList"

const MusicTop:FC = () => {
	const [musicFiltered, setMusicFiltred] = useRecoilState(musicListTopFilteredSelector);
	const musicFilteredId = useRef<HTMLInputElement>(null)

	function updateMusicFiltered() {
		let value = musicFilteredId.current!.value;

		if (value !== '') {
			value = value.toLocaleLowerCase();
		}

		setMusicFiltred(value)
	}

  return (
		<>
			<Input
					innerRef={musicFilteredId}
					id={"music-top-search"}
					label={"Search"}
					type="search"
					onKeyUp={updateMusicFiltered}
					onBlur={updateMusicFiltered}
				/>


			<MusicList albums={musicFiltered} />

		</>
  )

}

export default MusicTop;