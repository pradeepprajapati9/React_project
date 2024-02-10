import React from "react";
import "./Main.css";
import Left from "./Section/Left";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shorts from "./Pages/Shorts";
import Subscribe from "./Pages/Subscribe";
import Library from "./Pages/Library";
import History from "./Pages/History";
import Saved from "./Pages/Saved";
import Trending from "./Pages/Trending";
import Shoping from "./Pages/Shoping";
import Movies from "./Pages/Movies";
import Live from "./Pages/Live";
import Gaming from "./Pages/Gaming";
import Sports from "./Pages/Sports";
import Learning from "./Pages/Learning";
import Fashion from "./Pages/Fashion";
import Ytstudio from "./Pages/Ytstudio";
import Ytmusic from "./Pages/Ytmusic";
import Ytkids from "./Pages/Ytkids";
import Videos from "./Pages/Videos";
import Watchlater from "./Pages/Watchlater";
import Music from "./Pages/Music";
import News from "./Pages/News";
import Ytpremium from "./Pages/Ytpremium";

const Main = () => {
  return (
    <section className="Main-section">
      <Router>
        <Routes>
          <Route path="/" element={<Left />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="shorts" element={<Shorts />}></Route>
            <Route path="subscription" element={<Subscribe />}></Route>
            <Route path="Library" element={<Library />}></Route>
            <Route path="History" element={<History />}></Route>
            <Route path="Videos" element={<Videos />}></Route>
            <Route path="watchlater" element={<Watchlater />}></Route>
            <Route path="saved" element={<Saved />}></Route>
            <Route path="btn" element={<btn />}></Route>
            <Route path="Trending" element={<Trending />}></Route>
            <Route path="Shoping" element={<Shoping />}></Route>
            <Route path="Music" element={<Music />}></Route>
            <Route path="Movies" element={<Movies />}></Route>
            <Route path="Live" element={<Live />}></Route>
            <Route path="Gaming" element={<Gaming />}></Route>
            <Route path="News" element={<News />}></Route>
            <Route path="Sports" element={<Sports />}></Route>
            <Route path="Learning" element={<Learning />}></Route>
            <Route path="Fashion" element={<Fashion />}></Route>
            <Route path="ytpremium" element={<Ytpremium />}></Route>
            <Route path="ytstudio" element={<Ytstudio />}></Route>
            <Route path="ytmusic" element={<Ytmusic />}></Route>
            <Route path="ytkids" element={<Ytkids />}></Route>
          </Route>
        </Routes>
      </Router>
    </section>
  );
};

export default Main;
