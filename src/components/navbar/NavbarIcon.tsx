import { Link } from 'react-router-dom';

interface SidebarIconProps {
  icon: JSX.Element;
  label?: string;
  href?: string;
}

const SidebarIcon = ({ icon, href = '#', label = 'tooltip' }: SidebarIconProps) => {
  return (
    <Link to={href} className="sidebar-icon group">
      <span className="sidebar-tooltip group-hover:scale-100">{label}</span>
      {icon}
    </Link>
  );
};

export default SidebarIcon;
