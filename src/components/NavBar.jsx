import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-12 sm:mx-24 xl:mx-38 ">
      <img
        onClick={() => navigate("/")}
        src="/logo.png"
        alt="Reblog Icon"
        className="w-14 h-15 cursor-pointer"
      />
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
      >
        LogIn{" "}
      </button>
    </div>
  );
};

export default NavBar;
