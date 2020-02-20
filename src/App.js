import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { AuthProvider } from './Base/Auth'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
