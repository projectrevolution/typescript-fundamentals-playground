import { productsURL } from "../config/products";

export async function getProducts(): Promise <IProducts[]> {

    const response: Response = await fetch(productsURL);
    console.log(response);
    
    const products: IProducts[] = await response.json();
    console.log("the products are:", products);
    

    return products
    
}

getProducts();