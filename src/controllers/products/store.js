const {readJSON,writeJSON} = require('../../data')
const products = readJSON('productsDataBase.json')
/* store= almacenar(almacena el nuevo producto que viaja por req.body) */


module.exports=(req,res)=>{
    const {name,price,description, discount, category}= req.body;
   
    const product= {
        id: products[products.length -1].id + 1,
        name: name.trim(),
        price :+price,
        discount: +discount,
        category,
        description : description.trim(),
        image: req.file ? req.file.filename : null
    }  
        res.send(product)
/* products.push agrega el nuevo producto al final del array que ya teniamos */
    products.push(product)
    writeJSON(products, 'productsDataBase.json')
   
    return res.redirect('/products') 
}