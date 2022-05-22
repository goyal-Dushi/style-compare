import React, {
  createContext,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import NavHeader from './components/NavHeader';
import Footer from './components/Footer';
import LeftSideNav from './components/LeftSideNav';
import Loading from './components/Loader';
import { libType } from './libtype';

const Alerts = lazy(() => import('./pages/Alert'));
const ChipBadge = lazy(() => import('./pages/Chip&Badge'));
const Home = lazy(() => import('./pages/Home'));
const Progress = lazy(() => import('./pages/Progress'));
const Installation = lazy(() => import('./pages/Installation'));
const ButtonStyles = lazy(() => import('./pages/Buttons'));

export const TypeContext = createContext();
export const NavContext = createContext();

function App() {
  const [navState, setNavState] = useState(true);
  const screenSmall = useMediaQuery('max-width: 900px');

  const toggleNav = useCallback(() => {
    setNavState((prevState) => {
      return !prevState;
    });
  }, []);

  useEffect(() => {
    toggleNav();
  }, [screenSmall]);

  return (
    <>
      <NavHeader toggleNav={toggleNav} />
      <Grid container spacing={0} className={'vh-100'}>
        <Grid item sm={navState ? 3 : 0} xs={navState ? 3 : 0} md={2}>
          <LeftSideNav toggleNav={toggleNav} navOpen={navState} />
        </Grid>
        <Grid item sm={navState ? 9 : 12} xs={navState ? 9 : 12} md={10}>
          <TypeContext.Provider value={libType}>
            <Routes>
              <Route
                path={'/'}
                element={
                  <Suspense fallback={<Loading component={'Home'} />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path={'/installation'}
                element={
                  <Suspense fallback={<Loading component={'Installation'} />}>
                    <Installation />
                  </Suspense>
                }
              />
              <Route
                path={'/chips&badges'}
                element={
                  <Suspense fallback={<Loading component={'Chips & Badges'} />}>
                    <ChipBadge />
                  </Suspense>
                }
              />
              <Route
                path={'/buttons'}
                element={
                  <Suspense fallback={<Loading component={'Button'} />}>
                    <ButtonStyles />
                  </Suspense>
                }
              />
              <Route
                path={'/alerts'}
                element={
                  <Suspense fallback={<Loading component={'Alert'} />}>
                    <Alerts />
                  </Suspense>
                }
              />
              <Route
                path={'/progress'}
                element={
                  <Suspense fallback={<Loading component={'Progress'} />}>
                    <Progress />
                  </Suspense>
                }
              />
            </Routes>
          </TypeContext.Provider>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
