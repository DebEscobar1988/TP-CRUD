const {readJSON} = require('../../data')
const products = readJSON('productsDataBase.json')


module.exports=(req,res)=>{
    const product = products.find(product => product.id === +req.params.id)
		return res.render('product-edit-form',{
			...product})
}