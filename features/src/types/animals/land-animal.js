  
  import Animal from './animal.js' 
  export class Snake extends Animal {
    constructor(name) {
      super(name);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      return super.move(distanceInMeters);
    }
  }
   
  export class Horse extends Animal {
    constructor(name) {
      super(name);
    }
    move(distanceInMeters = 45)  {
      console.log("Galloping...");
      return super.move(distanceInMeters);
    }
  }


