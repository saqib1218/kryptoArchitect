import Route from './routes';
// @ts-ignore
import {usePath} from "hookrouter";
import {useEffect} from "react";

function App() {
    const path = usePath()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [path])

  return (
    <div>
      <Route />
    </div>
  );
}

export default App;
