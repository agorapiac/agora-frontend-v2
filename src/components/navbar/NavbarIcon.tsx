interface SidebarIconProps {
  icon: JSX.Element;
  label?: string;
}

const SidebarIcon = ({ icon, label = 'tooltip' }: SidebarIconProps) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{label}</span>
    </div>
  );
};

export default SidebarIcon;
