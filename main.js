import{createCard,createCategory,filterCateCheck,searching,printMessage}from'./module/functions.js'

const cards = document.getElementById("cards")
const cate=document.getElementById("cate")
const search=document.getElementById("formsec")
//let eventInfo = data.events



fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res=>res.json())
    .then((data)=>{
      let eventInfo = data.events
      const category= eventInfo.map(eventInfo => eventInfo.category)
      const onecategory= new Set(category)
      const arrcategory=[...onecategory]
      createCard(eventInfo,cards)
      createCategory(arrcategory,cate)

      search.addEventListener('keyup',(e)=>{
      let sea =search[0].value.toLowerCase();
      let fill=searching(sea,eventInfo)
      let filtercheck=filterCateCheck(fill)
      printMessage(filtercheck,cards)
      })

      cate.addEventListener('change',(e) =>{
      let sea =search[0].value.toLowerCase();
      let fill=searching(sea,eventInfo)
      let filtercheck=filterCateCheck(fill)
      printMessage(filtercheck,cards)
      })
  })


    .catch(err=>console.log(err));






// search





//for module
//createCard(eventInfo,cards)


// category
/*
function createCategory(arrcategory,element){
  for(let check of arrcategory){
    cat +=`<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${check}" value="${check}">
    <label class="form-check-label" for="${check}">${check}</label>
  </div>`
  }
  element.innerHTML = cat
  }
*/

/*
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

*/

/*
function filterCateCheck(e){
  const checkedbox = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(check=>check.value)
  if(checkedbox.length===0){
    return (e)
  }
  return e.filter(filtrados =>checkedbox.includes(filtrados.category))

}



function createCard (e,element){
    let card=" " 
    for(let idInfo of e){
        card.className ="card-info"
        card += `<div class="card" style="width: 18rem;">
        <img src=${idInfo.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${idInfo.name}</h5>
          <p class="card-text"><strong>Date:</strong>${idInfo.date}</p>
          <p class="card-text"><strong>Description:</strong>${idInfo.description}</p>
          <div class="cardbottom">
            <p class="card-text"><strong>Price:</strong>$${idInfo.price}</p>
            <a class="btn btn-primary" href="./pages/details.html?id=${idInfo._id}&name=${idInfo.name}">Go to details</a>
          </div>
        </div>
      </div>`
    }
    element.innerHTML = card
}
*/

/*
function createCard(eventInfo, cards){
  cards.innerHTML = ''
  let template = ''
  for( let eve of eventInfo ){
      template += crearCard(eve)
  }
  cards.innerHTML += template
}
function crearCard( eve ){
  return`<div class="card" style="width: 18rem;">
  <img src=${eve.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${eve.name}</h5>
    <p class="card-text"><strong>Date:</strong>${eve.date}</p>
    <p class="card-text"><strong>Description:</strong>${eve.description}</p>
    <div class="cardbottom">
      <p class="card-text"><strong>Price:</strong>$${eve.price}</p>
      <a class="btn btn-primary" href="./pages/details.html?id=${eve._id}&name=${eve.name}">Go to details</a>
    </div>
  </div>
</div>`
}

*/