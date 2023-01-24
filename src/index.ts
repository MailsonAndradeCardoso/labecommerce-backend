import express, { Request, Response } from 'express'
import cors from "cors"
import { db } from './database/knex'
import { products } from './dataBase'
import { users } from './dataBase'

/* console.log(users);
console.log(products);
console.log(buy); */

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () => {
console.log("Servidor rodando na porta 3003")})

// get all users
app.get("/users", async (req: Request, res: Response) => {
    try {
        const result = await db.raw(`
        SELECT * FROM users;
        `)

        res.status(200).send({result})
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("usuario nao encontrado")
        }
    }
})

//get all products
app.get("/products", async (req: Request, res: Response) => {
    try {
        const result = await db.raw(`
        SELECT * FROM products;
        `)

        res.status(200).send({result})
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("produto nao encontrado")
        }
    }
})

//ex2
//search product by name

app.get("/product/search", (req: Request, res: Response) => {
    const q = req.query.q as string

    try {
        const name = req.params.name
        if (name !== undefined) {
            if (name.length < 1) {
                res.status(400)
                throw new Error("precisa pelo menos 1 caractere")

            }
        }

        const productsFilter = products.filter(

            (product) => product.name.includes(q)
        )
        res.status(200).send(productsFilter)
    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }

})

//create user

app.post ("/users", async (req:Request, res: Response) => {
    try {
        const {id, name, email, password, createdAt} = req.body

        if(id !== undefined){
            res.status(400)
            throw new Error("id invalido");
        }

        if(email !== undefined){
            res.status(400)
            throw new Error("email invalido");
            
        };

        await db.raw(`
        INSERT INTO users
        VALUES("${id}","${name}", "${email}", "${password}", "${createdAt}");
        `)
        res.status(200).send(`${name}, cadastrada com sucesso`);
        
        
    } catch (error: any) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

// create products
app.post('/products', async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const imageUrl = req.body.imageUrl

        if(typeof id !== "string") {
            res.status(200)
            throw new Error("Invalid Id, must be a text")
        }
        if( typeof name !== "string") {
            res.status(200)
            throw new Error("Invalid name, must be a text")
        }
        if(name.length <1 || id.length <1)  {
            res.status(400)
            throw new Error("Invalid id or name, must be a bigger than 1")
        }


        await db.raw(`
        INSERT INTO products (id, name, price, category)
        VALUES("${id}", "${name}", "${price}, "${description}", "${imageUrl}");
        `)
        res.status(201).send(`${name} created sucesfully!`)
    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        res.send(error.message)
    }
})

//create purchase
app.post('/purchases', async (req: Request, res: Response) => {
    try {
        const id = req.body.id
        const buyer = req.body.buyer
        const totalprice = req.body.totalPrice
        const createdAt = req.body.createdAt
        const paid = req.body.paid


        if (id !== undefined) {
            if(id !== "string"){
                res.status(400)
                throw new Error("There's no user with this id")
            }
        }

        if (buyer !== undefined) {
            if(buyer !== "string"){
                res.status(400)
                throw new Error("There's no product with this id")
            }
        }

        await db.raw(`
        INSERT INTO products (id, buyer, totalprice, createdAt, paid)
        VALUES("${id}", "${buyer}", "${totalprice}, "${createdAt}", "${paid}");
        `)
        res.status(201).send("Purchase created sucesfully!")
    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        res.send(error.message)
    }
})

//get products by id
app.get('/products/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const result = await db.raw(`
        SELECT * FROM products
        WHERE id = "${id}";
        `)

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        res.send(error.message)
    }
})

// get purchase user by id
app.get('/users/:id/purchases', async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const result = await db.raw(`
        SELECT * FROM purchases
        WHERE id = "${id}";
        `)

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }

        res.send(error.message)
    }
})

// Delete User by id
app.delete("/user/:id", (req: Request, res: Response) => {

    try {
    const id = req.params.id
    const productId = products.find((prdct)=> prdct.id === id)

    const delUser = users.findIndex((usr) => usr.id === id)
    if(!productId){
        res.status(400)
        throw new Error("Usuário não encontrado")
    }
    if (delUser >= 0) {
        users.splice(delUser, 1)
    }
    res.status(200).send("User deletado com sucesso") 
    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }

})


// Delete Product by id
app.delete("/product/:id", (req: Request, res: Response) => {

    try {    
    const id = req.params.id
    const deletProduct = products.findIndex((product) => product.id === id)
    const productId = products.find((product)=> product.id === id)

    if(!productId){
        res.status(400)
        throw new Error("Produto não encontrado")
    }
    if (deletProduct >= 0) {
        products.splice(deletProduct, 1)
    }
    res.status(200).send("Produto deletado com sucesso")
        
    }catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }

})

// Edit User by id
app.put("/user/:id", (req: Request, res: Response) => {

    try {
    const id = req.params.id
    const newId = req.body.id
    const newEmail = req.body.email
    const newPassword = req.body.password

    const editUsers = users.find((editUsers) => editUsers.id === id)
    if(!editUsers){
        res.status(400)
        throw new Error("Usuário não existe")
    }
    if (editUsers) {
        editUsers.id = (newId === undefined ? editUsers.id : newId)
        editUsers.email = (newEmail === undefined ? editUsers.email : newEmail)
        editUsers.password = (newPassword === undefined ? editUsers.password : newPassword)
    }
    res.status(200).send("Atualização realizada")
    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
   
})

// edit product by id
app.put("/product/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const newName = req.body.name 
    const newPrice = req.body.price
    const newCategory = req.body.category
    const editProducts = products.find((editProducts) => editProducts.id === id)
try {
    if (!editProducts) {
    throw new Error("Produto não encontrado") 
}
    if (editProducts) {
        editProducts.name = (newName === undefined ? editProducts.name : newName)
        editProducts.price = (newPrice === undefined ? editProducts.price : newPrice)
        editProducts.category = (newCategory === undefined ? editProducts.category : newCategory)
    }
    res.status(200).send("Atualização realizada")
} catch (error: any) {
    console.log(error)
    if (res.statusCode === 200) {
        res.status(500)
    }
    res.send(error.message)
}
    
})