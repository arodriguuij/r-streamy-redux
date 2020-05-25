import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
