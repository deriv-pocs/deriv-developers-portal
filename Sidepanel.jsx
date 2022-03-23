import React from 'react'
import { Link} from '@tanstack/react-location'

const Sidepanel = () => {
  return (
    <div>
        <ul>
            <p>Deriv API</p>
            <li><Link to="/">Quickstart</Link></li>
            <li><Link to="docs/app_registration">App registration</Link></li>
            <li><Link to="api_explorer">API explorer</Link></li>
            <li><Link to="docs/api_guide">API guide</Link></li>
            <li><Link to="docs/FAQ">FAQ</Link></li>
            <li><Link to="docs/Json">JSON Schemas</Link></li>
            <li><Link to="docs/bug_bounty">Bug Bounty</Link></li>
        </ul>
    </div>



  )
}

export default Sidepanel

// export default function Sidepanel() {
//     return (
//         <div>
//              <Link to="/">Home</Link>
//              <Link to="docs">Quickstart</Link>
//              <Link to="api_explorer">API Explorer</Link>
//              <Link to="app_registartaion">App registartaion</Link>
//              <Link to="api_guide">API guide</Link>
                   
//         </div>
//     );
// };

  
  
  