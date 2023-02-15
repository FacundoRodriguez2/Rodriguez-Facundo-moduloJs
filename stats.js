import{upComingFilter,pastFilter,highestPercentageAtte,lowetsPercentageAtte,largerCapa,upcomingStatistics,pastStatistics} from'./module/functions.js'

const tables= document.getElementById("tables")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then(res=>res.json())
    .then((data)=>{

      const eventInfo = data.events;
      const currdate=data.currentDate;
      let upComing=upComingFilter(eventInfo,currdate)
      let pastE=pastFilter(eventInfo,currdate)
      console.log(pastE);
      const eventStats=document.getElementById("statistics")
      let highestPercentageAtt = highestPercentageAtte(pastE)
      let lowetsPercentageAtt=lowetsPercentageAtte(pastE)
      let largerCap=largerCapa(eventInfo)
      eventStats.innerHTML +=`
        <tr>
          <td>"${highestPercentageAtt.name}" with ${((highestPercentageAtt.assistance*100)/highestPercentageAtt.capacity).toFixed(2)}%</td>
          <td>"${lowetsPercentageAtt.name}" with ${((lowetsPercentageAtt.assistance*100)/lowetsPercentageAtt.capacity).toFixed(2)}%</td>
          <td>"${largerCap.name}"with ${largerCap.capacity} </td>
        </tr>
      `
      const upStats= document.getElementById("up-stats")
      let upcomingStats=upcomingStatistics(upComing)
      
      let template=""
      for(let i=0;i<upcomingStats[0].length;i++){
        template +=`
          <tr>
              <td>${upcomingStats[0][i]}</td>
              <td>$${upcomingStats[1][i]}</td>
              <td>${upcomingStats[2][i].toFixed(2)}%</td>
          </tr>
        `
      }
      upStats.innerHTML=template
      
      const pastStats=document.getElementById("past-stats")
      let pastcomingStats=pastStatistics(pastE)
      let template2=""
      for(let i=0;i<pastcomingStats[0].length;i++){
        template2 +=`
          <tr>
              <td>${pastcomingStats[0][i]}</td>
              <td>$${pastcomingStats[1][i]}</td>
              <td>${pastcomingStats[2][i].toFixed(2)}%</td>
          </tr>
        `
      }
      pastStats.innerHTML=template2

    })

    .catch(err=>console.log(err));



