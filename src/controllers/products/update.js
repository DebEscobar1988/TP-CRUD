const {readJSON,writeJSON} = require('../../data')
const products = readJSON('productsDataBase.json')
/* update= que significa actualizar */
module.exports=(req,res)=>{
    const {name,price,description, discount, category}= req.body;
    /* el map utiliza un array, para generar un nuevo array con el producto que viaja por req.params, para actualizar sus datos */
		const productsModify = products.map(product => {
			
			if(product.id === +req.params.id){
				product.name = name.trim()
				product.price =price
				product.discount= +discount
				product.category= category
				product.description = description.trim()
			}
			return product
			
		})
        /* aquí se guarda el array nuevo, en un archivo json */
		writeJSON(productsModify,'productsDataBase.json')
}