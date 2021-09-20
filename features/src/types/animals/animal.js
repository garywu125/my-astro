export default class Animal {
    name;
    constructor(theName) {
      this.name = theName;
    }
    move(distanceInMeters = 0) {
      return `${this.name} moved ${distanceInMeters}m.`;
    }
  }