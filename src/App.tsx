import { Routes, Route } from 'react-router-dom';
import '@/scss/app.scss';
//import { useFetching } from '@/hooks/useFetching';
import Home from '@/pages/Home';
//import 'primereact/resources/themes/soho-dark/theme.css';
import 'primereact/resources/themes/soho-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';

function App() {
  //useFetching();

  return (
    <PrimeReactProvider>
      <div className="wrapper">
        <div className="content">
          <Routes>
            <Route path="/React_event-log" element={<Home />} />
          </Routes>
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
