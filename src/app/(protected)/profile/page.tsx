import { auth } from "@/auth";

const ProfilePage = async () => {
  const { user }: any = await auth();
  console.log({ user });

  return (
    <div>
      <h2>ProfilePage</h2>
      <h5>{user.name}</h5>
      <img
        src={user.image}
        width={30}
        height={30}
        alt="profile image"
        className="rounded-full"
      />
    </div>
  );
};

export default ProfilePage;
