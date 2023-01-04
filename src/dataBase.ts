import {TUser} from "./types"
import {TProduct} from "./types"
import {TBuy} from "./types"
import {Category} from "./types"

export const users: TUser[] = [
    {
        id: "1",
        email:"mailson@cardoso.com" ,
        password: "1234"
    },
    {
        id: "2",
        email:"mailson2@cardoso.com" ,
        password: "1234"
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
        category: 'musical'
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

//ex 01 - 04/01 (typescript-ii)

export function createUser (id: string, email:string, password:string):void {
    const user: TUser= {id, email, password}
    users.push(user)
    console.table(`seu id:${id} e  email:${email} foram cadastrados!`)
}

createUser("3", "mailson3@mailson.com", "1234")
console.table(users)

// getAllUsers

function getAllUsers(): void{
    users.map((user)=>{
        console.log(user)
    })
}

getAllUsers()

// create new products

export function newProduct(id:string, name:string, price:number, category:Category):void{
    const product:TProduct={id, name, price, category}
    products.push(product)
    console.log(`produto: ${name}, cadastrado com sucesso!`)
}

newProduct('3', 'Xbox', 4000, Category.GAMES)

// search all products

export function searchProducts():void{
    products.map((products)=>{
        console.table(products)
    })

}
console.log("Produtos")
searchProducts()

// search for id

export function searchId( searchId:string):void{
console.table(products.find(products=>products.id === searchId))

}
searchId("02")



