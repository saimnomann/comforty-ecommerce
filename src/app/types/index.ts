export interface IProduct{
_id:string,
  title:string,
  description:string,
  badge:string,
  price:number,
  category:{
    title:string,
  }
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
params:{
        slug:string
    }
}
