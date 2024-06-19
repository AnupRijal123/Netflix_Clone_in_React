import '../styles/HomeScreen.css';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../api/Request';
import Youtube from 'react-youtube';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
function HomeScreen() {
    const [trailerKey, setTrailerKey] = useState('');
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        }
    };


    const getTrailerKey = function (key) {
        if (trailerKey) {
            setTrailerKey('');
        } else {
            setTrailerKey(key);
        }
    }

    return (
        <div className="homeScreen">
            <Navbar />

            <Banner />

            <Row title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
                getTrailer={getTrailerKey}
            />

            {trailerKey && <Youtube videoId={trailerKey} opts={opts} />}

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} getTrailer={getTrailerKey} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} getTrailer={getTrailerKey} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} getTrailer={getTrailerKey} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} getTrailer={getTrailerKey} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} getTrailer={getTrailerKey} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} getTrailer={getTrailerKey} />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} getTrailer={getTrailerKey} />

            <Footer />

        </div>
    )
}
export default HomeScreen;