export function pastFilter(events,currdate){
  let pastEvents=[];
  for(let event of events){
    if(currdate>event.date){
      pastEvents.push(event)
    }
  }
  return pastEvents
}
export function upComingFilter(events,currdate){
  let upcomigEvents=[];
  for(let event of events){
    if(currdate<event.date){
      upcomigEvents.push(event)
    }
  }
  return upcomigEvents
}
export function createCard(eventInfo, cards){
    cards.innerHTML = ''
    let template = ''
    for( let eve of eventInfo ){
        template += writeCard(eve)
    }
    cards.innerHTML += template
}
export function writeCard( eve ){
    return`<div class="card" style="width: 18rem;">
    <img src=${eve.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${eve.name}</h5>
      <p class="card-text"><strong>Date:</strong>${eve.date}</p>
      <p class="card-text"><strong>Description:</strong>${eve.description}</p>
      <div class="cardbottom">
        <p class="card-text"><strong>Price:</strong>$${eve.price}</p>
        <a class="btn btn-primary" href="../../pages/details.html?id=${eve._id}&name=${eve.name}">Go to details</a>
      </div>
    </div>
  </div>`
}

export function messageError(){
  return` 
  <div class="cont-error">
    <p class="message-error">Event not found</p>
    </div>` 
}
export function printMessage(list,element){
  if(list.length===0){
    element.innerHTML=messageError()
  }else{
    return createCard(list,element)
  }
}
export function createCategory(arrcategory,element){
  let cat=" "
    for(let check of arrcategory){
      cat +=`<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="${check}" value="${check}">
      <label class="form-check-label" for="${check}">${check}</label>
    </div>`
    }
    element.innerHTML = cat
}  
export function filterCateCheck(list){
    const checkedbox = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(check=>check.value)
    if(checkedbox.length==0){
      console.log(list);
      return (list)
    }
    return list.filter(filtrados =>checkedbox.includes(filtrados.category))
}

export function searching(search,list){
  let fill=list.filter(even=>even.name.toLowerCase().startsWith(search))
  return  fill;
}

export function highestPercentageAtte(events){
  let high=0
  let highEvent
  for(let event of events){
    let percentageAtt=(event.assistance*100)/event.capacity
    if(high===0 || percentageAtt>high){
      high=percentageAtt
      highEvent=event
    }
  }
  return highEvent
}


export function lowetsPercentageAtte(events){
  let low=0
  let lowEvent
  for(let event of events){
    let percentageAtt=(event.assistance*100)/event.capacity
    if(low===0 || percentageAtt<low){
      low=percentageAtt
      lowEvent=event
    }
  }
  return lowEvent
}


export function largerCapa(events){
  let larger=0
  let latgerCap
  for(let event of events ){
    if(larger===0||event.capacity>larger){
      larger=event.capacity
      latgerCap=event
    }
  }
  return latgerCap
}

export function upcomingStatistics(events){
  let upcomingStats=[]
  let upcomigCategories= Array.from(new Set(events.map(event=>event.category)))
  

  let comingRevenues=[]
  for(let cate of upcomigCategories ){
    let revCont=0
    for(let event of events){
      if(event.category===cate){
        revCont+=event.estimate * event.price
        
      }
    }
    comingRevenues.push(revCont)
    
  }

  let upcomingPersentageOfAtte=[]
  for(let cate of upcomigCategories){
    let estimateAtte=0
    let cap=0
    for(let event of events){
      if (event.category === cate){
        estimateAtte+=event.estimate
        cap+=event.capacity
      }
    }
    upcomingPersentageOfAtte.push((estimateAtte*100)/cap)
  }
  upcomingStats.push(upcomigCategories,comingRevenues,upcomingPersentageOfAtte)
  return upcomingStats
}




export function pastStatistics(events){
  let pastStats=[]
  let pastCategories= Array.from(new Set(events.map(event=>event.category)))
  console.log(pastCategories);

  let pastRevenues=[]
  for(let cate of pastCategories ){
    let pastRevCont=0
    for(let event of events){
      if(event.category===cate){
        pastRevCont+=event.assistance * event.price
        
      }
    }
    pastRevenues.push(pastRevCont)
    
  }

  let upcomingPersentageOfAtte=[]
  for(let cate of pastCategories){
    let estimateAtte=0
    let cap=0
    for(let event of events){
      if (event.category === cate){
        estimateAtte+=event.assistance
        cap+=event.capacity
      }
    }
    upcomingPersentageOfAtte.push((estimateAtte*100)/cap)
  }
  pastStats.push(pastCategories,pastRevenues,upcomingPersentageOfAtte)
  return pastStats
}

export function estimateAsistence(descrip) {
  let muestra = '';
  if (descrip.assistance) {
      muestra = descrip.assistance;
  } else if (descrip.estimate) {
      muestra = descrip.estimate;
  }
  return muestra;
}



  /*
 export function createCard (e,element){
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
