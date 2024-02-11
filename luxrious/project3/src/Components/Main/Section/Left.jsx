import React from "react";
import "./Left.css";
import { Link, Outlet } from "react-router-dom";
import Short from "../../../assets/shorts.png";
import Subsc from "../../../assets/subsc.png";
import Lib from "../../../assets/lib3.png";
const Left = () => {
  return (
    <>
      <aside className="Aside-main">
        <div className="top-l">
          <ul>
            <li>
              <div>
                <i className="fa-solid fa-house"></i>
              </div>
              <Link to="home">Home</Link>
            </li>
            <li>
              <div>
                <img src={Short} alt="" />
              </div>
              <Link to="shorts">Shorts</Link>
            </li>
            <li>
              <div>
                <img src={Subsc} alt="" />
              </div>
              <Link to="subscription">subscription</Link>
            </li>
          </ul>
        </div>
        {/* second top-l */}
        <div className="top-l">
          <ul>
            <li>
              <div>
                <img src={Lib} alt="" />
              </div>
              <Link to="Library">Library</Link>
            </li>
            <li>
              <div>
                <i className="fa-solid fa-clock-rotate-left"></i>
              </div>
              <Link to="History">History</Link>
            </li>
            <li>
              <div>
                <img src={Subsc} alt="" />
              </div>
              <Link to="Videos">Videos</Link>
            </li>

            <li>
              <div>
                <i className="fa-solid fa-house"></i>
              </div>
              <Link to="watchlater">Watch Later</Link>
            </li>
            <li>
              <div>
                <img src={Short} alt="" />
              </div>
              <Link to="saved">Saved</Link>
            </li>
            <li>
              <div>
                <img src={Subsc} alt="" />
              </div>
              <Link to="btn">btn</Link>
            </li>
          </ul>
        </div>
        {/* third top-l */}
        <div className="top-l third-block">
          <span>Explore</span>
          <ul>
            <li>
              <div>
                <i className="fa-solid fa-house"></i>
              </div>
              <Link to="Trending">Trending</Link>
            </li>

            <li>
              <div>
                <i className="fa-solid fa-house"></i>
              </div>
              <Link to="Shoping">Shoping</Link>
            </li>

            <li>
              <div>
                <i className="fa-solid fa-house"></i>
              </div>
              <Link to="Music">Music</Link>
            </li>

            <li>
              <div>
                <i className="fa-solid fa-house"></i>
              </div>
              <Link to="Movies">Movies</Link>
            </li>

            <li>
              <div>
                <i className="fa-solid fa-house"></i>
              </div>
              <Link to="Live">Live</Link>
            </li>
            <li>
              <div>
                <img src={Short} alt="" />
              </div>
              <Link to="Gaming">Gaming</Link>
            </li>
            <li>
              <div>
                <img src={Subsc} alt="" />
              </div>
              <Link to="News">News</Link>
            </li>
            <li>
              <div>
                <img src={Subsc} alt="" />
              </div>
              <Link to="Sports">Sports</Link>
            </li>
            <li>
              <div>
                <img src={Subsc} alt="" />
              </div>
              <Link to="Learning">Learning</Link>
            </li>
            <li>
              <div>
                <img src={Subsc} alt="" />
              </div>
              <Link to="Fashion">Fashion & Beauty</Link>
            </li>
          </ul>
        </div>
        {/* forth top-l */}
        <div className="top-l">
          <span>More from Youtube</span>
          <ul>
            <li>
              <div>
                <i className="fa-solid fa-house"></i>
              </div>
              <Link to="ytpremium">Youtube premium</Link>
            </li>
            <li>
              <div>
                <img src={Short} alt="" />
              </div>
              <Link to="ytstudio">Youtube studio</Link>
            </li>
            <li>
              <div>
                <img src={Short} alt="" />
              </div>
              <Link to="ytmusic">Youtube Music</Link>
            </li>
            <li>
              <div>
                <img src={Subsc} alt="" />
              </div>
              <Link to="ytkids">Youtube kids</Link>
            </li>
          </ul>
        </div>
      </aside>
      {/* this is for outlet */}
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Left;
