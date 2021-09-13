import React from "react";
import AllMeetUps from "./screens/AllMeetUps";
import NewMeetup from "./screens/NewMeetup";
import Favorites from "./screens/Favorites";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" component={AllMeetUps} exact />
          <Route path="/favorites" component={Favorites} exact />
          <Route path="/new-meetups" component={NewMeetup} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
