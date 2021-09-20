/***
 *  export class for fetch external source
 *  
 * 
 */
export default  class FetchGameApi{
    constructor(){
    }
  
    static getGamesFetch(){
      return  fetch("http://localhost:3000/json/employee.json")
      .then( response => response.json() )
      .catch( error => console.log(error.message) )      
    };
  
    static postGamesFetch(dataObject){
      fetch("http://localhost:3000/json/games.json", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
         body: JSON.stringify(dataObject)
      .then( resp => resp.json())    
    }
    )};
}