import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Mountain from '../route/Mountain';
import Beaches from '../route/Beaches';
import Birds from '../route/Birds';
import Food from '../route/Food';

interface Props {
    path: string
}

const App: React.FC<Props> = () => {
    const [searchTerm, setSearchTerm]=useState('')
    
    return (
        <div className='ui container'>
            <Router>
                <div>
                    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <Switch>
                    <Route exact path='/mountain' component={Mountain}/>
                    <Route path='/beaches' component={Beaches}/>
                    <Route path='/birds' component={Birds}/>
                    <Route path='/food' component={Food}/>
                    </Switch> 
                </div>
            </Router>
        </div>
    )
}

export default App