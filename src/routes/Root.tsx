import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function Root() {
  return (
    <div className="flex">
      <Navbar />
      <div className="dark:bg-gray-700 dark:text-white text-slate-900 bg-slate-100 w-full h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
