import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'
import Header from './componant/Header';
import Main from './componant/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Fav from './componant/Fav'

export class App extends Component {
  render() {
    return (
     
     
        <Router>

          {this.props.auth0.isAuthenticated ?
            <Header
            isAuthenticated={this.props.auth0.isAuthenticated}
            myPic={this.props.auth0.user.picture}
            myName={this.props.auth0.user.name}
            myEmail={this.props.auth0.user.email}
            />
             : <Header/> 
            
        }
        <Switch>
          <Route path='/home'>
            <Main/>
          </Route>
          <Route path='/fav'>
            <Fav/>
          </Route>
        </Switch>


        </Router>
     
    )
  }
}

export default withAuth0(App);
