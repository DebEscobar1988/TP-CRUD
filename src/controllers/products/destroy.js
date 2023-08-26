const {readJSON,writeJSON} = require('../../data')
const products = readJSON('productsDataBase.json')

/* destroy = destruir */
/* filter= itera sobre todos los productos, y el producto que viaja por req.params lo compara para excluirlo del nuevo array(osea, se destruye) */

module.exports=(req,res)=>{
   	
	const productsModify = products.filter(product => product.id !== +req.params.id);

	/* luego reescribe el json sin el producto que capturo por params en la const productsModify */
	writeJSON(productsModify ,'productsDataBase.json')
	return res.redirect('/products')
}