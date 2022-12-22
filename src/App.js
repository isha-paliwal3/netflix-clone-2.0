import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title = "Popular on Netflix" fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title = "Netflix Originals" fetchUrl = {requests.fetchTrending}/>
    </div>
  );
}

export default App;
