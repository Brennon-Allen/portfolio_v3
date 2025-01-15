import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import profilePicture from "./assets/Pro-pic.png";
import allenITFlyer from "./assets/Flyer.jpg";
import VideoPlayer from "./components/VideoPlayer";
import codeTailorsDemo from "./assets/Code Tailors Demo.mp4";
import teamDominionDemo from "./assets/Team Dominion Demo.mp4";
import stcDemo from "./assets/STC Demo.mp4";
import calculationsDemo from "./assets/Calculator Demo.mp4";
import jkrDesign from "./assets/JKR1.jpg";
import fbiDemo from "./assets/FBI API Demo.mp4";
import stcThumbnail from "./assets/STC Thumbnail.jpeg";
import ctThumbnail from "./assets/CT Thumbnail.jpeg";
import tdThumbnail from "./assets/TD Thumbnail.jpeg";
import fbiThumbnail from "./assets/FBI Thumbnail.jpeg";
import calcThumbnail from "./assets/Calculations Thumbnail.jpeg";

function App() {
  return (
    <>
      <div>
        <img src={profilePicture} alt="image" width={"265px"} />
        <h2>
          Hello, I'm <span>Brennon</span>.
        </h2>
        <p>
          Welcome to my portfolio, created with <strong>Vite</strong> and
          developed in <strong>React</strong>.
        </p>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" width={"75px"} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            width={"75px"}
          />
        </a>
        <h2>Portfolio Pieces</h2>
        <div>
          <div>
            <p>
              <strong>#1</strong> Basic HTML/CSS/JavaScript Website Demo (click
              to play)
            </p>
            <VideoPlayer
              videoFile={stcDemo}
              fileType={"video/mp4"}
              thumbnail={stcThumbnail}
            />
          </div>
          <div>
            <p>
              <strong>#2</strong> Basic HTML/CSS/JavaScript Website Demo (click
              to play)
            </p>
            <VideoPlayer
              videoFile={codeTailorsDemo}
              fileType={"video/mp4"}
              thumbnail={ctThumbnail}
            />
          </div>
          <div>
            <p>
              <strong>#3</strong> Basic HTML/CSS/JavaScript Website Demo (click
              to play)
            </p>
            <VideoPlayer
              videoFile={teamDominionDemo}
              fileType={"video/mp4"}
              thumbnail={tdThumbnail}
            />
          </div>
          <div>
            <p>
              <strong>#4</strong> Basic Calculations Demo (click to play)
            </p>
            <VideoPlayer
              videoFile={calculationsDemo}
              fileType={"video/mp4"}
              thumbnail={calcThumbnail}
            />
          </div>
          <div>
            <p>
              <strong>#5</strong> FBI API Integration Demo (click to play)
            </p>
            <VideoPlayer
              videoFile={fbiDemo}
              fileType={"video/mp4"}
              thumbnail={fbiThumbnail}
            />
          </div>
          <div>
            <p>
              <strong>#6</strong> Mobile App Design
            </p>
            <img src={jkrDesign} alt="Flyer" width={"350px"} />
          </div>
          <div>
            <p>
              <strong>#7</strong> Flyer Design
            </p>
            <img src={allenITFlyer} alt="Flyer" width={"350px"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
