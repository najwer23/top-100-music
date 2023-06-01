import { FC } from "react";
import { Album } from "../types";

interface MusicListProps {
	albums: Album[];
}

const MusicList:FC<MusicListProps> = ({albums}) => {

	return (
		< div className="my-5">
			<ol className="relative border-l border-gray-200 dark:border-gray-700">

					{
						albums && albums.map((item: Album, index: number) => {
							return (
								<li key={index} className="mb-2 ml-4">
									<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
									<time className="mb-1 text-lg font-bold leading-none text-gray-900 dark:text-gray-500">{item["customId"]}</time>

									<div className="flex flex-row gap-x-5 my-2">
										<div className="flex-shrink-0"><img src={item["im:image"][0].label} /></div>
										<div>
											<h2 className="text-lg font-semibold text-blue-600">{item["im:name"].label} </h2>
											<h3 className="text-lg font-semibold text-gray-900"><i>{item["im:artist"].label}</i></h3>
											<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item["im:price"].label}</p>
										</div>
									</div>
								</li>
							)
						})
					}

			</ol>
		</div>
	);
}



export default MusicList;