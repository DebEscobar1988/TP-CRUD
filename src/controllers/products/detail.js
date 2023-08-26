const {readJSON} = require('../../data')
const products = readJSON('productsDataBase.json')
/* toThousand= puntos de miles */
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/* find= busca el producto que requiero por params */
module.exports=(req,res)=>{
    const id = req.params.id;
    const product = products.find(product => product.id === +id)
    return res.render('detail',{
        ...product,
        toThousand
    })
}