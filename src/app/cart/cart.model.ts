

export class CartItem {
  public id: number;
  public name: string;
  public price: number;
  public total: number;


  constructor(id: number, name: string,  price: number) {
  
    this.id = id;
    this.name = name;
  
    this.price = price;
    this.total =  this.price;
  }
}
