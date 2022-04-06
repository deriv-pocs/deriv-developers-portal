import styles from "./Sidebar.module.scss"
import React from 'react'
import { Link,useLocation, useRouter } from '@tanstack/react-location'
import { useEffect } from "react";

const Sidebar = () => {

    const router= useRouter();
    const location= useLocation();

  return (
    <div className={styles.sidebarleft}>
            <p className={styles.sidebartitle}>Deriv API</p>
            <div>
              {[
                ["/docs/","Quickstart"],
                ["/docs/app-registration/","App registration"],
                ["/api-explorer/","Api explorer"],
                ["/docs/api-guide/","Api guide"],
                ["/docs/faq/","FAQ"],
                ["/docs/json-schemas/","JSON Schemas"],
                ["/docs/bug-bounty/","Bug Bounty"],
              ].map(([to,label])=>{
                return (
                  <div key={to}>
                    <Link to={to} className={to===location.current.pathname ? styles.selected : ''}
                    >
                      {label}
                    </Link>
                  </div>
                );
              })}
            </div>
    </div>
  )
}

export default Sidebar
