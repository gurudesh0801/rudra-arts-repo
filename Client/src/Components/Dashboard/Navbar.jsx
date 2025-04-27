import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LogOut } from "lucide-react"; // Icon library: lucide-react

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/admin/logout", {
        method: "POST",
        credentials: "include",
      });

      Cookies.remove("adminToken", { path: "/" });
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b">
      <div className="text-2xl font-semibold text-gray-800">
        Welcome! <span className="text-indigo-500">Satyajeet</span>
        {/* <img src="/logo.svg" alt="Logo" className="h-8" /> */}
      </div>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
      >
        <LogOut size={18} />
        Logout
      </button>
    </header>
  );
};

export default Navbar;
