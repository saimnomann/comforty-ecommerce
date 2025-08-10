export default{
    name:"products",
    title:"Products",
    type:"document",
    fields:[{
        name:"title",
        title:"Product Title",
        type:"string",

    },{
        name:"price",
        title:"Product Price",
        type:"number",
    },{
        name:"priceWithoutDiscount",
        title:"Price Without Discount",
        type:"number",

    },
    {
        name:"description",
        title:"Product Description",
        type:"string",
    },{
        name:"image",
        title:"Product Image",
        type:"image",
    },{
        name:"badge",
        title:"Badge",
        type:"string",
    },{
        name:"inventory",
        title:"Inventory Management",
        type:"number",
    },{
        name:"category",
        title:"Product Category",
        type:"reference",
        to:[{type:"categories"}]
    },{
        name:"tags",
        title:"Tags",
        type:"array",
        of:[{type:"string"}],
        options:{
            list:[
                {title:"Featured",value:"Featured"},
                {title: "Follow products and discounts on Instagram",
            value: "instagram"},
            {title:"Gallery",value:"gallery"}
            ]
        }
    }]
}
