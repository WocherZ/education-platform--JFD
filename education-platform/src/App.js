import React  from "react";
import { Route, Routes } from "react-router-dom";
import LearnPage from "./pages/LearnPage";
import StudyPage from "./pages/StudyPage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotificationPage from "./pages/NotificationPage";
import ProfilePage from "./pages/ProfilePage";
import CatalogPage from "./pages/CatalogPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/signup" element={<SignupPage />}/>
      <Route path="/learn" element={ <LearnPage/> }/>
      <Route path="/notification"  element={ <NotificationPage/> }/>
      <Route path="/catalog"  element={ <CatalogPage/> }/>
      <Route path="/study"  element={ <StudyPage/> }/>
      <Route path="/profile"  element={ <ProfilePage/> }/>

    </Routes>
    
  );
}

export default App;
