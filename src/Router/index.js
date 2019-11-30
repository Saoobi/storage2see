import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../screens/Home"));
const Storage = lazy(() => import("../screens/Storage"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/storage/:chaine" component={Storage} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
