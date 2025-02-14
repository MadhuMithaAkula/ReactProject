import { configureStore, createSlice } from "@reduxjs/toolkit";
//create the slice
const productslice=createSlice
({
    name:'products',
    initialState:{ 
        veg:[{name:"Beans",price:80,image:"/Beans.png"},
            {name:"paneer",price:200,image:"/paneer.png "},
            {name:"Brinjal",price:50,image:"/brinjal.png "},
            {name:"potato",price:90,image:"/potato.png "},
            {name:"Tomato",price:80,image:"/tomato.png "},
            {name:"Brocoli",price:120,image:"/Broccoli.png"},
            {name:"Ladyfingers",price:60,image:"/Ladyfingers.png"},
            {name:"Cabbage",price:50,image:"/Cabbage.png"},
            {name:"Carrot",price:90,image:"/carrot.png"},
            {name:"Bootroot",price:95,image:"/beetroot.png"},
            {name:"Radish",price:30,image:"/radish.png"},
            {name:"Mushroom",price:105,image:"/mushroom.png"},
            {name:"Capsicum",price:72,image:"/capsicum.png"},
            {name:"Onion",price:52,image:"/onion.png"},
            {name:"Spinach",price:45,image:"/spinach.png"},
            {name:"Arugula",price:20,image:"/arugula.png"},
            {name:"curry leaves",price:15,image:"/curryleaves.png"},
            {name:"mint",price:30,image:"/mint.png"},
            ],
      nonveg:[{name:"Chiken",price:120,image:"/chicken.png"},
                {name:"Prawns",price:200,image:"/prawns.png"},
                {name:"Mutton",price:850,image:"/mutton.png"},
                {name:"Fish",price:990,image:"/fish.png"},
                {name:"Eggs",price:50,image:"/eggs.png"},
                {name:"beef",price:220,image:"/beef.png"},
                {name:"pork",price:350,image:"/pork.png"},
                {name:"lamb",price:450,image:"/lamb.png"},
                {name:"srimp",price:550,image:"/srimb.png"},
                {name:"crab",price:500,image:"/crab.png"},
                {name:"lobster",price:420,image:"/lobster.png"},
                {name:"duck",price:350,image:"/duck.png"},
                {name:"goose",price:340,image:"/goose.png"},
                {name:"quail",price:430,image:"/quail.png"},
                {name:"livers",price:170,image:"/livers.png"},
                {name:"legpices",price:390,image:"/legpices.png"},
                {name:"fishie",price:400,image:"/fishie.png"},
                {name:"Eggss",price:50,image:"/Eggss.png"},
               ],

      milk:[{name:"Vijaya",price:80,image:"/vijaya.png"},
                    {name:"Amul",price:90,image:"/amul.png"},
                    {name:"Jersey",price:70,image:"/jersey.png"},
                    {name:"Heritage",price:50,image:"/heritage.png"},
                    {name:"nandini",price:60,image:"/nandini.png"},
                    {name:"Dairy Farmers",price:30,image:"/dairyfarmers.png"},
                    {name:"Marigold",price:20,image:"/marigold.png"},
                    {name:"Milk",price:25,image:"/milk.png"},
                    {name:"Rufil",price:64,image:"/rufil.png "},
                    {name:"Mother Dairy",price:38,image:"/motherdairy.png"},
                    {name:"Cavins",price:45,image:"/cavins.png"},
                    {name:"Lakshya",price:56,image:"/lakshya.png"},
                    {name:"Lakeland",price:40,image:"/lakeland.png"},
                    {name:"Milma",price:42,image:"/milma.png"},
                    {name:"Amaravathi",price:55,image:"/amaravathi.png"},
                    {name:"Narural",price:33,image:"/Natural.png"},
                    {name:"a2",price:44,image:"/a2.png"},
                    {name:"momilk",price:20,image:"/mo milk.png"},
                ],

        Cakes:[{name:"vennela",price:250,image:"/venela.png"},
                    {name:"Redroses",price:500,image:"/redroses.png"},
                    {name:"Straberry",price:480,image:"/straberry.png"},
                    {name:"Chocolate",price:340,image:"/chocolate.png"},
                    {name:"Red Elagent",price:420,image:"/red elagent.png"},
                    {name:"Chocalate Roses",price:550,image:"/chocolate roses.png"},
                    {name:"Choco Cake",price:200,image:"/choco.png"},
                    {name:"Tap Cake",price:300,image:"/tapcake.png"},
                    {name:"Cake Make",price:180,image:"/cakemake.png"},
                    {name:"Britannia",price:150,image:"/britannia.png"},
                    {name:"Cake Crew ",price:190,image:"/cakecrew.png"},
                    {name:"Mild Red cake",price:230,image:"/mildred.png"},
                    {name:"Plum cake",price:450,image:"/plum cake.png"},
                    {name:"Pie cake",price:440,image:"/pie.png"},
                    {name:"vanilla",price:480,image:"/vanilla.png"},
                    {name:"Anmol",price:280,image:"/anmol.png"},
                    {name:"Chokote",price:120,image:"/chakote.png"},
                    {name:"Fruit cake",price:250,image:"/fruit.png"},
                ],

                Chocolates:[{name:"Kitkat",price:80,image:"/kitkat.png "},
                    {name:"Silk",price:180,image:"/silk.png"},
                    {name:"Phap",price:120,image:"/phab.png"},
                    {name:"Almond",price:60,image:"/almond.png"},
                    {name:"Snikers",price:80,image:"/snickers.png"},
                    {name:"Chocopie",price:30,image:"/chocopie.png"},
                    {name:"Galaxy",price:90,image:"/galaxy.png"},
                    {name:"DairyMilk",price:200,image:"/dairymilk.png"},
                    {name:"Kinder",price:40,image:"/kinder.png"},
                    {name:"Jelly",price:20,image:"/jelly bean.png"},
                    {name:"Prebiotic",price:50,image:"/prebiotic.png"},
                    {name:"Munch",price:20,image:"/munch.png"},
                    {name:"Perk",price:10,image:"/perk.png"},
                    {name:"KinderJoy",price:45,image:"/kinderjoy.png"},
                    {name:"Milkybar",price:20,image:"/milkybar.png"},
                    {name:"5Star",price:30,image:"/5star.png"},
                    {name:"Dark",price:200,image:"/dark.png"},
                    {name:"Oreo",price:220,image:"/oreo.png"},
                ],
                Snacks:[{name:"Moongdal",price:56,image:"/moogdal.png"},
                    {name:"Mamee",price:40,image:"/mamee.png"},
                    {name:"Kurkure",price:30,image:"/kurkure.png"},
                    {name:"Fried Busky",price:40,image:"/fried busky.png"},
                    {name:"Mixture",price:50,image:"/mixture.png"},
                    {name:"Masala Munch",price:20,image:"/masala munch.png"},
                    {name:"Lays",price:20,image:"/lays.png"},
                    {name:"Samosa",price:45,image:"/samosa.png"},
                    {name:"Chips",price:35,image:"/chips.png"},
                    {name:"Bhujia",price:55,image:"/bhujia.png"},
                    {name:"Snacks",price:39,image:"/snack.png"},
                    {name:"Buscuits",price:30,image:"/buscuits.png"},
                    {name:"Digestive",price:120,image:"/digestive.png"},
                    {name:"Bourbon",price:40,image:"/bourbon.png"},
                    {name:"Arnott",price:35,image:"/arnott's.png"},
                    {name:"Assorted",price:65,image:"/assorted.png"},
                    {name:"Parleg",price:45,image:"/parleg.png"},
                    {name:"Monaco",price:30,image:"/monaco.png"},
                ],
                Fruits:[{name:"Strawberry",price:100,image:"/strawberry.png"},
                    {name:"Apple",price:140,image:"/apple.png"},
                    {name:"Pomegranate",price:150,image:"/pomegranate.png"},
                    {name:"Grapes",price:50,image:"/grapes.png"},
                    {name:"Green Greaps",price:30,image:"/green greaps.png"},
                    {name:"Banana",price:20,image:"/banana.png"},
                    {name:"Grape Fruit",price:40,image:"/grape fruit.png"},
                    {name:"Orange",price:90,image:"/orange.png"},
                    {name:"Mango",price:200,image:"/mango.png"},
                    {name:"Guava",price:40,image:"/guava.png"},
                    {name:"Papaya",price:30,image:"/papaya.png"},
                    {name:"Jack Fruit",price:100,image:"/jackfruit.png"},
                    {name:"Lychee",price:50,image:"/lychee.png"},
                    {name:"Dutians",price:90,image:"/durians.png"},
                    {name:"Kiwi",price:120,image:"/kiwi.png"},
                    {name:"Dreagon",price:130,image:"/dragon.png"},
                    {name:"Star",price:80,image:"/star.png"},
                    {name:"Rambutan",price:70,image:"/rambutan.png"},
                    {name:"Macopa",price:60,image:"/macopa.png"},
                ]
                
    },
    reducers:{}
})
//create cart slice
const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:
    {
        addtocart:(state,action)=>
             {
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }

        },
        increment:(state,action)=>
            {
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
          },
          decrement:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item && item.quantity>1)
            {
                item.quantity-=1;
            }
            else
            {
            return state.filter(item=>item.name!==action.payload.name);
            }
          },
          remove:(state,action)=>
            {
            return state.filter(item=>item.name!==action.payload.name);
          },
        clearcart: () => []
    }
})
//create purchaseslice
const purchasedetailsSlice = createSlice({
    name: 'purchasedetails',
    initialState: [],
    reducers: {
        addpurchasedetails: (state, action) => {
            state.push(action.payload);
        }
    }
});
const authSlice = createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:localStorage.getItem("username")?true:false,
        user:localStorage.getItem("username")
    },
    reducers:{
        login:(state,action) =>
            {
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username",action.payload);
            },
        logout:(state)=>
        {
            state.isAuthenticated=false;
            state.user=" ";
            localStorage.removeItem("username");
        },
    },
});

//configure the productslice & cartslice & purchasedetails
const Store = configureStore({
    reducer:{products:productslice.reducer,
        cart:cartSlice.reducer,
        purchasedetails: purchasedetailsSlice.reducer,
        auth:authSlice.reducer

    },
    
})
export default Store;
export const{addtocart,increment,decrement,remove,clearcart}=cartSlice.actions;
export const { addpurchasedetails } = purchasedetailsSlice.actions; 
export const{login,logout}=authSlice.actions;
9948058590