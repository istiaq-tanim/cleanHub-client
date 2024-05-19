import Image from "next/image";
import Star from "../../../../public/star.svg";

const Rating = ({ value }: { value: number }) => {
  const stars = Array(Math.round(value)).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <Image key={index} src={star} width="14" height="14" alt="star" />
      ))}
    </>
  );
};

export default Rating;
