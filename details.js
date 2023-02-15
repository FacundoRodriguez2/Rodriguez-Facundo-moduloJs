import {estimateAsistence} from './module/functions.js'


const eventInfo = await fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res=>res.json())
    .catch(err=>console.log(err));
const main = document.getElementById("maindetails")
const params = new URLSearchParams(location.search)
const id = params.get( "id" )
const details= eventInfo.events.find(card=>card._id==id)
const name=params.get("name")
const aux = details.name.toUpperCase()
document.title=`${aux}'s details`;






main.innerHTML += `


<div class="card mb-1" id="detailsCard">
  <div class="row g-0">
    <div class="col-md-4" id="imagecontainer">
      <img src="${details.image}" class="img-fluid rounded-start" alt="${details.name}" id="imgdetails">
    </div>
    <div class="col-md-8">
      <div class="card-body" id="detailstext">
        <h3 class="card-title">${details.name}</h5>
        <p class="card-text"><strong>date:</strong>${details.date}</p>
        <p class="card-text"><strong>description:</strong>${details.description}</p>
        <p class="card-text"><strong>category:</strong>${details.category}</p>
        <p class="card-text"><strong>place:</strong>${details.place}</p>
        <p class="card-text"><strong>capacity:</strong>${details.capacity}</p>
        <p class="card-text"><strong>estimate/assistance:</strong>${estimateAsistence(details)}</p>
        <p class="card-text"><strong>price:</strong>$${details.price}</p>
      </div>
    </div>
  </div>
</div>`






