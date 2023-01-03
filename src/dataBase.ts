import {TUser} from "./types"
import {TProduct} from "./types"
import {TBuy} from "./types"

export const users: TUser[] = [
    {
        id: "1",
        email:"mailson@cardoso.com" ,
        password: "1234"
    },
    {
        id: "2",
        email:"mailson2@cardoso.com" ,
        password: "1234*"
    }
]

export const products: TProduct[] = [
    {
        id: '1',
        name: 'ps5',
        price: 5000,
        category: 'game'
    },
    {
        id: '2',
        name: 'guitarra fly-v',
        price: 3000,
        category: 'instr_Musical'
    }
]

export const buy: TBuy[] = [
    {
        userId: '1',
        productId : '1',
        quantity : 2,
        totalPrice  : 10000
    },
    {
        userId: '2',
        productId : '2',
        quantity : 2,
        totalPrice  : 6000
    }
]