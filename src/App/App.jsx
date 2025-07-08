import React, { Suspense } from 'react';
import Header from '../Layout/Header'
import Footer from '../Layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../routes';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import ContextWordsProvider from '../Context/ContextWords';
import './App.scss';
import '../styles/common.scss';
   

function App() {  
  const WordsCardList = React.lazy(() => import('../page/Words/WordsCardList'));
  const TableWords = React.lazy(() => import('../page/Home/TableWords'));
  const AddWord = React.lazy(() => import ('../page/AddWord/AddWord'));
  const Carusel = React.lazy(() => import('../page/Training/AppCarousel'));
  const NotFoundPage = React.lazy(() => import('../page/NotFoundPage/NotFoundPage'));

  return (
    <ContextWordsProvider>
    <Router>
      <ErrorBoundary>
      <div className="App">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={ROUTES.HOME} element={<TableWords />} />
            <Route path={ROUTES.ADD_WORD} element={<AddWord />} />
            <Route path={ROUTES.TRAIN} element={<Carusel />} />
            <Route path={ROUTES.WORDS} element={<WordsCardList />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      <Footer />
      </div>
      </ErrorBoundary>
    </Router>
    </ContextWordsProvider>
  );
}

export default App;
