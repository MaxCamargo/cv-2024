"use client";

import { Fragment } from "react";
import MaxAvatar from "../components/avatar/avatar";
import styles from "./max.module.css";
import Button from "../components/button/button";
import { downloadPDF } from "../utils/downloads";
import { UseTestimonialsData } from "./data";
import Card from "../components/card/card";
import Github from "../assets/svg/github";
import LinkedIn from "../assets/svg/linkedin";
import Instagram from "../assets/svg/instagram";

const Max = () => {
  const { MyProjectsData } = UseTestimonialsData();
  const linkedIn = "https://www.linkedin.com/in/maxcodesco/";
  const behance = "https://www.behance.net/maxcamargo";
  const handleClickSayHi = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=573507936352&text=Hola%20✋`,
      "_blank"
    );
  };

  const handleClickDownload = () => {
    window.open("./cv-max-camargo.pdf", "_blank");
    downloadPDF("./cv-max-camargo.pdf", "cv-max-camargo.pdf");
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.gridLines}>
          <div className={styles.line}></div>
          <div className={styles.lineH}></div>
        </div>
        <MaxAvatar />
        <div className={styles.wrapper}>
          <div className={styles.description}>
            <p>
              <a href={linkedIn} target="_blank" className={styles.myName}>
                I`m a developer and designer
              </a>
              , focused on creating user-friendly, responsive, and scalable web
              interfaces and components with tools like React, Angular or
              Vue.js.
            </p>
          </div>
          <div className={styles.buttons}>
            <Button
              onClick={handleClickSayHi}
              className={styles.buttonLine}
              text="Contact me!"
              icon={<div className={styles.iconButton}>👋</div>}
            />
            <Button
              onClick={handleClickDownload}
              className={styles.buttonFill}
              text="Resume"
            />
          </div>
          <h1 className={styles.title}>🛠️ Recent projects</h1>
          <div className={styles.gridProjects}>
            {MyProjectsData.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
                framework={project.framework}
                url={project.url}
              />
            ))}
          </div>
          <div className={styles.disclaimers}>
            <p>
              See all my work expirience and other in formation{" "}
              <a href={linkedIn} className={styles.myName}>here!</a> If you want to see my <a href={behance} className={styles.myName}> design
              projects click here.</a>
            </p>
          </div>
          <div className={styles.followMe}>
            <h2 className={styles.title}>🤟🏽 Follow me 🤟🏽</h2>
            <div className={styles.social}>
              <a href="https://www.linkedin.com/in/maxcodesco/" target="_blank" className={styles.social}>
                <LinkedIn width={20} height={20} color="var(--primary-black-400)" />
              </a>
              <a href="https://github.com/MaxCamargo" target="_blank" className={styles.social}>
                <Github width={20} height={20} />
              </a>
              <a href="https://www.instagram.com/branding.bogota/" target="_blank" className={styles.social}>
                <Instagram width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Max;
