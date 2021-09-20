// export class User {
//     // es6 no private property
//     name
//     constructor(name) {
//       // invokes the setter
//       this.#name = name;
//     }
  
//     get name() {
//       return this.#name;
//     }
  
//     set name(value) {
//       if (value.length < 4) {
//         alert("Name is too short.");
//         return;
//       }
//       this.#name = value;
//     }
//     // computed name property
//     ['say' + 'Hi']() {
        
//         return `Hello, ${this.name}!`
//       }  
//   }



  class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    
    run(speed) {
      this.speed = speed;
      return `${this.name} runs with speed ${this.speed}.`
    }
  
    stop() {
      this.speed = 0;
      return `${this.name} stands still.`;
    }

      // computed name property
     ['say' + 'Hi']() {
        
        return `Hello, ${this.name}!`
      }  
  
  }

export  class Rabbit extends Animal {
    // constructor overriding
    constructor(name, earLength) {
      super(name);
      this.earLength = earLength;
    }
  
    hide() {
        return `${this.name} hides!`
      }
    // method overriding
    stop() {
        // super.stop(); // call parent stop
        // this.hide(); // and then hide
        return super.stop() +"/"+ this.hide()
    }
   
  }


  