import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import ContextWordsProvider from '../Context/ContextWords';
import './App.scss';
import '../styles/common.scss';
import AppLayout from '../Layout/AppLayout';
import AppLoader from '../components/AppLoader/AppLoader';
   

function App() {  
  const AboutPage = React.lazy(() => import('../page/AboutPage/AboutPage'));
  const HomePage = React.lazy(() => import('../page/HomePage/HomePage'));
  const AddWordPage = React.lazy(() => import ('../page/AddWordPage/AddWordPage'));
  const TrainingPage = React.lazy(() => import('../page/TrainingPage/TrainingPage'));
  const WordsPage = React.lazy(() => import('../page/WordsPage/WordsPage'));
  const NotFoundPage = React.lazy(() => import('../page/NotFoundPage/NotFoundPage'));

  return (
    <ContextWordsProvider>
    <Router>
      <ErrorBoundary>
      <AppLayout>
        <Suspense fallback={<AppLoader />}>
          <Routes>
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.ADD_WORD} element={<AddWordPage />} />
            <Route path={ROUTES.TRAIN} element={<TrainingPage />} />
            <Route path={ROUTES.WORDS} element={<WordsPage />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AppLayout>
      </ErrorBoundary>
    </Router>
    </ContextWordsProvider>
  );
}

export default App;
