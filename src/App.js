import style from './App.module.css';
import {
  Main,
  Footer
} from './components';

function App() {
  return (
    <div className={style.App}>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
