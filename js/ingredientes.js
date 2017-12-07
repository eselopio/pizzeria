import { Ingrediente } from './ingrediente';
export class Ingredientes {
  constructor(ingredientes) {
    this.ingredientes = ingredientes;
    this.selected = [];
    this.ingredientesElement = document.createElement('div');
    this.ingredientesElement.className = 'ingredientes';
    this.ingredientesElement = this.init();
  }

  init() {
    let element = this.ingredientesElement;
    this.ingredientes.map(ingrediente => {
      const newIngrediente = new Ingrediente(ingrediente);
      newIngrediente.ingredienteElement.addEventListener('click', () => {
        const index = this.selected.indexOf(newIngrediente);
        if (index < 0) {
          this.selected.push(newIngrediente);
        } else {
          this.selected.splice(index, 1);
        }
      });
      element.appendChild(newIngrediente.ingredienteElement);
    });

    return element;
  }
}