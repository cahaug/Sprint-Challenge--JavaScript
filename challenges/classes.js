// 1. Copy and paste your prototype in here and refactor into class syntax.

    class CuboidMaker {
        constructor(props){
            this.length=props.length;
            this.width=props.width;
            this.height=props.height;
        }
        volume(cuboid){
            return this.length*this.width*this.height;

        }
        surfaceArea(cuboid){
            return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        }
    }

    const cuboid = new CuboidMaker ({
        length:4,
        width:5,
        height:5
    })
// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log("===== Classes.js Cuboid Calculations =====")
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(props){
        super(props);
        this.sideLength=props.sideLength;
    }
    volume(cube){
        return this.sideLength*this.sideLength*this.sideLength;
    }
    surfaceArea(cube){
        return this.sideLength*this.sideLength*6;
    }
}

const cube = new CubeMaker({
    sideLength:8
})

console.log("===== Classes.js Cube Calculations (Stretch) =====")
console.log(`The Cube with sideLength of 8 has a Volume of: ${cube.volume()}`); 
console.log(`The Cube with sideLength of 8 has a Surface Area of: ${cube.surfaceArea()}`); 
