const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5001;

// -------------------------------------- Home Page ----------------------------------------------

const homeUpperData = [
    {
        _id: 1,
        heading: 'Our Collection',
        description: "Elevate your look with our premium bracelets, earrings, chains, and pendants. Expertly crafted for style and sophistication, perfect for any occasion. Shop now!",
        gender: 'men',
        category: 'allProducts',
        img: [
            "https://www.swashaa.com/cdn/shop/collections/Untitled_design.png?v=1688721661&amp;width=1600",
            "https://www.swashaa.com/cdn/shop/files/ThomasMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713605406&amp;width=1080",
            "https://www.swashaa.com/cdn/shop/files/HenrikMen_sChainPendant-19.jpg?v=1716461901&amp;width=1080"
        ]
    }
];


app.get('/homeUpperData',(req,res) => {
    res.json(homeUpperData);
})




const homeLowerData = [
    {
        _id: 2,
        heading: 'Bracelets',
        description: "Enhance your style with our sleek, versatile men's bracelets, crafted from premium materials for a sophisticated touch to any outfit. Perfect for everyday wear or special occasions.",
        gender: 'men',
        category: 'Bracelet',
        img: [
            "https://www.swashaa.com/cdn/shop/files/EnzoMen_sBracelet1_-1-20-02-2024_3.jpg?v=1713722329&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IanGold01.jpg?v=1713615118&width=1080",
            "https://www.swashaa.com/cdn/shop/files/RockyMen_sLeatherBracelet-26-02-2024copy-_5.jpg?v=1711713642&width=1080",
            "https://www.swashaa.com/cdn/shop/files/BenjomiaGold01.jpg?v=1713508684&amp;width=1080"
        ]
    },
    {
        _id: 3,
        heading: 'Earring',
        description: "Discover elegant, high-quality earrings that elevate any look. Shop now for unique designs and timeless pieces perfect for any occasion.",
        gender: 'men',
        category: 'Earing',
        img: [
            "https://www.swashaa.com/cdn/shop/files/SamuelMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604718&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PIC0488.jpg?v=1713604430&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ThomasMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713605406&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JoshuaMen_sEarrings-27.jpg?v=1716464293&width=1080"
        ]
    },
    {
        _id: 4,
        heading: 'Chain & Pendant',
        description: "Discover our elegant chain and pendants, crafted to add a touch of sophistication to any outfit. Shop now for timeless style.",
        gender: 'men',
        category: 'Chain',
        img: [
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023_2.jpg?v=1713600137&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-20.jpg?v=1716462048&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSliverMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1713597074&width=1080",
            "https://www.swashaa.com/cdn/shop/files/Jihaan18KGoldPlatedChain_PIC0352copy.jpg?v=1716461125&width=1080"
        ]
    }
    // Add more items as needed
];

// Define a route to get men's jewelry data

app.get('/homeLowerData',(req,res) => {
    res.json(homeLowerData)
})

// ----------------------------------------- All products ---------------------------------------------


const allProducts = [
    {
        _id : "626312001e398e410dd40701",
        title : "Enzo Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1999,
        size: ["Small","Medium"],
        color:"White",
        rating:4.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/EnzoMen_sBracelet1_-1-20-02-2024_3.jpg?v=1713722329&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EnzoMen_sBracelet_1_-2.jpg?v=1713722329&width=1080",
            "https://www.swashaa.com/cdn/shop/files/preview_images/4324d50401674f438838ccb6d4746d61.thumbnail.0000000000_620x.jpg?v=1688809414",
        ]
    },
    {
        _id : "626312001e398e410dd40702",
        title : "Ian Men's Kada",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1599,
        size: ["Small","Large"],
        color:"Gold",
        rating:4.2, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/IanGold01.jpg?v=1713615118&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IanBlack01_4.jpg?v=1715253650&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IPV02681.jpg?v=1715253684&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IPV02540.jpg?v=1715253684&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40703",
        title : "Rocky Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1299,
        size: ["Small","Medium"],
        color:"Black",
        rating:4.5, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/RockyMen_sLeatherBracelet-26-02-2024copy-_5.jpg?v=1711713642&width=1080",
            "https://www.swashaa.com/cdn/shop/files/RockyMen_sLeatherBracelet-26-02-2024copy-_4.jpg?v=1713610765&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DSC00265-1_2.jpg?v=1713610781&width=1080",
            "https://www.swashaa.com/cdn/shop/files/RockyMen_sLeatherBracelet04-07-2023copy-_2.jpg?v=1713610831&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40704",
        title : "Hector Men's Kada",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 999,
        size: ["Medium","Large"],
        color:"Gold",
        rating:3.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/HectorMen_sBracelet-Zebin-M-Styling-inhouse-15-01-2024__2.jpg?v=1716464138&width=1080",
            "https://www.swashaa.com/cdn/shop/files/HectorMen_sKada-17.jpg?v=1716464138&width=1080",
            "https://www.swashaa.com/cdn/shop/files/HectorMen_sBracelet-Zebin-M-Styling-inhouse-15-01-2024.jpg?v=1716464138&width=1080",
            "https://www.swashaa.com/cdn/shop/files/HectorMen_sBracelet-Standalone-Styling-inhouse-15-01-2024__2.jpg?v=1716464138&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40705",
        title : "Sol Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1299,
        size: ["Small","Large"],
        color:"Black",
        rating:4.0, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/SolMen_sLeatherBracelet_Instapost_-Chaitanya-M-Styling-Inhouse-16-10-2023.jpg?v=1713611284&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SolMen_sLeatherBracelet-Standalone-Styling-Inhouse-13-10-2023_2.jpg?v=1713611284&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SolMen_sLeatherBracelet-Standalone-Styling-outdor-12-10-2023.jpg?v=1713611319&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40706",
        title : "Kseas Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1299,
        size: ["Large"],
        color:"Blue",
        rating:4.3, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/KseasMen_sLeatherBracelet-Siddharth-M-Styling-Inhouse-13-01-2024_3.jpg?v=1711965387&width=1080",
            "https://www.swashaa.com/cdn/shop/files/KseasMen_sLeatherBracelet-Standalone-Styling-Inhouse-10-01-2024_2.jpg?v=1711713388&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PIC2388.jpg?v=1711965387&width=1080",
            "https://www.swashaa.com/cdn/shop/files/KseasMen_sLeatherBracelet-Siddharth-M-Styling-Inhouse-13-01-2024_4.jpg?v=1711713388&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40707",
        title : "Otis White Men's Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 899,
        size: ["Medium","Large"],
        color:"White",
        rating:4.2, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/OtisMen_sBracelet_Silver_-Zebin-M-Styling-Inhouse-01-12-2023_3.jpg?v=1713528157&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OtisMen_sBracelet_Silver_-Standalone-Styling-Inhouse-02-12-2023_2.jpg?v=1713528157&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OtisMen_sBracelet_Silver_-Standalone-Styling-Inhouse-02-12-2023.jpg?v=1713528156&width=1080",
        ]
    },
    {
        _id : "626312001e398e410dd40708",
        title : "Griffin Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 899,
        size: ["Small","Medium"],
        color:"White",
        rating:3.6, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/PIC2640d.jpg?v=1714128642&width=1080",
            "https://www.swashaa.com/cdn/shop/files/GriffinMen_sLeatherBracelet.jpg?v=1714128364&width=1080",
            "https://www.swashaa.com/cdn/shop/files/GriffinMen_sLeatherBracelet-Standalone-Styling-Inhouse-28-03-2024_5.jpg?v=1714128642&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40709",
        title : "Infinity Forge Men's Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1299,
        size: ["Small","Medium","Large"],
        color:"White",
        rating:4.0, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/InfinityForgeMen_sBracelet_PIC2613.jpg?v=1716466941&width=1080",
            "https://www.swashaa.com/cdn/shop/files/InfinityForgeMen_sBracelet_3.jpg?v=1716466941&width=1080",
            "https://www.swashaa.com/cdn/shop/files/InfinityForgeMen_sBracelet_3.jpg?v=1716466941&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40710",
        title : "Leoben Men's Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 899,
        size: ["Medium"],
        color:"Blue",
        rating:3.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/16.jpg?v=1716549040&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LeobenMen_sBracelet_5.jpg?v=1716549040&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LeobenMen_sBracelet_4.jpg?v=1716549040&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LeobenMen_sBracelet-Standalone-Styling-Inhouse-26-03-2024_2.jpg?v=1714133034&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40711",
        title : "Regina Diamond Rosegold Plated Men's Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 699,
        size: ["Small","Medium","Large"],
        color:"White",
        rating:3.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/products/MensBracelet10.jpg?v=1675929604&width=1080",
            "https://www.swashaa.com/cdn/shop/products/IPV09742.jpg?v=1713528247&width=1080",
            "https://www.swashaa.com/cdn/shop/files/REGINADIAMONDBRACELET02.jpg?v=1688036758&width=1080",
            "https://www.swashaa.com/cdn/shop/products/MensBracelet12.jpg?v=1713528247&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40712",
        title : "Juan Men's Kada",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 2999,
        size: ["Small"],
        color:"Gold",
        rating:4.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/JuanMen_sBracelet-Zebin-M-Styling-inhouse-15-01-2024_3.jpg?v=1715928117&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JuanMen_sBracelet-Standalone-Styling-inhouse-15-01-2024_2.jpg?v=1713615727&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JUANMEN_SKADA.jpg?v=1715928117&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443913",
        title:"Samuel Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:299,
        size:["Medium","Large"],
        color:"White",
        rating:4.4,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/SamuelMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604718&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SamuelMen_sEarrings-Standalone-Styling-Inhouse-18-01-2024.jpg?v=1713604718&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SamuelEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604718&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SamuelMen_sEarrings-Standalone-Styling-Inhouse-08-11-2023.jpg?v=1713604718&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443914",
        title:"Emo Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:499,
        size:["Small","Medium"],
        color:"White",
        rating:4.5,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/PIC0488.jpg?v=1713604430&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EmoMen_sEarrings-Standalone-Styling-inhouse-28-11-2023_2.jpg?v=1713604307&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EmoMen_sEarrings-Standalone-Styling-inhouse-28-11-2023.jpg?v=1713604307&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443915",
        title:"Thomas Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:499,
        size:["Small","Medium","Large"],
        color:"White",
        rating:4.4,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/ThomasMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713605406&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ThomasMen_sEarrings-Standalone-Styling-Inhouse-18-01-2024.jpg?v=1713605406&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ThomasMen_sEarrings-Standalone-Styling-Inhouse-08-11-2023.jpg?v=1713605406&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443916",
        title:"Joshua Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:999,
        size:["Small","Medium","Large"],
        color:"White",
        rating:4.8,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/JoshuaMen_sEarrings-27.jpg?v=1716464293&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JoshuaMen_sEarrings-Standalone-Styling-Inhouse-08-11-2023_9065a8dd-9f8b-474b-bda6-7bf349e77762.jpg?v=1716464293&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JoshuaMen_sEarrings-Standalone-Styling-Inhouse-28-10-2023_2.jpg?v=1716464293&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443917",
        title:"Steven Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:899,
        size:["Small","Large"],
        color:"White",
        rating:4.9,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/StevenMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604940&width=1080",
            "https://www.swashaa.com/cdn/shop/files/StevenMen_sEarrings-Standalone-Styling-Inhouse-28-10-2023_2.jpg?v=1713604940&width=1080",
            "https://www.swashaa.com/cdn/shop/files/StevenMen_sEarrings-Standalone-Styling-Inhouse-31-10-2023_2.jpg?v=1713604930&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443918",
        title:"Para Flash Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:699,
        size:["Small","Medium","Large"],
        color:"White",
        rating:4.7,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/ParaFlashME.jpg?v=1715927668&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ParaFlashMen_sEarrings-Standalone-Styling-inhouse-28-11-2023.jpg?v=1713604580&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ParaFlashMen_sEarrings-Standalone-Styling-inhouse-28-11-2023_2_b79217cd-2ebb-4073-bb72-62133d501fe9.jpg?v=1715927668&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443919",
        title:"Timoty Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:699,
        size:["Small","Medium"],
        color:"White",
        rating:4.1,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/TimotyMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1699610349&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443920",
        title:"Solaris 18K Gold Plated Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:899,
        size:["Medium"],
        color:"Gold",
        rating:4.3,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/SolarisME.jpg?v=1715927595&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SolarisMen_sEarrings-Standalone-Styling-inhouse-28-11-2023.jpg?v=1713604800&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SolarisMen_sEarrings-Standalone-Styling-inhouse-28-11-2023_2_4e2adbed-8807-40e8-8626-7e2bb9971681.jpg?v=1715927595&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443921",
        title:"Brain Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:499,
        size:["Medium","Large"],
        color:"White",
        rating:3.5,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/BrainMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604063&width=1080",
            "https://www.swashaa.com/cdn/shop/files/BrainMen_sEarrings-Standalone-Styling-Inhouse-18-01-2024.jpg?v=1713604063&width=1080",
            "https://www.swashaa.com/cdn/shop/files/BrainMen_sEarrings-Standalone-Styling-Inhouse-31-10-2023_2.jpg?v=1713604113&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443922",
        title:"INsideout Silver Hoop Earrings For Men (1 PC ONLY)",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:1299,
        size:["Medium"],
        color:"White",
        rating:4.2,
        img:
        [
            "https://zevaramaze.com/cdn/shop/products/Untitled-7_500x500@2x.jpg?v=1664787601",
            "https://zevaramaze.com/cdn/shop/products/wf1_a4ea4bec-fcbe-4548-b844-10e0c6643b8e_500x500@2x.jpg?v=1664787601",
            "https://zevaramaze.com/cdn/shop/products/w2view_500x500@2x.jpg?v=1664787601",
            "https://zevaramaze.com/cdn/shop/products/ys1_ea31cf74-9d2f-4169-a02e-1629ca6d2e4f_500x500@2x.jpg?v=1664787601"
        ]
    },
    {
        _id:"62638800789463d436443923",
        title:"Round Crown Silver Stud for Men",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:899,
        size:["Small"],
        color:"White",
        rating:4.3,
        img:
        [
            "https://zevaramaze.com/cdn/shop/products/Untitled-23_500x500@2x.jpg?v=1694433851",
            "https://zevaramaze.com/cdn/shop/products/567mmcrwonroundfs1_500x500@2x.jpg?v=1663924301",
            "https://zevaramaze.com/cdn/shop/products/567mmcrwonroundyf1_500x500@2x.jpg?v=1664788024",
            "https://zevaramaze.com/cdn/shop/products/5-6-7-mmrounscrowns1_500x500@2x.jpg?v=1664788024"
        ]
    },
    {
        _id:"62638800789463d436443924",
        title:"Pluto Silver Hoop Earrings For Men (1 PC ONLY)",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:1199,
        size:["Large"],
        color:"White",
        rating:4.8,
        img:
        [
            "https://zevaramaze.com/cdn/shop/products/Untitled-33_500x500@2x.jpg?v=1664788797",
            "https://zevaramaze.com/cdn/shop/products/6mm_5mmtrianglefront_500x500@2x.jpg?v=1664788797",
            "https://zevaramaze.com/cdn/shop/products/6mmtriangleys_500x500@2x.jpg?v=1664788797",
            "https://zevaramaze.com/cdn/shop/products/6mm_5mmtriangleyf_500x500@2x.jpg?v=1664788797"
        ]
    },
    {
        _id:"6263884a789463d436443925",
        title:"Chain Air Force",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1299,
        size:["Small","Medium","Large"],
        color:"Black",
        rating:4.2,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023_2.jpg?v=1713600137&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023_3.jpg?v=1713600137&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-PIC0033.jpg?v=1715947096&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023.jpg?v=1715947096&width=1080" 
        ]
    },
    {
        _id:"6263884a789463d436443926",
        title:"Chain 1 '07 SE",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:995,
        size:["Small","Large"],
        color:"White",
        rating:3.8,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-20.jpg?v=1716462048&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023.jpg?v=1716462048&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023_2.jpg?v=1716462048&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-21.jpg?v=1716462048&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443927",
        title:"Ivo Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1299,
        size:["Small","Medium"],
        color:"White",
        rating:4.2,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSliverMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1713597074&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSilverMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1copy.jpg?v=1715321615&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSilverMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1copy.jpg?v=1713597074&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSliverMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-202301copy-1copy.jpg?v=1713597108&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443928",
        title:"Dope Leaf Silver Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:995,
        size:["Small","Medium","Large"],
        color:"Gold",
        rating:4.1,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/Jihaan18KGoldPlatedChain_PIC0352copy.jpg?v=1716461125&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023_3.jpg?v=1713600137&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-PIC0033.jpg?v=1715947096&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023.jpg?v=1715947096&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443929",
        title:"Pierre Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:995,
        size:["Medium"],
        color:"White",
        rating:4.1,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/PierreMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023.jpg?v=1715323713&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PierreMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023_2.jpg?v=1715337077&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PierreMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023_2.jpg?v=1715337077&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PierreMen_sChainPendant-Standalone-Styling-Inhouse-08-11-20231.jpg?v=1715323713&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443930",
        title:"Etash 18K Gold Plated Men's Chain Pendant ",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1599,
        size:["Medium","Large"],
        color:"White",
        rating:4.9,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/CopyofEtashSilverMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1715337229&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EtashGoldenMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1copy.jpg?v=1715337229&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EtashGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1715337229&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EtashGoldenMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1copy.jpg?v=1715337229&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443931",
        title:"Amur 18K Gold Plated Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1499,
        size:["Small","Medium"],
        color:"Gold",
        rating:4.9,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/AmurGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-26-07-202301copy.jpg?v=1713593187&width=1080",
            "https://www.swashaa.com/cdn/shop/files/AmurGoldenMensChainPendent-Standalone-styling-inhouse-09-01-2024copy.jpg?v=1713593187&width=1080",
            "https://www.swashaa.com/cdn/shop/files/AmurGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-28-07-202301copy-1.jpg?v=1713593187&width=1080",
            "https://www.swashaa.com/cdn/shop/files/AmurGoldenMen_sChainPendent-Standalone-Styling-Inhouse-02-09-2023-copy.jpg?v=1713593276&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443932",
        title:"Dope Leaf 18K Gold Plated Men's Chain Pendant ",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:899,
        size:["Medium","Large"],
        color:"Gold",
        rating:4.7,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/DopeLeafGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-26-07-2023copy-1copy.jpg?v=1713596294&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafGoldenMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1copy.jpg?v=1715321576&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-26-07-202301copy-1copy.jpg?v=1713596348&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafGoldenMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1copy.jpg?v=1713596375&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443933",
        title:"Tavish Silver Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:985,
        size:["Small","Medium","Large"],
        color:"White",
        rating:4.8,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/TavishSilverMen_sChainPendent-Sahil-M-Styling-Inhouse-31-07-2023copy-1.jpg?v=1715323876&width=1080",
            "https://www.swashaa.com/cdn/shop/files/TavishSilverMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1.jpg?v=1715337111&width=1080",
            "https://www.swashaa.com/cdn/shop/files/TavishSilverMen_sChainPendent-Sahil-M-Styling-Inhouse-26-07-2023copy-1.jpg?v=1715337111&width=1080",
            "https://www.swashaa.com/cdn/shop/files/TavishSilverMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1.jpg?v=1715323876&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443934",
        title:"Noble 18K Gold Plated Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:899,
        size:["Small","Medium","Large"],
        color:"Gold",
        rating:4.1,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/PIC0163.jpg?v=1714028036&width=1080",
            "https://www.swashaa.com/cdn/shop/files/NobleMen_sChainPendant-Standalone-Styling-Inhouse-05-12-2023.jpg?v=1713602844&width=1080",
            "https://www.swashaa.com/cdn/shop/files/NobleMen_sChainPendant-Standalone-Styling-inhouse-13-01-2024_2.jpg?v=1714028036&width=1080",
            "https://www.swashaa.com/cdn/shop/files/NobleMen_sChainPendant-Zebin-M-Styling-inhouse-13-01-2024.jpg?v=1714028036&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443935",
        title:"Oscar 18K Gold Plated Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1299,
        size:["Large"],
        color:"White",
        rating:3.4,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/OscarGoldenMen_sChainPendent--Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1713603269&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OscarGoldenMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1copy.jpg?v=1713603280&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OscarGoldenMen_sChainPendent--Sahil-M-Styling-Inhouse-27-07-202301copy-1copy.jpg?v=1713603292&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OscarGoldenMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1copy.jpg?v=1715323446&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443936",
        title:"Lennon Rosegold Plated Men's Chain",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:2099,
        size:["Small"],
        color:"Gold",
        rating:5.0,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/PIC0309.jpg?v=1714043436&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LenonMen_sNecklace.jpg?v=1714043436&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PIC0297...jpg?v=1712750825&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PIC0244-1.jpg?v=1714043436&width=1080"
        ]
    },
]


app.get('/allProducts',(req,res) => {
    res.json(allProducts)
})



// ------------------------------------------------ Bracelet Data -------------------------------------

const braceletData = [
    {
        _id : "626312001e398e410dd40701",
        title : "Enzo Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1999,
        size: ["Small","Medium"],
        color:"White",
        rating:4.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/EnzoMen_sBracelet1_-1-20-02-2024_3.jpg?v=1713722329&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EnzoMen_sBracelet_1_-2.jpg?v=1713722329&width=1080",
            "https://www.swashaa.com/cdn/shop/files/preview_images/4324d50401674f438838ccb6d4746d61.thumbnail.0000000000_620x.jpg?v=1688809414",
        ]
    },
    {
        _id : "626312001e398e410dd40702",
        title : "Ian Men's Kada",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1599,
        size: ["Small","Large"],
        color:"Gold",
        rating:4.2, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/IanGold01.jpg?v=1713615118&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IanBlack01_4.jpg?v=1715253650&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IPV02681.jpg?v=1715253684&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IPV02540.jpg?v=1715253684&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40703",
        title : "Rocky Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1299,
        size: ["Small","Medium"],
        color:"Black",
        rating:4.5, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/RockyMen_sLeatherBracelet-26-02-2024copy-_5.jpg?v=1711713642&width=1080",
            "https://www.swashaa.com/cdn/shop/files/RockyMen_sLeatherBracelet-26-02-2024copy-_4.jpg?v=1713610765&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DSC00265-1_2.jpg?v=1713610781&width=1080",
            "https://www.swashaa.com/cdn/shop/files/RockyMen_sLeatherBracelet04-07-2023copy-_2.jpg?v=1713610831&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40704",
        title : "Hector Men's Kada",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 999,
        size: ["Medium","Large"],
        color:"Gold",
        rating:3.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/HectorMen_sBracelet-Zebin-M-Styling-inhouse-15-01-2024__2.jpg?v=1716464138&width=1080",
            "https://www.swashaa.com/cdn/shop/files/HectorMen_sKada-17.jpg?v=1716464138&width=1080",
            "https://www.swashaa.com/cdn/shop/files/HectorMen_sBracelet-Zebin-M-Styling-inhouse-15-01-2024.jpg?v=1716464138&width=1080",
            "https://www.swashaa.com/cdn/shop/files/HectorMen_sBracelet-Standalone-Styling-inhouse-15-01-2024__2.jpg?v=1716464138&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40705",
        title : "Sol Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1299,
        size: ["Small","Large"],
        color:"Black",
        rating:4.0, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/SolMen_sLeatherBracelet_Instapost_-Chaitanya-M-Styling-Inhouse-16-10-2023.jpg?v=1713611284&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SolMen_sLeatherBracelet-Standalone-Styling-Inhouse-13-10-2023_2.jpg?v=1713611284&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SolMen_sLeatherBracelet-Standalone-Styling-outdor-12-10-2023.jpg?v=1713611319&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40706",
        title : "Kseas Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1299,
        size: ["Large"],
        color:"Blue",
        rating:4.3, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/KseasMen_sLeatherBracelet-Siddharth-M-Styling-Inhouse-13-01-2024_3.jpg?v=1711965387&width=1080",
            "https://www.swashaa.com/cdn/shop/files/KseasMen_sLeatherBracelet-Standalone-Styling-Inhouse-10-01-2024_2.jpg?v=1711713388&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PIC2388.jpg?v=1711965387&width=1080",
            "https://www.swashaa.com/cdn/shop/files/KseasMen_sLeatherBracelet-Siddharth-M-Styling-Inhouse-13-01-2024_4.jpg?v=1711713388&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40707",
        title : "Otis White Men's Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 899,
        size: ["Medium","Large"],
        color:"White",
        rating:4.2, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/OtisMen_sBracelet_Silver_-Zebin-M-Styling-Inhouse-01-12-2023_3.jpg?v=1713528157&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OtisMen_sBracelet_Silver_-Standalone-Styling-Inhouse-02-12-2023_2.jpg?v=1713528157&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OtisMen_sBracelet_Silver_-Standalone-Styling-Inhouse-02-12-2023.jpg?v=1713528156&width=1080",
        ]
    },
    {
        _id : "626312001e398e410dd40708",
        title : "Griffin Men's Leather Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 899,
        size: ["Small","Medium"],
        color:"White",
        rating:3.6, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/PIC2640d.jpg?v=1714128642&width=1080",
            "https://www.swashaa.com/cdn/shop/files/GriffinMen_sLeatherBracelet.jpg?v=1714128364&width=1080",
            "https://www.swashaa.com/cdn/shop/files/GriffinMen_sLeatherBracelet-Standalone-Styling-Inhouse-28-03-2024_5.jpg?v=1714128642&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40709",
        title : "Infinity Forge Men's Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 1299,
        size: ["Small","Medium","Large"],
        color:"White",
        rating:4.0, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/InfinityForgeMen_sBracelet_PIC2613.jpg?v=1716466941&width=1080",
            "https://www.swashaa.com/cdn/shop/files/InfinityForgeMen_sBracelet_3.jpg?v=1716466941&width=1080",
            "https://www.swashaa.com/cdn/shop/files/InfinityForgeMen_sBracelet_3.jpg?v=1716466941&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40710",
        title : "Leoben Men's Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 899,
        size: ["Medium"],
        color:"Blue",
        rating:3.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/16.jpg?v=1716549040&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LeobenMen_sBracelet_5.jpg?v=1716549040&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LeobenMen_sBracelet_4.jpg?v=1716549040&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LeobenMen_sBracelet-Standalone-Styling-Inhouse-26-03-2024_2.jpg?v=1714133034&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40711",
        title : "Regina Diamond Rosegold Plated Men's Bracelet",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 699,
        size: ["Small","Medium","Large"],
        color:"White",
        rating:3.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/products/MensBracelet10.jpg?v=1675929604&width=1080",
            "https://www.swashaa.com/cdn/shop/products/IPV09742.jpg?v=1713528247&width=1080",
            "https://www.swashaa.com/cdn/shop/files/REGINADIAMONDBRACELET02.jpg?v=1688036758&width=1080",
            "https://www.swashaa.com/cdn/shop/products/MensBracelet12.jpg?v=1713528247&width=1080"
        ]
    },
    {
        _id : "626312001e398e410dd40712",
        title : "Juan Men's Kada",
        gender: "Men",
        description : "Boy's Bracelet",
        category: 'Bracelet',
        price : 2999,
        size: ["Small"],
        color:"Gold",
        rating:4.9, 
        img : [
            "https://www.swashaa.com/cdn/shop/files/JuanMen_sBracelet-Zebin-M-Styling-inhouse-15-01-2024_3.jpg?v=1715928117&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JuanMen_sBracelet-Standalone-Styling-inhouse-15-01-2024_2.jpg?v=1713615727&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JUANMEN_SKADA.jpg?v=1715928117&width=1080",
        ]
    }
]


app.get('/bracelet',(req,res) => {
    res.json(braceletData)
})


// ------------------------------------------------ Earing Data ----------------------------------------------------------



const earingData = [
    {
        _id:"62638800789463d436443913",
        title:"Samuel Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:299,
        size:["Medium","Large"],
        color:"White",
        rating:4.4,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/SamuelMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604718&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SamuelMen_sEarrings-Standalone-Styling-Inhouse-18-01-2024.jpg?v=1713604718&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SamuelEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604718&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SamuelMen_sEarrings-Standalone-Styling-Inhouse-08-11-2023.jpg?v=1713604718&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443914",
        title:"Emo Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:499,
        size:["Small","Medium"],
        color:"White",
        rating:4.5,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/PIC0488.jpg?v=1713604430&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EmoMen_sEarrings-Standalone-Styling-inhouse-28-11-2023_2.jpg?v=1713604307&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EmoMen_sEarrings-Standalone-Styling-inhouse-28-11-2023.jpg?v=1713604307&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443915",
        title:"Thomas Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:499,
        size:["Small","Medium","Large"],
        color:"White",
        rating:4.4,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/ThomasMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713605406&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ThomasMen_sEarrings-Standalone-Styling-Inhouse-18-01-2024.jpg?v=1713605406&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ThomasMen_sEarrings-Standalone-Styling-Inhouse-08-11-2023.jpg?v=1713605406&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443916",
        title:"Joshua Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:999,
        size:["Small","Medium","Large"],
        color:"White",
        rating:4.8,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/JoshuaMen_sEarrings-27.jpg?v=1716464293&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JoshuaMen_sEarrings-Standalone-Styling-Inhouse-08-11-2023_9065a8dd-9f8b-474b-bda6-7bf349e77762.jpg?v=1716464293&width=1080",
            "https://www.swashaa.com/cdn/shop/files/JoshuaMen_sEarrings-Standalone-Styling-Inhouse-28-10-2023_2.jpg?v=1716464293&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443917",
        title:"Steven Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:899,
        size:["Small","Large"],
        color:"White",
        rating:4.9,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/StevenMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604940&width=1080",
            "https://www.swashaa.com/cdn/shop/files/StevenMen_sEarrings-Standalone-Styling-Inhouse-28-10-2023_2.jpg?v=1713604940&width=1080",
            "https://www.swashaa.com/cdn/shop/files/StevenMen_sEarrings-Standalone-Styling-Inhouse-31-10-2023_2.jpg?v=1713604930&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443918",
        title:"Para Flash Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:699,
        size:["Small","Medium","Large"],
        color:"White",
        rating:4.7,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/ParaFlashME.jpg?v=1715927668&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ParaFlashMen_sEarrings-Standalone-Styling-inhouse-28-11-2023.jpg?v=1713604580&width=1080",
            "https://www.swashaa.com/cdn/shop/files/ParaFlashMen_sEarrings-Standalone-Styling-inhouse-28-11-2023_2_b79217cd-2ebb-4073-bb72-62133d501fe9.jpg?v=1715927668&width=1080",
        ]
    },
    {
        _id:"62638800789463d436443919",
        title:"Timoty Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:699,
        size:["Small","Medium"],
        color:"White",
        rating:4.1,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/TimotyMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1699610349&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443920",
        title:"Solaris 18K Gold Plated Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:899,
        size:["Medium"],
        color:"Gold",
        rating:4.3,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/SolarisME.jpg?v=1715927595&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SolarisMen_sEarrings-Standalone-Styling-inhouse-28-11-2023.jpg?v=1713604800&width=1080",
            "https://www.swashaa.com/cdn/shop/files/SolarisMen_sEarrings-Standalone-Styling-inhouse-28-11-2023_2_4e2adbed-8807-40e8-8626-7e2bb9971681.jpg?v=1715927595&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443921",
        title:"Brain Men's Earrings",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:499,
        size:["Medium","Large"],
        color:"White",
        rating:3.5,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/BrainMen_sEarrings-Chaitanya-M-Styling-Outdoor-08-11-2023.jpg?v=1713604063&width=1080",
            "https://www.swashaa.com/cdn/shop/files/BrainMen_sEarrings-Standalone-Styling-Inhouse-18-01-2024.jpg?v=1713604063&width=1080",
            "https://www.swashaa.com/cdn/shop/files/BrainMen_sEarrings-Standalone-Styling-Inhouse-31-10-2023_2.jpg?v=1713604113&width=1080"
        ]
    },
    {
        _id:"62638800789463d436443922",
        title:"INsideout Silver Hoop Earrings For Men (1 PC ONLY)",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:1299,
        size:["Medium"],
        color:"White",
        rating:4.2,
        img:
        [
            "https://zevaramaze.com/cdn/shop/products/Untitled-7_500x500@2x.jpg?v=1664787601",
            "https://zevaramaze.com/cdn/shop/products/wf1_a4ea4bec-fcbe-4548-b844-10e0c6643b8e_500x500@2x.jpg?v=1664787601",
            "https://zevaramaze.com/cdn/shop/products/w2view_500x500@2x.jpg?v=1664787601",
            "https://zevaramaze.com/cdn/shop/products/ys1_ea31cf74-9d2f-4169-a02e-1629ca6d2e4f_500x500@2x.jpg?v=1664787601"
        ]
    },
    {
        _id:"62638800789463d436443923",
        title:"Round Crown Silver Stud for Men",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:899,
        size:["Small"],
        color:"White",
        rating:4.3,
        img:
        [
            "https://zevaramaze.com/cdn/shop/products/Untitled-23_500x500@2x.jpg?v=1694433851",
            "https://zevaramaze.com/cdn/shop/products/567mmcrwonroundfs1_500x500@2x.jpg?v=1663924301",
            "https://zevaramaze.com/cdn/shop/products/567mmcrwonroundyf1_500x500@2x.jpg?v=1664788024",
            "https://zevaramaze.com/cdn/shop/products/5-6-7-mmrounscrowns1_500x500@2x.jpg?v=1664788024"
        ]
    },
    {
        _id:"62638800789463d436443924",
        title:"Pluto Silver Hoop Earrings For Men (1 PC ONLY)",
        gender : "Men",
        description:"Boy's Earing",
        category : "Earing",
        price:1199,
        size:["Large"],
        color:"White",
        rating:4.8,
        img:
        [
            "https://zevaramaze.com/cdn/shop/products/Untitled-33_500x500@2x.jpg?v=1664788797",
            "https://zevaramaze.com/cdn/shop/products/6mm_5mmtrianglefront_500x500@2x.jpg?v=1664788797",
            "https://zevaramaze.com/cdn/shop/products/6mmtriangleys_500x500@2x.jpg?v=1664788797",
            "https://zevaramaze.com/cdn/shop/products/6mm_5mmtriangleyf_500x500@2x.jpg?v=1664788797"
        ]
    },
    
]

app.get('/earing',(req,res) => {
    res.json(earingData)
})



// ------------------------------------------------ Chain Data ------------------------------------------------------------


const ChainData = [
    {
        _id:"6263884a789463d436443925",
        title:"Chain Air Force",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1299,
        size:["Small","Medium","Large"],
        color:"Black",
        rating:4.2,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023_2.jpg?v=1713600137&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023_3.jpg?v=1713600137&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-PIC0033.jpg?v=1715947096&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023.jpg?v=1715947096&width=1080" 
        ]
    },
    {
        _id:"6263884a789463d436443926",
        title:"Chain 1 '07 SE",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:995,
        size:["Small","Large"],
        color:"White",
        rating:3.8,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-20.jpg?v=1716462048&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023.jpg?v=1716462048&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023_2.jpg?v=1716462048&width=1080",
            "https://www.swashaa.com/cdn/shop/files/IvoMen_sChainPendant-21.jpg?v=1716462048&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443927",
        title:"Ivo Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1299,
        size:["Small","Medium"],
        color:"White",
        rating:4.2,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSliverMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1713597074&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSilverMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1copy.jpg?v=1715321615&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSilverMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1copy.jpg?v=1713597074&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafSliverMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-202301copy-1copy.jpg?v=1713597108&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443928",
        title:"Dope Leaf Silver Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:995,
        size:["Small","Medium","Large"],
        color:"Gold",
        rating:4.1,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/Jihaan18KGoldPlatedChain_PIC0352copy.jpg?v=1716461125&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023_3.jpg?v=1713600137&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-PIC0033.jpg?v=1715947096&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LucaMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023.jpg?v=1715947096&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443929",
        title:"Pierre Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:995,
        size:["Medium"],
        color:"White",
        rating:4.1,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/PierreMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023.jpg?v=1715323713&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PierreMen_sChainPendant-Standalone-Styling-Inhouse-08-11-2023_2.jpg?v=1715337077&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PierreMen_sChainPendant-Chaitanya-m-styling-inhouse-08-11-2023_2.jpg?v=1715337077&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PierreMen_sChainPendant-Standalone-Styling-Inhouse-08-11-20231.jpg?v=1715323713&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443930",
        title:"Etash 18K Gold Plated Men's Chain Pendant ",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1599,
        size:["Medium","Large"],
        color:"White",
        rating:4.9,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/CopyofEtashSilverMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1715337229&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EtashGoldenMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1copy.jpg?v=1715337229&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EtashGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1715337229&width=1080",
            "https://www.swashaa.com/cdn/shop/files/EtashGoldenMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1copy.jpg?v=1715337229&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443931",
        title:"Amur 18K Gold Plated Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1499,
        size:["Small","Medium"],
        color:"Gold",
        rating:4.9,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/AmurGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-26-07-202301copy.jpg?v=1713593187&width=1080",
            "https://www.swashaa.com/cdn/shop/files/AmurGoldenMensChainPendent-Standalone-styling-inhouse-09-01-2024copy.jpg?v=1713593187&width=1080",
            "https://www.swashaa.com/cdn/shop/files/AmurGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-28-07-202301copy-1.jpg?v=1713593187&width=1080",
            "https://www.swashaa.com/cdn/shop/files/AmurGoldenMen_sChainPendent-Standalone-Styling-Inhouse-02-09-2023-copy.jpg?v=1713593276&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443932",
        title:"Dope Leaf 18K Gold Plated Men's Chain Pendant ",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:899,
        size:["Medium","Large"],
        color:"Gold",
        rating:4.7,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/DopeLeafGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-26-07-2023copy-1copy.jpg?v=1713596294&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafGoldenMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1copy.jpg?v=1715321576&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafGoldenMen_sChainPendent-Sahil-M-Styling-Inhouse-26-07-202301copy-1copy.jpg?v=1713596348&width=1080",
            "https://www.swashaa.com/cdn/shop/files/DopeLeafGoldenMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1copy.jpg?v=1713596375&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443933",
        title:"Tavish Silver Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:985,
        size:["Small","Medium","Large"],
        color:"White",
        rating:4.8,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/TavishSilverMen_sChainPendent-Sahil-M-Styling-Inhouse-31-07-2023copy-1.jpg?v=1715323876&width=1080",
            "https://www.swashaa.com/cdn/shop/files/TavishSilverMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1.jpg?v=1715337111&width=1080",
            "https://www.swashaa.com/cdn/shop/files/TavishSilverMen_sChainPendent-Sahil-M-Styling-Inhouse-26-07-2023copy-1.jpg?v=1715337111&width=1080",
            "https://www.swashaa.com/cdn/shop/files/TavishSilverMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1.jpg?v=1715323876&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443934",
        title:"Noble 18K Gold Plated Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:899,
        size:["Small","Medium","Large"],
        color:"Gold",
        rating:4.1,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/PIC0163.jpg?v=1714028036&width=1080",
            "https://www.swashaa.com/cdn/shop/files/NobleMen_sChainPendant-Standalone-Styling-Inhouse-05-12-2023.jpg?v=1713602844&width=1080",
            "https://www.swashaa.com/cdn/shop/files/NobleMen_sChainPendant-Standalone-Styling-inhouse-13-01-2024_2.jpg?v=1714028036&width=1080",
            "https://www.swashaa.com/cdn/shop/files/NobleMen_sChainPendant-Zebin-M-Styling-inhouse-13-01-2024.jpg?v=1714028036&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443935",
        title:"Oscar 18K Gold Plated Men's Chain Pendant",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:1299,
        size:["Large"],
        color:"White",
        rating:3.4,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/OscarGoldenMen_sChainPendent--Sahil-M-Styling-Inhouse-27-07-2023copy-1copy.jpg?v=1713603269&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OscarGoldenMen_sChainPendent-Standalone-Styling-Inhouse-28-07-2023copy-1copy.jpg?v=1713603280&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OscarGoldenMen_sChainPendent--Sahil-M-Styling-Inhouse-27-07-202301copy-1copy.jpg?v=1713603292&width=1080",
            "https://www.swashaa.com/cdn/shop/files/OscarGoldenMen_sChainPendent-Standalone-Styling-Inhouse-29-07-2023copy-1copy.jpg?v=1715323446&width=1080"
        ]
    },
    {
        _id:"6263884a789463d436443936",
        title:"Lennon Rosegold Plated Men's Chain",
        gender : "Men",
        description:"Boy's Chain and Pendants",
        category : "Chain",
        price:2099,
        size:["Small"],
        color:"Gold",
        rating:5.0,
        img:
        [
            "https://www.swashaa.com/cdn/shop/files/PIC0309.jpg?v=1714043436&width=1080",
            "https://www.swashaa.com/cdn/shop/files/LenonMen_sNecklace.jpg?v=1714043436&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PIC0297...jpg?v=1712750825&width=1080",
            "https://www.swashaa.com/cdn/shop/files/PIC0244-1.jpg?v=1714043436&width=1080"
        ]
    },
]

app.get('/chain',(req,res) => {
    res.json(ChainData)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})