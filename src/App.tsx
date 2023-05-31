import MusicTop from "./components/MusicTop";
import { Suspense } from 'react';

function App() {

  return <>
		<Suspense fallback={<div>Loading...</div>}>
			<MusicTop />
		</Suspense>
	</>
}

export default App;
