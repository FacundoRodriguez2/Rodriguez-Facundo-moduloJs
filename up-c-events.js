const cards = document.getElementById("cards")
const search=document.getElementById("formsec")
const cate=document.getElementById("cate")
let eventInfo = data.events

let cat=""


const category= eventInfo.map(eventInfo => eventInfo.category)
const onecategory= new Set(category)
const arrcategory=[...onecategory]



createCard(eventInfo)
createCategory(arrcategory)



search.addEventListener('input',(e)=>{
  const searchinput = e.target.value.toLowerCase();
  const cards= document.querySelectorAll(".card");
  let thereIs = false;
  cards.forEach(card => {
    const name = card.querySelector(".card-title").innerText.toLowerCase();
    if (name.startsWith(searchinput)) {
    thereIs = true;
    card.style.display = "block";
    } else {
    card.style.display = "none";
    }
});
})
cate.addEventListener('change',(e) =>{
  let aux = filterCateCheck(eventInfo)
  createCard(aux)
})


function filterCateCheck(e){
  const checkedbox = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(check=>check.value)
  if(checkedbox.length===0){
    return (e)
  }
  return e.filter(filtrados =>checkedbox.includes(filtrados.category))

}





function createCategory(arrcategory){
for(let check of arrcategory){
  cat +=`<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="${check}" value="${check}">
  <label class="form-check-label" for="${check}">${check}</label>
</div>`
}
cate.innerHTML = cat
}

function createCard (e){
  let card=" "
for(let idInfo of e){
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
        <a class="btn btn-primary" href="./details.html?id=${idInfo._id}&name=${idInfo.name}">Go to details</a>
      </div>
    </div>
  </div>`
    }
}
cards.innerHTML = card
}