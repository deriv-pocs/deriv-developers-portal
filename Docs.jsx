import './stateSignal';
import { Router,Outlet, Link} from '@tanstack/react-location';
import { routes,location } from './Router';
import { Suspense } from 'react';
import Header from './components/Header/Header';
import Sidepanel from './Sidepanel';


function Docs() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Sidepanel>
        <Router rouutes={routes} location={location}>
            <Outlet/> 
        </Router>
      </Sidepanel>
    </Suspense>
  )
}

export default Docs