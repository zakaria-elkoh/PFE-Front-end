import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import customAxios from "@/axios/customAxios";
import { toast } from "sonner";

const EditProfileForm = ({ user, setOpen, refetch }) => {
  const [newProfileData, setNewProfileData] = useState({
    user_name: user?.user_name,
    name: user?.name,
    email: user?.email,
    bio: user?.bio,
  });

  console.log(newProfileData);

  const handleChange = (e) => {
    console.log(newProfileData);
    setNewProfileData({
      ...newProfileData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newProfileData);

    const res = await customAxios.put(
      `/profile/updated/${user.id}`,
      newProfileData
    );
    refetch();
    toast.success("Your profile has been updated with success.");
    setOpen(false);
    console.log(res);
  };

  console.log(newProfileData);

  return (
    <Card className="w-full max-w-lg border-0 p-0">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>If you change your name, you will need to verify your account again.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="user_name">Username</Label>
              <Input
                value={newProfileData?.user_name}
                onChange={handleChange}
                name="user_name"
                id="user_name"
                placeholder="Enter your username"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                value={newProfileData?.name}
                onChange={handleChange}
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={newProfileData?.email}
              onChange={handleChange}
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              className="min-h-[100px]"
              id="bio"
              name="bio"
              value={newProfileData?.bio}
              onChange={handleChange}
              placeholder="Enter your bio"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avatar">Avatar</Label>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <Button variant="outline">Change Avatar</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Save Changes</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EditProfileForm;
