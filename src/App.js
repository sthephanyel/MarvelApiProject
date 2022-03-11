import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import AuthContextProvider from './components/context/AuthContext'


function App() {

  return (
    <AuthContextProvider>
    <div className="containerGeral">
      <Home/>
    </div>
    </AuthContextProvider>
    
  );
}

export default App;
