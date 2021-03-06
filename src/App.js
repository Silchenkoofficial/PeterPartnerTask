import React, {useState, useEffect} from 'react';
import {Route, Switch } from 'react-router-dom';
import {Home, MyCards} from 'pages';
import Axios from 'axios';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState({});
  const [activeCard, setActiveCard] = useState({});

  useEffect(() => {
    setLoading(true);
    Axios.get('https://hr.peterpartner.net/test/android/v1/users.json').then(res => {
      setUsers(res.data.users);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setActiveCard(res.data.users[0]);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <Home activeCard={activeCard} isLoading={isLoading} />
          )} />
          <Route exact path="/my-cards" render={() => (
            <MyCards
              users={users}
              activeCard={activeCard}
              changeActiveCard={newCard => setActiveCard(newCard)} />
          )} />
        </Switch>
    </div>
  );
}

export default App;