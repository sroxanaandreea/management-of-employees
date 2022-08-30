import FemaleImage from "../Images/female.svg";
import MaleImage from "../Images/male.svg";

export interface ProfilePictureParameter {
  isFeminin: boolean;
  height: string;
  width: string;
}

export default function ProfileImage({
  isFeminin,
  height,
  width,
}: ProfilePictureParameter) {
  return (
    <>
      {!isFeminin ? (
        <img
          src={MaleImage}
          height={height}
          width={width}
          alt="Profile Picture"
        />
      ) : (
        <img
          src={FemaleImage}
          height={height}
          width={width}
          alt="Profile Picture"
        />
      )}
    </>
  );
}
