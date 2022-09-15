import React, { useEffect, useState } from "react";
import HorizontalNav from "./components/HorizontalNav/HorizontalNav.js";
import VerticalNav from "./components/VerticalNav/VerticalNav.js";
import Main from "./components/Main/Main.js";
import axios from "axios";
import "./App.css";
import mainDatas from "./data/maindata.json";
import activityDatas from "./data/useractivities.json";
import performanceDatas from "./data/performances.json";
import sessionDatas from "./data/averagesessions.json";
import PropTypes from "prop-types";
import {
  getUser,
  getUserActivity,
  getUserPerformance,
  getUserSessions,
} from "./User";

function App() {
  const [userInfo, setUserInfo] = useState(false);
  const [userActivity, setUserActivity] = useState(false);
  const [userSesions, setUserSessions] = useState(false);
  const [userPerformance, setUserPerformance] = useState(false);
  const USER_ID = 18;

  useEffect(() => {
    /** @function getUser
     * @param {number} userId - User's id number
     * @return {void} Nothing
     */

    getUser(USER_ID)
      .then((result) => {
        setUserInfo(result.data.data);
      })
      .catch((error) => {
        console.error(error);
        mainDatas.map((data) => {
          if (data.id === USER_ID) {
            setUserInfo(data);
          }
        });
      });

    /** @function getUserActivity
     * @param {number} user_id - User's id number
     * @return {void} - Nothing
     */
    getUserActivity(USER_ID)
      .then((result) => {
        setUserActivity(result.data.data.sessions);
      })
      .catch((error) => {
        console.error(error);
        activityDatas.map((activity) => {
          if (activity.userId === USER_ID) {
            setUserActivity(activity.sessions);
          }
        });
      });

    /** @function getUserSessions
     * @param {number} user_id - User's id number
     * @return {void} - Nothing
     */

    getUserSessions(USER_ID)
      .then((result) => {
        setUserSessions(result.data.data.sessions);
      })
      .catch((error) => {
        console.error(error);
        sessionDatas.map((sessionData) => {
          if (sessionData.userId === USER_ID) {
            setUserSessions(sessionData.sessions);
          }
        });
      });

    /** @function getUserPerformance
     * @param {number} user_id - User's id number
     * @return {void} - Nothing
     */
    getUserPerformance(USER_ID)
      .then((result) => {
        setUserPerformance(result.data.data);
      })
      .catch((error) => {
        console.error(error);
        performanceDatas.map((performanceData) => {
          if (performanceData.userId === USER_ID) {
            setUserPerformance(performanceData.data);
          }
        });
      });
  });

  return (
    <div className="App">
      <HorizontalNav />
      <div className="main-vertical-parent">
        <VerticalNav />
        <Main
          activityDataProp={userActivity}
          userInfoProp={userInfo}
          sessionsProp={userSesions}
          performanceProp={userPerformance}
          todayScoreProp={userInfo}
          cardsProp={userInfo.keyData}
        />
      </div>
    </div>
  );
}

export default App;

App.propTypes = {
  activityDataProp: PropTypes.object,
  userInfoProp: PropTypes.object,
  sessionsProp: PropTypes.object,
  performanceProp: PropTypes.object,
  todayScoreProp: PropTypes.object,
  cardsProp: PropTypes.object,
};
