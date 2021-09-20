export class User {
    //  private property work 
    #name:string
  
    constructor(name:string) {
      // invokes the setter
      this.#name = name;
    }
  
    get name():string {
      return this.#name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this.#name = value;
    }
    // computed name property
    ['say' + 'Hi']():string {
        
        return `Hello, ${this.name}!`
      }   
    // private methid not work
    private getName():string {
      return this.#name
    }  
  }