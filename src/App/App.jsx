import React, { Suspense } from 'react';
import Header from '../Layout/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../routes';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';


function App() {  
  const WordsCardList = React.lazy(() => import('../page/Words/WordsCardList'));
  const TableWords = React.lazy(() => import('../page/Home/TableWords'));
  const Carusel = React.lazy(() => import('../page/Training/AppCarousel'));
  const NotFoundPage = React.lazy(() => import('../page/NotFoundPage/NotFoundPage'));

  return (
    <Router>
      <ErrorBoundary>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.HOME} element={<TableWords />} />
            <Route path={ROUTES.TRAIN} element={<Carusel />} />
            <Route path={ROUTES.WORDS} element={<WordsCardList />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
