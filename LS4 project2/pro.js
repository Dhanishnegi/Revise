const PRODUCT_DATA=[
    {
        brand: "Puma",
        name: "selena floral FileList",
        price: "2000",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg",
    },
    {
        brand: "Nike",
        name: "selena floral",
        price: "3000",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_640.jpg",
    },
    {
        brand: "Reboke",
        name: "selena l",
        price: "1500",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_640.jpg", 
    },
    {
        brand: "Puma",
        name: "selena floral File",
        price: "700",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg",
    },
    {
        brand: "Nike",
        name: "selena flora",
        price: "1700",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_640.jpg",
    },
    {
        brand: "Reboke",
        name: "selen l",
        price: "1000",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_640.jpg", 
    },
    {
        brand: "Puma",
        name: "selena floral ",
        price: "2300",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg",
    },
    {
        brand: "Nike",
        name: "selena ",
        price: "3000",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_640.jpg",
    },
    {
        brand: "Reboke",
        name: "selena ",
        price: "1200",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_640.jpg", 
    },
    {
        brand: "Puma",
        name: "selena  FileList",
        price: "1999",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg",
    },
    {
        brand: "Nike",
        name: "sele floral",
        price: "3000",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_640.jpg",
    },
    {
        brand: "Reboke",
        name: "sena l",
        price: "2500",
        size: "X,XX,XXL",
        productID: "women",
        img: "https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244648_640.jpg", 
    },
]


// filtering part -------->>>>>>>>>
let filter= document.getElementById("filter");

filter.addEventListener("change", function(){
   if(filter.value===""){
    Display(PRODUCT_DATA);
   }else{
    let filteredProducts= PRODUCT_DATA.filter(function(product){
        if(product.brand === filter.value){
            return product;
        }
    });
    Display(filteredProducts);
   }
})

let container= document.getElementById("container");


function Display(data){

    container.innerHTML= "";

    for(let i=0; i<data.length; i++){

        let Item= document.createElement("div");
        
        let Image= document.createElement("img");
        Image.src= data[i].img;
    
        let brandName= document.createElement("h2");
        brandName.innerText= data[i].brand;
    
        let itemName= document.createElement("p");
        itemName.innerText=data[i].name;
    
        let itemPrice= document.createElement("p");
        itemPrice.innerText=data[i].price;
    
        let cartBtn= document.createElement("button");
        cartBtn.innerText= "Add to cart";
        // functioning for cart button ------>>>>>>>>>>>>>>>>>>>>>
        cartBtn.addEventListener("click", function(){
            let cart= localStorage.getItem("cart");
            if(cart === null){
                cart = [];
            }else{
                cart=JSON.parse(cart);
            }
    
    
            // checking if same item is already in localStorage then don't add the item ------>>>
            // for this using (.some) higher order function --->>>>
            let itemAlreadyInCart= cart.some(function(product){
                return product.name === data[i].name;
            });
    
            if(!itemAlreadyInCart){
                cart.push(data[i]);
                localStorage.setItem("cart", JSON.stringify(cart));
            }else{
                alert("Item is already in the cart");
            }
    
    
    
            // cart.push(PRODUCT_DATA[i]);
            // localStorage.setItem("cart", JSON.stringify(cart));
        })
    
        Item.append(Image, brandName, itemName, itemPrice, cartBtn);
        
        container.append(Item);
    }
}

Display(PRODUCT_DATA);

