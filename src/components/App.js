import React, {useState} from "react";
import { Router, Redirect, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Mountain from "../route/Mountain";
import Beaches from "../route/Beaches";
import Birds from "../route/Birds";
import Food from "../route/Food";
import history from "../history";

const App=({path}) => {
    const [searchTerm, setSearchTerm]=useState('')

    return(
        <div className="ui container">
            <Router history={history}>
            <div>
            <Header  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Switch >
            <Route exact path={path} component={() => <Redirect to="/" />}/>
            <Route path="/mountain"  component={Mountain} />
            <Route path="/beaches"  component={Beaches} searchTerm={searchTerm}/>
            <Route path="/birds"  component={Birds} />
            <Route path="/food"  component={Food} />
            </Switch>
            </div>
            </Router>
        </div>
    )
}

export default App