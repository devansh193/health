import { NavCenter } from "./navbar-components/navbar-center";
import { UserDetails } from "./navbar-components/user-detail";
import { NavbarLogo } from "./navbar-components/navbar-logo";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full py-4 px-2">
      <header className="w-full max-w-3xl bg-white px-4 rounded-full border-2 border-[#E2E2E2]">
        <div className="flex items-center justify-between h-14">
          <NavbarLogo />
          <NavCenter />
          <UserDetails />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
