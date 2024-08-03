import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {PrivateRoutes, PublicRouter} from "../routes/router";
import {AuthContext} from "../constect";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        <Routes>
            {isAuth
                ?PrivateRoutes.map(route => (
                    <Route
                        element={route.element}
                        path={route.path}/>
                ))
                :PublicRouter.map(route => (
                    <Route
                        element={route.element}
                        path={route.path}/>
                ))
            }

        </Routes>
    );
};

export default AppRouter;