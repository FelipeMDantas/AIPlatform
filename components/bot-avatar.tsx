import { Avatar, AvatarImage } from "./ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-3 w-8">
      <AvatarImage src="/logo.png" className="p-1" />
    </Avatar>
  );
};
