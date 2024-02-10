import React from "react";
import ReactPlayer from "react-player";
import { Video_path } from "../../../Videos/Videosurl";
import { Video_path_one } from "../../../Videos/Videosurl";
import { Video_path_two } from "../../../Videos/Videosurl";
import { Video_path_three } from "../../../Videos/Videosurl";
import { Video_path_four } from "../../../Videos/Videosurl";
import "./Library.css";
const Library = () => {
  return (
    <section className="lib-section">
      <div className="main-lib">
        {/* left */}
        <main className="left-lib">
          <div>
            <h2>History</h2>
          </div>

          <section className="player-main">
            <section className="flexCenter">
              {Video_path.map((video, i) => {
                return (
                  <div className="cards">
                    <div className="lib-player">
                      <ReactPlayer
                        url={video.videoslink}
                        controls="true"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="lib-details"></div>
                  </div>
                );
              })}
              ;
            </section>

            <section className="flexCenter">
              {Video_path_one.map((video, i) => {
                return (
                  <div className="cards">
                    <div className="lib-player">
                      <ReactPlayer
                        url={video.videoslink}
                        controls="true"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="lib-details"></div>
                  </div>
                );
              })}
            </section>
          </section>
          <div>
            <h2>Watch Later</h2>
          </div>
          <section className="player-main">
            <section className="flexCenter">
              {Video_path_two.map((video, i) => {
                return (
                  <div className="cards">
                    <div className="lib-player">
                      <ReactPlayer
                        url={video.videoslink}
                        controls="true"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="lib-details"></div>
                  </div>
                );
              })}
            </section>
          </section>
          <div>
            <h2>Playlists</h2>
          </div>
          <section className="player-main">
            <section className="flexCenter">
              {Video_path_three.map((video, i) => {
                return (
                  <div className="cards">
                    <div className="lib-player">
                      <ReactPlayer
                        url={video.videoslink}
                        controls="true"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="lib-details"></div>
                  </div>
                );
              })}
            </section>
            <section className="flexCenter">
              {Video_path_four.map((video, i) => {
                return (
                  <div className="cards">
                    <div className="lib-player">
                      <ReactPlayer
                        url={video.videoslink}
                        controls="true"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className="lib-details"></div>
                  </div>
                );
              })}
            </section>
          </section>
        </main>
        {/* right */}
        {/* <aside className="right-lib">
          <h1>Rihgt aside bar</h1>
        </aside> */}
      </div>
    </section>
  );
};

export default Library;
