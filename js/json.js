const user ={id: 1, name: 'mehedi', job: 'wed developer'};
console.log(user);

// javaScript Object Notation (JSON)
const strindfied = JSON.stringify(user);
console.log(strindfied);



const shop = {
    owner : 'alia',
    address : {
        street : 'kochukhet voot er goli',
        city : 'borishal',
        country : 'Bangladesh'    
    } ,
    products : ['laptop', 'mic', 'monitor', 'keybord'],
    revenue : 45000,
    isOpen : true,
    isNew : false
}

console.log(shop);

const JSONShop = JSON.stringify(shop);

console.log(JSONShop);

const parsedShop = JSON.parse(JSONShop);

console.log(parsedShop);