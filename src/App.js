import './App.css';
import Home from './components/Home'
import AuthContextProvider from './components/context/AuthContext'


function App() {

  return (
    <AuthContextProvider>
    <div className="container">
      <Home/>
    </div>
    </AuthContextProvider>
    
  );
}

export default App;
