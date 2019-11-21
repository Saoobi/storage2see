import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../screens/Home"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
