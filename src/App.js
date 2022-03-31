import React, { createContext, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
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

function App() {
  return (
    <div className={'position-relative'}>
      <NavHeader />
      <Grid container spacing={0} className={'mb-5'}>
        <Grid item md={2}>
          <LeftSideNav />
        </Grid>
        <Grid item sm={12} md={10}>
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
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
