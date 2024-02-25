import { Avatar, AvatarImage } from "./ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-12 w-11">
      <AvatarImage className="p-2" src="/logo.png" />
    </Avatar>
  );
};
