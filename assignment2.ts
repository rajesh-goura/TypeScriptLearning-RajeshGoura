type Cart = {
    name: string;
    price: number;
    quantity: number;
    subtotal?:number;
}

let cart: Cart[]=[
    { name: "Apple", price: 120, quantity: 3 },
    { name: "Milk", price: 60, quantity: 2 },
    { name: "Bread", price: 40, quantity: 1 },
  
];

const addItem = (n: string,p: number,q: number):void=>{
    const item = {name:n,price:p,quantity:q,subtotal:p*q};
    cart.push(item);
};

const updateQuantity=(name:string,quantity:number):void=>{
    const item=cart.find((cartItem)=> cartItem.name==name);
    if(item){
        item.quantity=quantity;
        item.subtotal=quantity*item.price;

    }else{
        console.log("item does not exist");
    };
};

const removeItem=(name:string):void=>{
    const item=cart.findIndex((cartItem)=> cartItem.name==name);
    if(item){
        cart.splice(item,1);
    }else{
        console.log("item does not exist ");
    }

};

const totalPrice = ():number=>{
    return cart.reduce((total:number,value:Cart):number=>{
        return total+(value.subtotal ?? 0) ;
    },0);
};

const subTotal=(cartItem:Cart):number=>{
    return cartItem.price*cartItem.quantity;
}

cart.forEach((cart)=>{
    cart.subtotal=subTotal(cart);
})

const displayall = ():void =>{
    cart.forEach((cartItem):void=>{
        console.log(`Item name: ${cartItem.name}, price:${cartItem.price}, quantity:${cartItem.quantity} , subtTotal: ${cartItem.price*cartItem.quantity}`);
    })
    console.log("The total price is:"+totalPrice());
};


addItem("banana",20,5);
updateQuantity("Apple",4);

displayall();