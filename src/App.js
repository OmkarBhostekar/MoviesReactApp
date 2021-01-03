import './App.css';
import { BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import Home from './homepage/Home';
import MovieDetail from './movie/MovieDetail';

function App() {
    return ( 
    
        // <MovieDetail/>
            <div className="App">
            <Router>
                <Switch>   
                    <Route exact path = "/" component={Home} />
                    <Route path="/movie/:id" component={MovieDetail}/>
                    <Redirect from="/*" to='/' exact />
                </Switch>
            </Router>
            </div>
    )
}

export default App;