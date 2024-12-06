import { User } from "@/assets/icons/user";

export const UserDetails = () => {
  return (
    <div className="text-xl font-semibold text-black">
      <div className="flex items-center justify-center bg-gray-100 rounded-full p-2">
        <User className="size-8" />
      </div>
    </div>
  );
};
