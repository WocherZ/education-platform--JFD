
// import './App.css';
import React  from "react";
import { Route, Routes } from "react-router-dom";
import LearnPage from "./pages/LearnPage";
import StudyPage from "./pages/StudyPage";
import MainPage from "./pages/MainPage";
import NotificationPage from "./pages/NotificationPage";
import ProfilePage from "./pages/ProfilePage";
import CatalogPage from "./pages/CatalogPage";
import './pages/ProfilePage.css';
import WebDeveloper from "./pages/WebDeveloper";

function App() {

  return (
    <Routes>
      {/* <Route path="/" element={<MainPage />}/>
      <Route path="/learn" element={ <LearnPage/> }/>
      <Route path="/notification"  element={ <NotificationPage/> }/>
      <Route path="/catalog"  element={ <CatalogPage/> }/>
      <Route path="/study"  element={ <StudyPage/> }/>
      <Route path="/profile"  element={ <ProfilePage/> }/> */}
      <Route path="/webcourse"  element={ <WebDeveloper/> }/>

    </Routes>
  );
}

export default App;
