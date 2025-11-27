const createCard=(html, product)  => {
    let output = html.replace(/{%PRODUCT_NAME%}/g, product.productName)

    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%QUANTİTY%}/g, product.quantity)
    output = output.replace(/{%PRİCE%}/g, product.price)
    output = output.replace(/{%ID%}/g, product.id)
    

    return output
}





module.exports = createCard;