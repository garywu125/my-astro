/***
 *  
 *   use <fetch> remote URL in exported async function 
 *  - export async function/ const async function expression for fetch external source
 * 
 *   use <import json> statement to fetch local jason  located in /public/json ====
 * 
 */



export { fetched_metadata ,fetched_employee}


// async function fetched_metadata(){ 
//   return  fetch('http://localhost:3000/metadata.json').then(
// 		response => response.json()
// 		)
// }


// async function fetched_employee(){ 
// 	return  fetch('http://localhost:3000/json/employee.json').then(
// 		  response => response.json()
// 		  )
//   }

// localhost : 3000 ?? 環境變數設定
  const fetched_metadata = async function() {
	return fetch('http://localhost:3000/metadata.json').then(
		response => response.json()
	)
  }

const fetched_employee = async function() {
	return fetch('http://localhost:3000/json/employee.json').then(
	response => response.json()
	)
}