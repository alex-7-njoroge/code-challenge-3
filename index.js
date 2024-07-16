const movieContainer = document.getElementsByClassName("series")
console.log(movieContainer)

let  urlEndpoint="http://localhost:8800/films"
const fetchMovie=async()=>{
    try{
 let response = await fetch("http://localhost:8800/films")
 let data = await response.json()
 displayMovie(data)   
}
    catch(error){

    }
}
fetchMovie()
function displayMovie(moviedata){
    movieContainer[0].innerHTML= moviedata.map((item)=>{
        return `<img src="${item.poster}" alt="">
    <h1>${item.title}</h1>
     <p>${item.description}</p>
     <ul>
      <li>showtime;${item.showtime}</li>
      <li>runtime;${item.runtime}</li>
      <li>capacity;${item.capacity}</li>
     <li>ticketsold;${item.tickets_sold}</li>
  
     </ul>
     <button onclick="purchaseTicket(${item.id},${item.tickets_sold})">PURCHASETICKET</button>`

    })
}
async function purchaseTicket(id,tickets){
    let ticketsNew = {
        tickets_sold:tickets+1}
    let response=await fetch(`${urlEndpoint}/${id}`,{method: "PATCH", body:JSON.stringify(ticketsNew)})
    let data=await response.json()
    
}

