import SidebarIcon from './NavbarIcon';
import { TbHome2 } from 'react-icons/tb';
import { BiSolidSearchAlt2 } from 'react-icons/bi';
import { BsPlus, BsGearFill } from 'react-icons/bs';
import { LuMessagesSquare } from 'react-icons/lu';

const Divider = () => <hr className="sidebar-hr" />;

function Sidebar() {
  return (
    <div className="relative top-0 left-0 h-screen w-16 m-0 flex flex-col bg-slate-200 dark:bg-gray-800 dark:text-white text-slate-900 shadow-lg">
      <SidebarIcon icon={<TbHome2 size="28" />} label="Index" href="/" />
      <Divider />
      <SidebarIcon icon={<BiSolidSearchAlt2 size="22" />} label="Keresés" />
      <SidebarIcon icon={<LuMessagesSquare size="22" />} label="Üzenetek" />
      <SidebarIcon icon={<BsPlus size="32" />} label="Hirdetésfeladás" />
      <SidebarIcon icon={<BsGearFill size="22" />} label="Beállítások" />
    </div>
  );
}

export default Sidebar;
