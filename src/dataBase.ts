import {TUser} from "./types"
import {TProduct} from "./types"
import {TPurchase} from "./types"
import {CATEGORY} from "./types"

//04/01/2023

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
category: 'GAMES'
},
{
id: '2',
name: 'guitarra fly-v',
price: 3000,
category: 'MUSICAL'
}
]

export const purchase: TPurchase[] = [
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

//09/01/2023

export function createUser(id : string, email : string, password : string) : string{
users.push({
id,
email,
password
});
return ("Cadastro realizado com sucesso");
}

export function getAllUsers() : TUser[]{
    return users;
}

export function createProduct(id : string, name : string, price : number, category : CATEGORY) : void{
const newProducts : TProduct[] = [{
id,
name,
price,
category
}]
products.push(...newProducts)
console.log("Produto criado com sucesso");
}

export function getAllProducts() : TProduct[]{
return products;
}

export function queryProductsByName(q : string) : TProduct[]{
return products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()));
}

export const createPurchase = (userId: string, productId: string, quantity: number, totalPrice: number) : void => {
const newPurchase: TPurchase[] = [{
userId,
productId,
quantity,
totalPrice,
}]
purchase.push(...newPurchase)
console.log("Compra realizada com sucesso")
}

createPurchase('5', '6', 4, 7)

export const getAllPurchasesFromUserId = (userId: string) : Array<TPurchase> => {
return purchase.filter((purchases => {
return purchases.userId === userId}))
}
console.log(getAllPurchasesFromUserId('1'))

export function getProductById(id : string) : (undefined | TProduct){
return products.find(product => product.id === id);
}


