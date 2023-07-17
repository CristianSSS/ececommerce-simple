
class Products{
    constructor(){

        this.url = "https://fakestoreapi.com/products";
    }



    async fetchingData(url){

        const res = await fetch(url);
        const data = await res.json();
        return data;
    }


    async getAllProducts(){

        return await this.fetchingData(this.url);

    }

    async getForCategory(){
    
        return await this.fetchingData(`${this.url}`+`?limit=${limite}`);
    }

    getSingleProduct(id_producto){
        
    }

    async getLimitProducts(limite){

        return await this.fetchingData(`${this.url}`+`?limit=${limite}`)
    }

}

export default Products;