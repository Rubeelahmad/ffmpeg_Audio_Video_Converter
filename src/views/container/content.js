import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import routes from "../../routes";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

function Content() {
    
    return (
        <div className="">
            <Suspense fallback={loading}>
                <Switch>
                    {
                        routes.map((route, idx) => {
                            return route.component && (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => (
                                        <route.component {...props} />
                                    )}
                                />
                            )
                        })
                    }
                    <Redirect from="/" to="/" />
                </Switch>
            </Suspense>
        </div>
    )
}

export default React.memo(Content);
