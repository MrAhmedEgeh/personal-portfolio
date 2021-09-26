import {Container, Grid} from '@material-ui/core';
import './App.css';
/*---Importing Components------*/

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

/*---Importing React Router-----*/

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  window.onload = () => <div>HELLO THERE</div>;
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
        <Profile />
        </Grid>

        <Grid item xs>
          <Router>
          <Header />
         <div className="min-content container_shadow">
         <Switch>
          <Route path='/portfolio'>
             <Portfolio />
          </Route>

          <Route exact path='/'>
              <Resume />
          </Route>
          </Switch>
         </div>
        </Router>
        <Footer />
        </Grid>
      </Grid>
    </Container>
    
  );
}

export default App;
