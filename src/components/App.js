import React from "react";
import { Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import { GlobalStyle } from "../style/Global.style";
import { AppContainer } from "../style/Container.style";
import history from "../history";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit" component={StreamEdit} />
            <Route path="/streams/delete" component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </Router>
      </AppContainer>
    </>
  );
};

export default App;
