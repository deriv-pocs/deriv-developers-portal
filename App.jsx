import { QueryClient, QueryClientProvider } from 'react-query'
import './stateSignal';
import './resizeEffect';
import { Router, Outlet } from '@tanstack/react-location';
import { routes, location } from './Router';
import { Suspense } from 'react';
import Header from './components/Header/Header';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        <Header />
        <Suspense fallback={<div>loading</div>}>
          <Outlet />
        </Suspense>
      </Router>
    </QueryClientProvider>
  )
}

export default App
