import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      
    <div className='row-container'>
      <Row title="Popular on Netflix" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Blockbuster Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romentic Comedy" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumantaries} />
    </div>

    
    </div>
  );
}

export default App;
