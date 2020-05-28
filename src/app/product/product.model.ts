

export class ProductItem {
  public id: number;
  public name: string;
  public price: number;
  public imageUrl: string;
  public desc: string;
  public storage: number;


  constructor(id: number, name: string, price: number, imageUrl: string, desc :string ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.desc = desc;
  }
}
