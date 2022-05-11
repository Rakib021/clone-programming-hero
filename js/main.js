const milestoneData= JSON.parse(data).data;

//load course milestoneData

function loadMilestone (){
    const milestones = document.querySelector('.milestones');
milestones.innerHTML=`${milestoneData
    .map(function(milestone){
    return `<div class="milestone border-b" id="${milestone._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick="markMilestone(this,${milestone._id})" /></div>
      <div onClick="openMileston(this, ${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel ">
    ${milestone.modules.map(function(module){
        return `
        <div class="module border-b">
          <p>${module.name}</p>
        </div>
      `
    }).join("")}
    </div>
  </div>`
}).join("")}`
}

function openMileston(milestoneElement,id){
const currentPanel= milestoneElement.parentNode.nextElementSibling;
const shownPanel = document.querySelector(".show");
 // first remove previous active class if any [other than the clicked one]
const active = document.querySelector(".active");
if(!milestoneElement.classList.contains("active")&&active){
active.classList.remove("active");
}

  // toggle current clicked one
milestoneElement.classList.toggle("active");

  // first hide previous panel if open [other than the clicked element]
if(!currentPanel.classList.contains("show")&& shownPanel)
shownPanel.classList.remove("show")
// toggle current element
currentPanel.classList.toggle("show")

showMileston(id);
}

function showMileston(id){
    
    const showMilestoneImg = document.querySelector(".milestoneImage");
    const title = document.querySelector(".title");
    const details = document.querySelector(".details");
    showMilestoneImg.style.opacity ="0";
    showMilestoneImg.src= milestoneData[id].image;
    title.innerText= milestoneData[id].name;
    details.innerText= milestoneData[id].description;
}

// listen for hero image load

const showMilestoneImg = document.querySelector(".milestoneImage");
showMilestoneImg.onload = function(){
    this.style.opacity="1";
}

function markMilestone(checkboxd,id){
  const doneList = document.querySelector(".doneList");
  const milestonesList = document.querySelector(".milestones");
  const item= document.getElementById(id);

  if(checkboxd.checked){
      //mark as done List
      milestonesList.removeChild(item);
      doneList.appendChild(item);
  }
  else{
      //back to main list
      milestonesList.appendChild(item);
      doneList.removeChild(item);


    
  }
}


loadMilestone();