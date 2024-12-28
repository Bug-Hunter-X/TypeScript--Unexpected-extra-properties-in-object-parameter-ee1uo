interface Coordinate {
  x: number;
  y: number;
}

function printCoord(pt: Coordinate) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

//Example with optional properties
interface CoordinateOptional {
  x: number;
  y: number;
  z?: number;
}

function printCoordOptional(pt: CoordinateOptional) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
  if(pt.z){
    console.log("The coordinate's z value is " + pt.z);
  }
}

printCoordOptional({ x: 3, y: 7, z: 10 });
printCoordOptional({ x: 3, y: 7 });