const cards = document.getElementById("cards")
let eventInfo = data.events
let card=" "


for(let idInfo of eventInfo){
    if(idInfo.date>data.currentDate){
        card.className ="card-info"
    card += `<div class="card" style="width: 18rem;">
    <img src=${idInfo.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${idInfo.name}</h5>
      <p class="card-text"><strong>Date:</strong>${idInfo.date}</p>
      <p class="card-text"><strong>Description:</strong>${idInfo.description}</p>
      <div class="cardbottom">
        <p class="card-text"><strong>Price:</strong>$${idInfo.price}</p>
        <a href="./details.html" class="btn btn-primary">Go to details</a>
      </div>
    </div>
  </div>`
    }
}
cards.innerHTML = card