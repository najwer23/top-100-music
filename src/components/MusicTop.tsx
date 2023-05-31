import { FC } from "react";
import { useRecoilState } from "recoil"
import { musicListTopFiltredSelector } from "../state/selectors"

const MusicTop100:FC = () => {
	const [musicFilterd, setMusicFiltred] = useRecoilState(musicListTopFiltredSelector);

  return (
		<>aahajh</>
  )

}

export default MusicTop100;