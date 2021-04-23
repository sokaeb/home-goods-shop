const productsData = [
    {
        id: 1,
        name: "Mitra",
        price: 90,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "sofa",
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "leather sofa"
    },
    {
        id: 2,
        name: "Channing",
        price: 130,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "sofa",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "green sofa"
    },
    {
        id: 3,
        name: "Shaye",
        price: 55,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "sofa",
        image: "https://images.unsplash.com/photo-1558898434-af897d9ac0a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "yellow sofa"
    },
    {
        id: 4,
        name: "Jules",
        price: 100,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "lamp",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
        alt: "silver lamp"
    },
    {
        id: 5,
        name: "Fergie",
        price: 80,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "lamp",
        image: "https://images.unsplash.com/photo-1603889392094-d5ee157d724c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        alt: "white lamp"
    },
    {
        id: 6,
        name: "Islay",
        price: 55,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "lamp",
        image: "https://images.unsplash.com/photo-1607809714110-e34f71c7b2ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80",
        alt: "bronze lamp"
    },
    {
        id: 7,
        name: "Dana",
        price: 100,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "coffeeTable",
        image: "https://images.unsplash.com/photo-1615066594139-36c113e098d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=390&q=80",
        alt: "black table"
    },
    {
        id: 8,
        name: "Safa",
        price: 80,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "coffeeTable",
        image: "https://images.unsplash.com/photo-1559662780-33af019fd570?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        alt: "bronze table"
    },
    {
        id: 9,
        name: "Roshan",
        price: 55,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "coffeeTable",
        image: "https://images.unsplash.com/photo-1617198998854-81717988fe4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
        alt: "wood table"
    },
    {
        id: 10,
        name: "Carmo",
        price: 40,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "shelf",
        image: "https://images.unsplash.com/photo-1576069353653-21a2b29e3bc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80",
        alt: "wood shelf"
    },
    {
        id: 11,
        name: "Duda",
        price: 50,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "shelf",
        image: "https://images.unsplash.com/photo-1597254952656-f4a04f790155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "gold shelf"
    },
    {
        id: 12,
        name: "Cruz",
        price: 30,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "shelf",
        image: "https://images.unsplash.com/photo-1574421189457-6e0a51abe767?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "white shelf"
    },
];

const sofaData = [
    {
        id: 1,
        name: "Mitra",
        price: 90,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "sofa",
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "leather sofa"
    },
    {
        id: 2,
        name: "Channing",
        price: 130,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "sofa",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "green sofa"
    },
    {
        id: 3,
        name: "Shaye",
        price: 55,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "sofa",
        image: "https://images.unsplash.com/photo-1558898434-af897d9ac0a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "yellow sofa"
    },
];

const lampData = [
    {
        id: 4,
        name: "Jules",
        price: 100,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "lamp",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
        alt: "silver lamp"
    },
    {
        id: 5,
        name: "Fergie",
        price: 80,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "lamp",
        image: "https://images.unsplash.com/photo-1603889392094-d5ee157d724c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        alt: "white lamp"
    },
    {
        id: 6,
        name: "Islay",
        price: 55,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "lamp",
        image: "https://images.unsplash.com/photo-1607809714110-e34f71c7b2ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=331&q=80",
        alt: "bronze lamp"
    },
];

const coffeetableData = [
    {
        id: 7,
        name: "Dana",
        price: 100,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "coffeeTable",
        image: "https://images.unsplash.com/photo-1615066594139-36c113e098d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=390&q=80",
        alt: "black table"
    },
    {
        id: 8,
        name: "Safa",
        price: 80,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "coffeeTable",
        image: "https://images.unsplash.com/photo-1559662780-33af019fd570?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        alt: "bronze table"
    },
    {
        id: 9,
        name: "Roshan",
        price: 55,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "coffeeTable",
        image: "https://images.unsplash.com/photo-1617198998854-81717988fe4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
        alt: "wood table"
    },
];

const shelfData = [
    {
        id: 10,
        name: "Carmo",
        price: 40,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "shelf",
        image: "https://images.unsplash.com/photo-1576069353653-21a2b29e3bc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80",
        alt: "black shelf"
    },
    {
        id: 11,
        name: "Duda",
        price: 50,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "shelf",
        image: "https://images.unsplash.com/photo-1597254952656-f4a04f790155?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "gold shelf"
    },
    {
        id: 12,
        name: "Cruz",
        price: 30,
        description: "Cat ipsum dolor sit amet. Jump on fridge. Meow meow launch to pounce upon little yarn mouse meoooow.",
        category: "shelf",
        image: "https://images.unsplash.com/photo-1574421189457-6e0a51abe767?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        alt: "white shelf"
    },
];

module.exports = {
    productsData,
    sofaData,
    lampData,
    coffeetableData,
    shelfData,
};