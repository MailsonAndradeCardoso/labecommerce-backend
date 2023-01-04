export type TUser = {
    id: string
    email: string
    password: string
  }

  export type TProduct = {
    id: string
    name: string
    price: number
    category: string
  }

  export type TBuy = {
    userId: string
    productId : string
    quantity : number
    totalPrice  : number
  }

  export enum Category{
    GAMES = 'GAMES',
    MUSICAL= 'MUSICAL'
}