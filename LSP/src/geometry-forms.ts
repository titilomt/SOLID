export abstract class Shape {
  abstract draw(): void;
}

export class Circle extends Shape {
  draw() {
    console.log("Desenhando um círculo");
  }
}

export class Square extends Shape {
  draw() {
    console.log("Desenhando um quadrado");
  }
}

export class Text {
  render() {
    console.log("Renderizando texto");
  }
}
