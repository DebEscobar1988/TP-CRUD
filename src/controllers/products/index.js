const {readJSON} = require('../../data')
const products = readJSON('productsDataBase.json')
/* toThousand= puntos de miles */
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports=(req,res)=>{

		return res.render('products',{
			products,
			toThousand
		})
}