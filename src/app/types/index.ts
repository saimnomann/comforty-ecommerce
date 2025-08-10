export interface IProduct{
_id:string,
  title:string,
  description:string,
  badge:string,
  price:number,
  category:{
    title:string,
  }
  price_id:string,
  tags:string[],
  inventory:number,
  imageUrl:string,
  }
export interface ICategory{
  _id:number,
  title:string,
  products_Quantity:number
    imageUrl:string,
}


export interface IHeroSection{
title:string,
description:string,
buttonText:string,
buttonLink:string,
img:{
  asset:{
    url:string
  }
}
}
export interface IProps{

        params:{slug:string}
  
}
export interface cartItem{
    id:number,
    prod_id:string
    price:number,
    title?:string,
    imageUrl?:string,
    quantity:number,
    singlePrice:number,
    user_id:string,
    price_id?:string
}