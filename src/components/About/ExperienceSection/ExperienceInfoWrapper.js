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
        <h2 className={classes.infoTitle}>
          <i className="fa-solid fa-gears fa-xl"></i>Technical Skills
        </h2>
        <ul className={`${classes.list} ${classes.infoList}`}>
          {knowledgeData.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
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
                key={`${data.id}p`}
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
