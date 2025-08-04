import { ProfilePicture } from "../profile-picture";

export function ProfileInformation() {
  return (
    <div className="flex gap-2">
      <ProfilePicture
        userSpecific={{
          id: "id1",
          name: "Felipe Iotti",
          email: "felipeizago@hotmail.com",
        }}
      />

      <div className="flex flex-col">
        <p className="text-gray1 text-xs">Felipe Iotti</p>
        <p className="text-gray1/60 text-xs">felipeizago@hotmail.com</p>
      </div>
    </div>
  );
}
