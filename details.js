const main = document.getElementById("maindetails")
const params = new URLSearchParams(location.search)
const id = params.get( "id" )
const details= data.events.find(card=>card._id==id)
const name=params.get("name")
const aux = details.name.toUpperCase()+details.name.slice(1).toLowerCase()
document.title=`${aux}'s details`;


main.innerHTML += `<div id="detailscontent">
<div id="detailsimg" >
  <img src="${details.image}" alt="concert" id="imgdetails"  >
</div>
<section id="detailstext" >
  <h3>${details.name}</h3>
  <p><strong>date:</strong>${details.date}</p>
  <p><strong>description:</strong>${details.description}</p>
  <p><strong>category:</strong>${details.category}</p>
  <p><strong>place:</strong>${details.place}</p>
  <p><strong>capacity:</strong>${details.capacity}</p>
  <p><strong>estimate:</strong>${details.estimate}</p>
  <p><strong>price:</strong>$${details.price}0</p>
</section>
</div>`




