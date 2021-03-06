import {
  Pizza
}
from './pizza';
import {
  htmlCreator
}
from './html-creator.service';
import {
  Masas
}
from './masas';

import {
  dataMasas
} from './masa-types.data';

export class Pizzeria {
  constructor() {
    this.html = htmlCreator();
    this.pizza = new Pizza();
    this.masas = new Masas(dataMasas);
    this.pizzeriaElement = this.initPizzeria();
  }
  initPizzeria() {
    const pizzeria = this.html.create({ // contienen a todos los demas elementos
      type: 'div',
      className: 'pizzeria'
    });
    const masas = this.masas.masasElement.childNodes;

    masas.forEach(this.setMasaPizza.bind(this));
    Object.assign(this.pizza.pizzaElement.style, {
      backgroundImage: `url(${this.masas.masas[0].image})`,
    });
    this.pizza.setMassPrice(this.masas.masas[0].price);
    // unimos elementos dentro de pizzeria
    pizzeria.appendChild(this.pizza.pizzaElement);
    pizzeria.appendChild(this.pizza.priceElement);
    pizzeria.appendChild(this.pizza.ingredientsElement);
    pizzeria.appendChild(this.masas.masasElement);
    return pizzeria;
  }

  setMasaPizza(masa) {
    const _self = this;
    masa.addEventListener('click', (event, newww) => {
      console.log(newww);
      const target = event.target;
      _self.pizza.pizzaElement.style.backgroundImage = target.style.backgroundImage
      _self.pizza.setMassPrice(target.value);
    });
  }
}