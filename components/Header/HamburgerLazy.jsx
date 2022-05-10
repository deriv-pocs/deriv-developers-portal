import { useSelector } from '@xstate/react';
import { lazy, Suspense } from 'react';
import { stateService } from '../../stateSignal';
import { isMobileSelector } from '../../selectors';

const Hamburger = lazy(() => import('./HamburgerNavigation'));

export default function HamburgerLazy() {
    const isMobile = useSelector(stateService, isMobileSelector);
    if (!isMobile) {
        return null;
    }
    return (
        <Suspense fallback={<div />}>
            <Hamburger />
        </Suspense>
    )
}
