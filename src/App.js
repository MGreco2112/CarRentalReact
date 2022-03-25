import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/routers/AppRouter';
import {AuthProvider} from "../src/components/Providers/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    {/* Main Router */}
    {/* Home Pages */}
    {/* Customer Pages */}
    {/* Employee Pages */}
    </BrowserRouter>
  );
}

export default App;
