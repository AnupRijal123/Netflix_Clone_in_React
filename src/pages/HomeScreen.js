import '../styles/HomeScreen.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../api/Request';
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Navbar />

            <Banner />

            <Row title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />


        </div>
    )
}
export default HomeScreen;