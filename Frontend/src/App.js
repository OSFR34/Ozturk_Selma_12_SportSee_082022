import React,{useEffect,useState} from 'react' 
import HorizontalNav from './components/HorizontalNav/HorizontalNav.js';
import VerticalNav from './components/VerticalNav/VerticalNav.js';
import Main from './components/Main/Main.js';
import axios from 'axios'
import './App.css';


function App() {
  //reactte state yaratmak için fonksiyonel componentte
  //setUserInfo state i değiştirmek için kullancağımız fonksiyon
  const [userInfo,setUserInfo] = useState(false)
  const [userActivity,setUserActivity] = useState(false)
  const [userSesions,setUserSessions] = useState(false)
  const [userPerformance,setUserPerformance] = useState(false)

  const USER_ID = 18
  const getUser = (id_parameter) => {
    // axios ile get isteği gönderiyoruz backend e. /user/18 pathine istek yolladığumuzda backendden id si 18 olan kullanıcının bilgisi json formatında cevap olarak geri geliyor. Başarılı şekilde gelirse result değişkenine atarıyoruz gelen jsonu. istek sonucunda yanıt başarısız olursa bu sefer de catch fonksiyonu çalışıyor ve error döndürğyor. O hatayı da console a yazdırıyoruz. 
    //backend klasöründe app klasörü içinde routes.js dosyasında bütün http isteklerinin rotaları mevcut.
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
  axios.get(`/user/${USER_ID}/average-sessions`)
  .then(result => {
    setUserSessions(result.data.data.sessions)
  })
  .catch(error => console.error(error))
}

const getUserPerformance = (user_id) => {
    axios.get(`/user/${USER_ID}/performance`)
    .then(result => {
      setUserPerformance(result.data.data)
    })
    .catch(error => console.error(error))
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
