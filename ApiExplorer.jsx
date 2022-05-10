import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

export default function ApiExplorer() {
    return (
        <div style={{ display:"flex",padding:"90px 50px" }}>
        <Sidebar/>
        <div style={{ padding:"105px 80px" }}>
        <Outlet/>
        </div>
      </div>
    )
}
