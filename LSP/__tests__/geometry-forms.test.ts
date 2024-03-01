import { Circle, Shape, Square, Text } from "../src/geometry-forms";

describe("Shape rendering system", () => {
  test("it should draw all shapes", () => {
    const shapes: Shape[] = [new Circle(), new Square(), new Text()]; // Erro: Text não é uma instância de Shape
    shapes.forEach((shape) => shape.draw()); // Erro: draw não existe em Text
  });
});
