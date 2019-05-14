var pkg={
  bod: "",
  goal:"",
  activity:""
}

var storepkg= localStorage.getItem("user");
if (storepkg){
pkg=JSON.parse(storepkg);
}

var handler={
  set:function(obj,props,value){
    
  }
}

function BodType(bod){
  pkg.bod = bod;
  save();

}


function Changegoal(goal){
  pkg.goal = goal;
  save();

}
function actLevel(activity){
  pkg.activity = activity;
  save();

}
function save(){
localStorage.setItem("user",JSON.stringify(pkg));

}
console.log(pkg);

function ShowInfoUI(){
  let bodyType = pkg.bod.toLocaleLowerCase().replace(' ', '-');
  let goal = pkg.goal.toLocaleLowerCase().replace(' ', '-');
  let activity = pkg.activity.toLocaleLowerCase();
  
  document.querySelector("#optionbox16").innerHTML =
   `<div class="`+bodyType+`-box">
                <div class="`+bodyType+`-icon">
                    <img src="images/`+ bodyType +`.svg"id="avgicon">
                </div>
                <div class="`+bodyType+`-name">
                    <p>`+pkg.bod+`</p>
                </div>
            </div>`;
  
  document.querySelector("#optionbox26").innerHTML = 
    `<div class="` + goal + `-box">
                <div class="` + goal + `-icon">
                    <img src="images/` + goal + `.svg">
                </div>
                <div class="` + goal + `-name">
                    <p>` + pkg.goal + `</p>
                </div>
            </div>`;
  
  document.querySelector("#optionbox36").innerHTML =    
    `<div class="` + activity + `-box">
                <div class="` + activity + `-icon">
                    <img src="images/` + activity + `.svg">
                </div>
                <div class="` + activity +  `-name">
                    <p>`+ pkg.activity+ `</p>
                </div>
                </div>` 
}