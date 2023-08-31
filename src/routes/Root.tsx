import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function Root() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="dark:bg-gray-700 dark:text-white text-slate-900 bg-slate-100 w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
