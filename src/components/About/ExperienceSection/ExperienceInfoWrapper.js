import classes from "./ExperienceInfoWrapper.module.css";
import { knowledgeData } from "../../../data/knowledgeData";
import { educationData } from "../../../data/educationData";
import { experienceData } from "../../../data/experienceData";

const ExperienceInfoWrapper = ({ handlePlaying, handleStopPlaying }) => {
  return (
    <div className={classes.boxWrapper}>
      <div
        className={classes.infoBox}
        onMouseOver={() => handlePlaying()}
        onMouseOut={() => handleStopPlaying()}
      >
        <p className={`${classes.list} ${classes.summary}`}>
          I'm a passionate Frontend Developer after Bootcamp and currently
          during a Mentee IT Program. I’m also data protection law lawyer.
          <span>
            I’m characterized by perseverance, independence, openness to finding
            new solutions, learning new competences and empathy towards others.
          </span>
          <span>
            I don't easily give up and responsibility is one of the most
            important part of my personality.
          </span>
        </p>
      </div>
      <div
        className={classes.infoBox}
        onMouseOver={() => handlePlaying()}
        onMouseOut={() => handleStopPlaying()}
      >
        <h2 className={classes.infoTitle}>
          <i className="fa-solid fa-gears fa-xl"></i>Technical Skills
        </h2>
        <ul className={`${classes.list} ${classes.infoList}`}>
          {knowledgeData.map((data) =>
            data.importance ? (
              <p key={data.id} className={classes.importanceData}>
                {data.name}
              </p>
            ) : null
          )}
        </ul>
        <ul
          className={`${classes.list} ${classes.infoList} ${classes.noImportantList}`}
        >
          {knowledgeData.map((data) =>
            !data.importance ? (
              <p key={data.id} className={classes.noImportanceData}>
                {data.name}
              </p>
            ) : null
          )}
        </ul>
      </div>
      <div
        className={classes.infoBox}
        onMouseOver={() => handlePlaying()}
        onMouseOut={() => handleStopPlaying()}
      >
        <h2 className={classes.infoTitle}>
          <i className="fa-solid fa-user-graduate fa-xl"></i>Education
        </h2>
        <div className={classes.list}>
          {educationData.map((data) => {
            return [
              <h5
                className={
                  data.important
                    ? `${classes.nameTitle} ${classes.nameTitleImportant}`
                    : classes.nameTitle
                }
                key={data.id}
              >
                {data.name}
                {data.important && <i className="fa-solid fa-star fa-xs"></i>}
              </h5>,
              <h6 className={classes.dateTitle} key={`${data.id}t`}>
                <i className="fa-regular fa-calendar-days fa-lg"></i>
                {data.date}
              </h6>,
              <p
                className={
                  data.last ? classes.lastDescription : classes.description
                }
                key={`${data.id}p`}
              >
                {data.description}
              </p>,
            ];
          })}
        </div>
      </div>
      <div
        className={classes.infoBox}
        onMouseOver={() => handlePlaying()}
        onMouseOut={() => handleStopPlaying()}
      >
        <h2 className={classes.infoTitle}>
          <i className="fa-solid fa-suitcase fa-lg"></i>Experience
        </h2>
        <div className={classes.list}>
          {experienceData.map((data) => {
            return [
              <h5 className={classes.nameTitle} key={data.id}>
                {data.position}
              </h5>,
              <h6 className={classes.dateTitle} key={`${data.id}t`}>
                <i className="fa-regular fa-calendar-days fa-lg"></i>
                {data.date}
              </h6>,
              <p className={classes.description} key={`${data.id}p`}>
                {data.companyName}
              </p>,
              <p
                className={
                  data.last ? classes.lastDescription : classes.description
                }
                key={`${data.id}pA`}
              >
                {data.description}
              </p>,
            ];
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceInfoWrapper;
