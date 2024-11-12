import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {PathNames } from "../routes";
import TestPage1 from "../pages/TestPage1";
import TestPage2 from "../pages/TestPage2";
import TestPage3 from "../pages/TestPage3";
import DefaultPage from "../pages/DefaultPage";
import AdditionalInfo from "../pages/AditionalInfo";
import NotFoundPage from "../pages/NotFoundPage";
import Template from "../Template";
import MainPage from "../pages/MainPage";

export default function RouterComponent(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template/>} >
                    <Route index element={<MainPage />} />
                    <Route path={ PathNames.TestLink1 } element={<TestPage1/>}/>
                    <Route path={ PathNames.TestLink2 } element={<TestPage2/>}/>
                    <Route path={ PathNames.TestLink3 } element={<TestPage3/>}/>

                </Route>

                <Route path={ PathNames.WithoutHeader }>
                    <Route index element={ <DefaultPage/> } />
                    <Route path={ PathNames.Info } element={ <AdditionalInfo/> } />
                    <Route path=":id" element={ <DefaultPage/> } />
                </Route>

                <Route path={ PathNames.NotFound } element={ <NotFoundPage/> } />
            </Routes>
        </BrowserRouter>
    )
}