import express, { Request, Response} from "express"
import cors from "cors"
import { products, purchase, users } from "./dataBase"
import { CATEGORY, TProduct, TPurchase, TUser } from "./types"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003,() =>{
  console.log('servidor rodando na porta 3003')
})

app.get('/ping', (req:Request, res:Response) =>{
  res.send('pong!')
})

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
/* console.log("Compra realizada com sucesso") */
}

createPurchase('5', '6', 4, 7)

export const getAllPurchasesFromUserId = (userId: string) : Array<TPurchase> => {
return purchase.filter((purchases => {
return purchases.userId === userId}))
}
/* console.log(getAllPurchasesFromUserId('1')) */

export function getProductById(id : string) : (undefined | TProduct){
return products.find(product => product.id === id);
}

// get products for id
app.get("/products/:id", (req: Request, res: Response) => {
const id = req.params.id
const result = products.find((product) =>product.id === id)

res.status(200).send(result)
})
// get purchase for id
app.get("/purchases/:id", (req: Request, res: Response) => {
const userId = req.params.id
const result = purchase.filter((purchase) =>purchase.userId === userId)

res.status(200).send(result)
})
// delete products by id
app.delete("/products/:id", (req: Request, res: Response) => {
const id = req.params.id
const indexToRemove = products.findIndex((product) =>product.id === id)

if(indexToRemove >= 0 ){
products.splice(indexToRemove, 1)

}

res.status(200).send("Produto apagado com sucesso")
})


// delete users by id
app.delete("/users/:id", (req: Request, res: Response) => {
const id = req.params.id
const indexToRemove = users.findIndex((user) =>user.id === id)

if(indexToRemove >= 0 ){
users.splice(indexToRemove, 1)

}

res.status(200).send("User apagado com sucesso")
})

// edit 

app.put("/user/id", (req: Request, res: Response)=>{
const id = req.params.id

const newId = req.params.id
const newEmail = req.body.email as string
const newPassword = req.body.password as string

const user = users.filter(user => user.id === id)

/* if(user){
user.id = newId || user.id
user.email = newEmail || user.email
user.password = newPassword || user.email
}
}) */

//edit products by id

app.put("/products/id", (req: Request, res: Response)=>{
    const id = req.params.id
    
    const newId = req.body.id
    const newName = req.body.name as string | undefined
    /* const newPrice = req.body.password as string | undefined */
    const newCategory = req.body.category as CATEGORY | undefined
    
    const product = products.find(product => product.id === id)
    
    if(product){
    product.id = newId || product.id
    product.name = newName || product.name
   /*product.price = isNaN(newPrice)? product.price :newPrice */
    product.category = newCategory || product.category
    }
    }))