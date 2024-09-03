import { USER_ROLE } from "../constant/role";
import { SidebarItem, USerRole } from "../types/types";
import addProduct from "./../../../public/add-to-cart.png";
import home from "./../../../public/icons8-home-50.png";
import orders from "./../../../public/order (1).png";
import product from "./../../../public/shopping-bag (1).png";

export const sidebarItems = (role: USerRole): SidebarItem[] => {
      const roleMenus: SidebarItem[] = [];

      switch (role) {
            case USER_ROLE.ADMIN:
                  roleMenus.push(
                        {
                              title: "Home",
                              path: "/",
                              icon: home
                        },
                        {
                              title: "Add Product",
                              path: `/dashboard/${role}/addProduct`,
                              icon: addProduct
                        },
                        {
                              title: "Orders",
                              path: `/dashboard/${role}/orders`,
                              icon: orders

                        },
                        {
                              title: "Products",
                              path: `/dashboard/${role}/products`,
                              icon: product
                        }

                  );
                  break;

            case USER_ROLE.USER:
                  roleMenus.push(
                        {
                              title: "My Orders",
                              path: `/${role}/my-orders`

                        }
                  );
                  break;

            default:
                  break;
      }

      return [...roleMenus];
};
