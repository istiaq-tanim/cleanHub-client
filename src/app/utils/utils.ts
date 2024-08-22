export const discountPrice = (price: number, discount: number): string => {
      return (price - (price * discount) / 100).toFixed(2)
}

export const setToLocalStorage = (key: string, accessToken: string) => {
      if (!key || typeof window === "undefined") {
            return ""
      }
      return localStorage.setItem(key, accessToken)
}

export const getFromLocalStorage = (key: string,) => {
      if (!key || typeof window === "undefined") {
            return ""
      }
      return localStorage.getItem(key)
}
export const removeFromLocalStorage = (key: string,) => {
      if (!key || typeof window === "undefined") {
            return ""
      }
      return localStorage.removeItem(key)
}

