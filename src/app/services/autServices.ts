
import { jwtDecode } from "jwt-decode";
import { authKey } from "../constant/authKeys";
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "../utils/utils";

export const setUserInfo = ({ accessToken }: { accessToken: string }) => {
      return setToLocalStorage(authKey, accessToken)
}

export const getUserInfo: any = () => {
      const authToken = getFromLocalStorage(authKey)
      if (authToken) {
            const decoded = jwtDecode(authToken);
            return { ...decoded }
      }
}

export const removeUserInfo = () => {
      return removeFromLocalStorage(authKey)
}
export const isLoggedIn = () => {
      const authToken = getFromLocalStorage(authKey)
      if (authToken) {
            return !!authToken
      }
}