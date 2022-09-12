import React,{useEffect,useState} from 'react' 
import HorizontalNav from './components/HorizontalNav/HorizontalNav.js';
import VerticalNav from './components/VerticalNav/VerticalNav.js';
import Main from './components/Main/Main.js';
import axios from 'axios'
import './App.css';
import mainDatas from'./data/maindata.json'
import activityDatas from './data/useractivities.json'
import performanceDatas from './data/performances.json'
import sessionDatas from './data/averagesessions.json'
import PropTypes from 'prop-types'


function App() {
  //reactte state yaratmak için fonksiyonel componentte
  //setUserInfo state i değiştirmek için kullancağımız fonksiyon
  const [userInfo,setUserInfo] = useState(false)
  const [userActivity,setUserActivity] = useState(false)
  const [userSesions,setUserSessions] = useState(false)
  const [userPerformance,setUserPerformance] = useState(false)

  const USER_ID = 18

/**@function getUser
* @param {number} userId - User's id number
*@return {void} - Nothing
 */
// Création d'une fonction avec comme paramètre userId que l'on a défini ns même
const getUser = (userId) => {  
    // j'utilise la class "axios" avec la méthode get pour aller chercher les datas. entre parenthèses, je défini le path également spéficifier dans le backend ds le fichier "routes.js" J'ai juste modifié id dont j'ai défini en ligne 16.
  axios.get(`/user/${userId}`)
  // si la promesse est un succès (cad qu'elle a réussi a récupérer les données data)
    .then(result => {
      console.log(result)
      // on associe la promesse (=result.data.data) à la fonction setUserInfo qui a le paramètre du state "userInfo (ligne 11) " 
      setUserInfo(result.data.data)
  })
  // si aucune réponse alors un message d'erreur en rouge apparaitra dans la console.
    .catch(error =>{
      console.error(error)
      mainDatas.map(data => {
        if(data.id === USER_ID){
          setUserInfo(data)
        }
      })
    })
}


/**@function getUserActivity
 * @param {number} user_id - User's id number
 * @return {void} - Nothing
 */
const getUserActivity = (user_id) => {
    axios.get(`/user/${USER_ID}/activity`)
    .then(result => {
        setUserActivity(result.data.data.sessions)
    })
    .catch(error => {
      console.error(error)
      activityDatas.map(activity => {
        if(activity.userId === USER_ID){
          setUserActivity(activity.sessions)

        }
      })
      
    })
}


/**@function getUserSessions
 * @param {number} user_id - User's id number
 * @return {void} - Nothing
 */

const getUserSessions = (user_id) => {
  axios.get(`/user/${USER_ID}/average-sessions`)
  .then(result => {
    setUserSessions(result.data.data.sessions)
  })
  .catch(error => {
    console.error(error)
    sessionDatas.map(sessionData =>{
      if (sessionData.userId === USER_ID){
        setUserSessions(sessionData.sessions)
      }
    })
  })
}

/**@function getUserPerformance 
 * @param {number} user_id - User's id number
 * @return {void} - Nothing
 */
const getUserPerformance = (user_id) => {
    axios.get(`/user/${USER_ID}/performance`)
    .then(result => {
      setUserPerformance(result.data.data)
    })
    .catch(error => {
      console.error(error)
      performanceDatas.map(performanceData => {
        if(performanceData.userId === USER_ID){
          setUserPerformance(performanceData.data)
        }
      })
    })
}
 
  //useEffect metodu react elemanları componentleri yüklendikten hemen sonra çalışacak fonksiyonları çalıştırmak için kullanılır.
  useEffect(() => {
    getUser(USER_ID)
    getUserActivity(USER_ID)
    getUserSessions(USER_ID)
    getUserPerformance(USER_ID)
  })

  return (
    <div className="App">
      <HorizontalNav />
      <div className='main-vertical-parent'>
        <VerticalNav/>
        <Main activityDataProp={userActivity} userInfoProp = {userInfo} sessionsProp={userSesions} performanceProp = {userPerformance} todayScoreProp = {userInfo} cardsProp= {userInfo.keyData}  />
      </div>
    </div>
  );
}

export default App;

App.propTypes = {

  activityDataProp:PropTypes.object,
  userInfoProp:PropTypes.object,
  sessionsProp:PropTypes.object,
  performanceProp:PropTypes.object,
  todayScoreProp:PropTypes.object,
  cardsProp:PropTypes.object
  
}
