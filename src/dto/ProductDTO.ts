import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class ProductDTO {
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  brand: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  category: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  discountPercentage: number;

  @Expose()
  images: Array<string>;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  rating: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  title: string;

  constructor(
    id: number,
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    images: Array<string>,
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string
  ) {
    this.id = id;
    this.brand = brand;
    this.category = category;
    this.description = description;
    this.discountPercentage = discountPercentage;
    this.images = images;
    this.price = price;
    this.rating = rating;
    this.stock = stock;
    this.thumbnail = thumbnail;
    this.title = title;
  }
}
