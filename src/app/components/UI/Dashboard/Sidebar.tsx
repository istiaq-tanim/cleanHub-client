import { USerRole } from "@/app/types/types";
import { sidebarItems } from "@/app/utils/sideBarItem";
import Image, { StaticImageData } from "next/image";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-[#f0e7e7] text-base-content">
        {sidebarItems("admin" as USerRole).map((item, index) => (
          <li className="text-lg" key={index}>
            <Link href={item.path} className="flex items-center">
              <Image
                src={item?.icon as StaticImageData}
                alt="icon"
                width={30}
                height={30}
              ></Image>
              <span className="pt-1">{item?.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
