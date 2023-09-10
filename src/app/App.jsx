import React from "react";
import { Posts } from "../containers/Posts";
import { Route, Routes } from "react-router-dom";
import { MainMenu } from "../features/mainMenu/MainMenu";

export function App() {
   return (
      <Routes>
         <Route path="/" element={<MainMenu />} />
         <Route path="/:amountPosts" element={<Posts />} />
      </Routes>
   );
}
