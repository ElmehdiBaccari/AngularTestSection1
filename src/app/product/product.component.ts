import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItem } from './product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productItem: ProductItem[] = [
    new ProductItem(1, 'Kokorowatari', 444, 'https://i.imgur.com/POR1PVd.jpg', `
    Demon sword that harms and effectively kills oddities.
    The sword belonged to a powerful vampire named Kiss-Shot Acerola-Orion Heart-Under-Blade.`),
    new ProductItem(2,'Star Platinum', 555, 'https://i.imgur.com/cdJ6GDW.jpg',`Star Platinum is the Stand of Kujo Jotaro.
    It has long, flowing hair, and resembling a tall, well-built man.
    It is silent, except when it throws punches, during which it cries "ORAORAORA" loudly and repeatedly.`),
    new ProductItem(3,'The World', 500, 'https://i.imgur.com/3KBm7hK.jpg', `The World is the Stand of DIO. The World shows no particular personality,
    although it occasionally smiles as it pummels others,
    hinting that it may be a rather cruel entity that takes pleasure in causing pain.
    Its Stand cry, seemingly communicated by DIO, is Muda Muda Muda!`),
    new ProductItem(4,'3D Maneuver Gear', 200, 'https://i.imgur.com/9E0Agn2.jpg',`The vertical maneuvering equipment is a set of equipment developed by humans allowing for great mobility.
    The equipment enables the user to fight in a 3D space as opposed to a 2D one.
    The equipment itself takes the form of a body harness that encompasses much of the body below the neck.`),
    new ProductItem(5,'Excalibur', 300, 'https://i.imgur.com/nutN73L.jpg',`Excalibur: Sword of Promised Victory is the strongest and most majestic holy sword that symbolizes King Arthur.
    As that which can be called the physical actualization of her ideals and the symbol of her heroism,
    it is her greatest and most powerful Noble Phantasm.`),
    new ProductItem(6,'Dragon Slayer', 450, 'https://i.imgur.com/WPdYq5Z.jpg',`It was too big to be called a sword. Massive, thick, heavy, and far too rough.
    Indeed, it was a heap of raw iron.
    The Dragon Slayer is the massive sword Guts has wielded as his signature weapon since surviving the Eclipse.`),
  ]

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number,
    productDesc : string
  }>();

  constructor() { }

  ngOnInit() {
  }

  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
        productId: this.productItem[index].id,
        productName: this.productItem[index].name,
        productPrice: this.productItem[index].price,
        productDesc: this.productItem[index].desc
      });
}


}
