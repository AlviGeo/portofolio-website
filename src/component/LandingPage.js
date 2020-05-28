import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("../img/home.jpg")}
              alt="Alvi G"
              className="me"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express{" "}
              </p>

              <div className="social-links">

                  {/* LinkedIn*/}
                <a
                  href="https://www.google.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github*/}
                <a
                  href="https://www.google.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Youtube*/}
                <a
                  href="https://www.youtube.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
                {/* Facebook*/}
                <a
                  href="https://www.google.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
