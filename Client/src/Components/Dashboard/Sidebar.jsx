import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Box,
  Settings,
  Menu,
  ChevronLeft,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      to: "/admin/dashboard",
    },
    {
      label: "Add Products",
      icon: <Box size={20} />,
      to: "/admin/add-products",
    },
    {
      label: "Products",
      icon: <Box size={20} />,
      to: "/admin/products",
    },
    {
      label: "Services",
      icon: <Settings size={20} />,
      to: "/admin/services",
    },
  ];

  return (
    <aside
      className={`h-screen bg-gray-900 text-white shadow-md transition-all duration-300 ease-in-out fixed top-0 left-0 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header / Toggle */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
        {!collapsed && <span className="text-lg font-bold">Admin Panel</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col mt-6 space-y-2">
        {menuItems.map(({ label, icon, to }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
              location.pathname === to
                ? "bg-gray-800 text-yellow-400"
                : "hover:bg-gray-800"
            }`}
          >
            <span className="mr-3">{icon}</span>
            {!collapsed && <span>{label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
