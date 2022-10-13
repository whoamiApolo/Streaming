import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import Hero from "./components/Hero";
import Header from "./components/Header";

import { FooterContainer } from "./components/Footer.styles";



const URL = "https://api.themoviedb.org/3";
const API_KEY = "6595602f760ef32263f1afde7645f18f";

export const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

function App() {
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlayinh] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpComing] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}${endpoints.originals}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => {console.log(res.data.results)
        setOriginals(res.data.results)
      }
        );

    axios
      .get(`${URL}${endpoints.trending}`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => setTrending(res.data.results));

    axios
      .get(`${URL}${endpoints.now_playing}`, {
        params: { api_key: API_KEY },
      })
      .then((res) => setNowPlayinh(res.data.results));

    axios.get(`${URL}${endpoints.popular}`, {
      params: { api_key: API_KEY },
    })
    .then((res) => setPopular(res.data.results))

    axios.get(`${URL}${endpoints.top_rated}`, {
      params: { api_key: API_KEY },
    })
    .then((res) => setTopRated(res.data.results))

    axios
    .get(`${URL}${endpoints.upcoming}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setUpComing(res.data.results));


  }, []);


  useEffect(() => console.log(originals), [originals]);
  return (
    <>
      <Hero movie={originals[Math.floor(Math.random() * originals.length)]} />
      <Movies title="Filmes Originais" movies={originals} />
      <Movies title="Filmes em Alta" movies={trending} />
      <Movies title="Filmes em Cartaz" movies={nowPlaying} />
      <Movies title="Filmes Populares" movies={popular} />
      <Movies title="Filmes Mais Avaliados" movies={topRated} />
      <Movies title="Próximos Filmes" movies={upcoming} />
      <FooterContainer>Apolinário - 2022</FooterContainer>

    </>
  );
  
}
export default App;