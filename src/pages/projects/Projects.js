import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard.js";
import PublicationCard from "../../components/publicationsCard/PublicationCard.js";
import Button from "../../components/button/Button.js"; // Ensure Button is imported
import TopButton from "../../components/topButton/TopButton.js";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg.js";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
                      src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
                      alt=""
                    /> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  Research Paper
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Lightweight multimodal system for classifying propaganda roles in memes. Ranked <a href="https://aclanthology.org/2022.constraint-1.1.pdf#page=6" target="_blank" rel="noopener noreferrer">2nd</a> among 9 finalists (100+ initial teams), showcasing effective fusion of text and image features for real-world misinformation detection.
                </p>
                {/* --- Add your Research Paper Button Here --- */}
                <div className="projects-button-div">
                  <Button
                    text="View Paper"
                    newTab={true} 
                    href="https://aclanthology.org/2022.constraint-1.4.pdf"
                    theme={theme}
                    className="portfolio-button"
                  />
                </div>
                {/* ------------------------------------------- */}
              </div>
            </div>
          </Fade>
        </div>
        


        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    Technical Articles
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Coming Soon
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}
        {/* <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div> */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;