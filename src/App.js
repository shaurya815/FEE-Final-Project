import './App.css';
import Choose from './Components/Choose/Choose';
import Upcoming from './Components/Upcoming/Upcoming';
import Reservation from './Components/reservation/Reservation';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Page from './Components/page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Choose></Choose>
              <Upcoming></Upcoming>
              <Reservation />
            </>
          } />
          <Route path="/page" element={<Page />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
