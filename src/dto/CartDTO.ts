import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CartDTO {
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  discountPercentage: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  total: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  discountedPrice: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  title: string;

  constructor(
    id: number,
    discountPercentage: number,
    price: number,
    total: number,
    quantity: number,
    discountedPrice: number,
    title: string
  ) {
    this.id = id;
    this.discountPercentage = discountPercentage;
    this.price = price;
    this.total = total;
    this.quantity = quantity;
    this.discountedPrice = discountedPrice;
    this.title = title;
  }
}
