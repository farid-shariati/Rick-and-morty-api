import React from "react";
import "./App.css";
//material
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./theme";
//components
import MainPage from "./Pages/MainPage";
import CharacterDetail from "./Pages/CharacterDetail";
import LocationDetail from './Pages/LocationDetail';
import EpisodeDetail from './Pages/EpisodeDetail';
//react router
import { Route, Router } from "react-router-dom";
//history
import history from "./helper/history";
//store
import store from "./components/store";
//redux
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <CssBaseline />
            <Route exact path="(/|main-page)" component={MainPage} />
            <Route path="/character/:id" component={CharacterDetail}/>
            <Route path="/location/:id" component={LocationDetail}/>
            <Route path="/episode/:id" component={EpisodeDetail}/>
            <Route path="/episode/:id" component={EpisodeDetail}/>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;