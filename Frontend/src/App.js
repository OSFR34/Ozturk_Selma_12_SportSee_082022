import axios from 'axios'
import Main from './components/Main/Main.js'
import VerticalNav from './components/VerticalNav/VerticalNav.js'
import HorizontalNav from './components/HorizontalNav/HorizontalNav';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  // react state yaratmak için fonksionel componentte
  // setUserInfo state i degistirmek için kullancagimiz fonksiyon
  const [userInfo, setUserInfo]= useState (false)
  const [userActivity, setUserActivity] = useState(false)
  const [userSessions, setUserSessions] = useState(false)
  
  const USER_ID = 18
  const getUser = (id_parameter) => {
    // axios ile get istegi gönderiyoruz backend e. /user/18 pathine yolladigimizda backendden id si 18 olan kullanicinin bilgisi json formatinda cevap olarak geri geliyor. Basarili sekilde gelirse result degiskenine aktariyoruz gelen jsonu. Istek sonucunda yanit basarisiz olursa bu sefer de "cath" fonksiyonu çalisiyor ve error dôndûrûyor. O hatay da console a yazdiriyoruz.
    // backend klasôrûnde app klasôrû içinde routes.js dosyasinda bûtûn http isteklerini rotalari mevcut(=var).

    axios.get(`/user/${id_parameter}`)
      .then(result => {
        setUserInfo(result.data.data)
      })
      .catch(error => console.error(error))
  }

  const getUserActivity = (user_id) => {
    axios.get(`/user/${USER_ID}/activity`)
    .then(result => {
       setUserActivity(result.data.data.sessions)
    })
    .catch(error => console.error(error))
  }

  const getUserSessions = (user_id) => {
    // en vert,je reprends la route à partir de fichier "routes" contenu ds le backend 
    axios.get(`/user/${USER_ID}/average-sessions`)
      .then(result => {
        setUserSessions(result.data.data.sessions)
        // console.log(result) sur la ligne du dessus à partir de la console permet de retrouver la syntaxe à écrire en orange.
      })
      .catch(error => console.error(error))
    }
   

  // useEffet metodu react elemanlari componentleri yûklenditen hemen sonra çalisacak fonksiyonlari çalistirmak için kullanilir.
useEffect(() =>{
  getUser(USER_ID)
  getUserActivity(USER_ID)
  getUserSessions(USER_ID)
})



  return (
    <div className="App">
      <HorizontalNav />
      <div className='main-vertical-parent'>
        <VerticalNav />
        <Main activityDataProp={userActivity} userInfoProp = {userInfo} userSessionsProp={userSessions}/>
      </div>
    </div>
  );
}

export default App
