import MusicTop from "./components/MusicTop";
import { Suspense } from 'react';

function App() {

  return <>
		<Suspense fallback={<></>}>
			<MusicTop />
		</Suspense>
	</>
}

export default App;
