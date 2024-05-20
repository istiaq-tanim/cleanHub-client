import Image from "next/image";
import brush from "../../../../../public/brush.png";
import liquid from "../../../../../public/dish-soap.png";
import soap from "../../../../../public/dish-washing.png";
import gloves from "../../../../../public/gloves.png";
import detergent from "../../../../../public/laundry-detergent.png";
import sponge from "../../../../../public/sponge.png";

import CustomCategory from "../Home/CustomCategory";

const AllCategory = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 px-2 my-20">
      <CustomCategory path="soap">
        <div className="cursor-pointer flex flex-col justify-center items-center shadow-2xl p-2 rounded-xl hover:text-red-500">
          <Image
            src={soap}
            width={200}
            height={200}
            className="object-cover"
            alt="icon"
          ></Image>
          <h3 className="text-xl py-2">Dish Soap</h3>
        </div>
      </CustomCategory>
      <CustomCategory path="detergent">
        <div className="cursor-pointer flex flex-col justify-center items-center shadow-2xl p-2 rounded-xl  hover:text-red-500">
          <Image
            src={detergent}
            width={200}
            height={200}
            className="object-cover"
            alt="icon"
          ></Image>
          <h3 className="text-xl py-2">Dish Detergent</h3>
        </div>
      </CustomCategory>
      <CustomCategory path="liquid">
        <div className="cursor-pointer flex flex-col justify-center items-center shadow-2xl p-2 rounded-xl  hover:text-red-500">
          <Image
            src={liquid}
            width={200}
            height={200}
            className="object-cover"
            alt="icon"
          ></Image>
          <h3 className="text-xl py-2">Dish Liquid</h3>
        </div>
      </CustomCategory>
      <CustomCategory path="brush">
        <div className="cursor-pointer flex flex-col justify-center items-center shadow-2xl p-2 rounded-xl  hover:text-red-500">
          <Image
            src={brush}
            width={200}
            height={200}
            className="object-cover"
            alt="icon"
          ></Image>
          <h3 className="text-xl py-2">Dish brush</h3>
        </div>
      </CustomCategory>
      <CustomCategory path="gloves">
        <div className="cursor-pointer flex flex-col justify-center items-center shadow-2xl p-2 rounded-xl  hover:text-red-500">
          <Image
            src={gloves}
            width={200}
            height={200}
            className="object-cover"
            alt="icon"
          ></Image>
          <h3 className="text-xl py-2">Gloves</h3>
        </div>
      </CustomCategory>
      <CustomCategory path="sponge">
        <div className="cursor-pointer flex flex-col justify-center items-center shadow-2xl p-2 rounded-xl  hover:text-red-500">
          <Image
            src={sponge}
            width={200}
            height={200}
            className="object-cover"
            alt="icon"
          ></Image>
          <h3 className="text-xl py-2">Sponge</h3>
        </div>
      </CustomCategory>
    </div>
  );
};

export default AllCategory;
