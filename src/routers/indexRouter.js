import React from "react";
import { Routes,Route } from "react-router-dom";
import Signin from "../view/login/Signin";
import NotFound from "../view/NotFound/NotFound";
import Home from "../view/pages/Home";
export default function IndexRouter(){
return(
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
)}