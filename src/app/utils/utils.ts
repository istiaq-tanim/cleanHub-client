export const discountPrice = (price: number, discount: number): string => {
      return (price - (price * discount) / 100).toFixed(2)
}