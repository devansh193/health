import { Logo } from "@/assets/logo";

export const NavbarLogo = () => {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <Logo className="size-8" />
      <h1 className="text-2xl font-semibold text-black">Ping</h1>
    </div>
  );
};
