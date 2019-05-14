function letsgo(){
  var elmnt = document.getElementById("app2");
  elmnt.scrollIntoView({behavior: "smooth"});
}


function gotoapp2(){
    document.getElementById("app1").style.marginLeft = ("-100vw");
    document.getElementById("app1").style.WebkitTransition = "all 0.7s";
    document.getElementById("app2").style.marginLeft = ("0vw");
    document.getElementById("app2").style.WebkitTransition = "all 0.7s";


}
function gotoapp1(){
    document.getElementById("app1").style.marginLeft = ("0vw");
    document.getElementById("app1").style.WebkitTransition = "all 0.7s";
    document.getElementById("app2").style.marginLeft = ("100vw");
    document.getElementById("app2").style.WebkitTransition = "all 0.7s";
}
function gotoapp3(){
    document.getElementById("app2").style.marginLeft = ("-100vw");
    document.getElementById("app2").style.WebkitTransition = "all 0.7s";
    document.getElementById("app3").style.marginLeft = ("0vw");
    document.getElementById("app3").style.WebkitTransition = "all 0.7s";
}
function backtoapp2(){
    document.getElementById("app2").style.marginLeft = ("0vw");
    document.getElementById("app2").style.WebkitTransition = "all 0.7s";
    document.getElementById("app3").style.marginLeft = ("100vw");
    document.getElementById("app3").style.WebkitTransition = "all 0.7s";

}
function gotoapp4(){
    document.getElementById("app3").style.marginLeft = ("-100vw");
    document.getElementById("app3").style.WebkitTransition = "all 0.7s";
    document.getElementById("app4").style.marginLeft = ("0vw");
    document.getElementById("app4").style.WebkitTransition = "all 0.7s";
}
function backtoapp3(){
    document.getElementById("app3").style.marginLeft = ("0vw");
    document.getElementById("app3").style.WebkitTransition = "all 0.7s";
    document.getElementById("app4").style.marginLeft = ("100vw");
    document.getElementById("app4").style.WebkitTransition = "all 0.7s";

}

function gotoapp5(){
    document.getElementById("app4").style.marginLeft = ("-100vw");
    document.getElementById("app4").style.WebkitTransition = "all 0.7s";
    document.getElementById("app5").style.marginLeft = ("0vw");
    document.getElementById("app5").style.WebkitTransition = "all 0.7s";
    setTimeout(gotoapp6, 1000);
    showWorkout();
}

function gotoapp6(){
    ShowInfoUI();
    document.getElementById("app5").style.marginLeft = ("-100vw");
    document.getElementById("app5").style.WebkitTransition = "all 0.7s";
    document.getElementById("app6").style.marginLeft = ("0vw");
    document.getElementById("app6").style.WebkitTransition = "all 0.7s";
}
function backtoapp4(){
    document.getElementById("app4").style.marginLeft = ("0vw");
    document.getElementById("app4").style.WebkitTransition = "all 0.7s";
    document.getElementById("app6").style.marginLeft = ("100vw");
    document.getElementById("app6").style.WebkitTransition = "all 0.7s";
    document.getElementById("app5").style.marginLeft = ("100vw");
    document.getElementById("app5").style.WebkitTransition = "all 0.7s";

}
function gotoappr(){
    document.getElementById("app6").style.marginLeft = ("-100vw");
    document.getElementById("app6").style.WebkitTransition = "all 0.7s";
    document.getElementById("appr").style.marginLeft = ("0vw");
    document.getElementById("appr").style.WebkitTransition = "all 0.7s";
}
function backtoapp6(){
    document.getElementById("app6").style.marginLeft = ("0vw");
    document.getElementById("app6").style.WebkitTransition = "all 0.7s";
    document.getElementById("appr").style.marginLeft = ("100vw");
    document.getElementById("appr").style.WebkitTransition = "all 0.7s";
    document.getElementById("appw").style.marginLeft = ("100vw");
    document.getElementById("appw").style.WebkitTransition = "all 0.7s";
}
function gotoappw(){
    document.getElementById("app6").style.marginLeft = ("-100vw");
    document.getElementById("app6").style.WebkitTransition = "all 0.7s";
    document.getElementById("appw").style.marginLeft = ("0vw");
    document.getElementById("appw").style.WebkitTransition = "all 0.7s";
    
}
function gotoappr2(){
    document.getElementById("appw").style.marginLeft = ("-100vw");
    document.getElementById("appw").style.WebkitTransition = "all 0.7s";
    document.getElementById("appr").style.marginLeft = ("0vw");
    document.getElementById("appr").style.WebkitTransition = "all 0.7s";
}
function gotoappw2(){
    document.getElementById("appr").style.marginLeft = ("-100vw");
    document.getElementById("appr").style.WebkitTransition = "all 0.7s";
    document.getElementById("appw").style.marginLeft = ("0vw");
    document.getElementById("appw").style.WebkitTransition = "all 0.7s";
    
}
function backtoappr(){
    document.getElementById("apprecipes").style.marginLeft = ("-100vw");
    document.getElementById("apprecipes").style.WebkitTransition = "all 0.7s";
    document.getElementById("appr").style.marginLeft = ("0vw");
    document.getElementById("appr").style.WebkitTransition = "all 0.7s";
}
function gotoappRecipe(){
    document.getElementById("appr").style.marginLeft = ("-100vw");
    document.getElementById("appr").style.WebkitTransition = "all 0.7s";
    document.getElementById("apprecipes").style.marginLeft = ("0vw");
    document.getElementById("apprecipes").style.WebkitTransition = "all 0.7s";
    
        showRecipe();
}




























///Monika///

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
  console.log(pkg);
}


function Changegoal(goal){
  pkg.goal = goal;
  save();
    console.log(pkg);

}
function actLevel(activity){
  pkg.activity = activity;
  save();
  console.log(pkg);

}
function save(){
localStorage.setItem("user",JSON.stringify(pkg));

}


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
                <div class="` +goal+ `-name">
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




//RECIPES NUMBERS
var foodname = document.querySelector("#foodname p"),
    recipeimage1 = document.querySelector("#recipeimage1 img"),
    recipeimage2 = document.querySelector("#recipeimage2 img"),
    ingridents = document.querySelector("#ingridiens"),
    instructions = document.querySelector("#instructions")
        ;
    




function showRecipe(){
    var num = Math.floor(Math.random() * Math.floor(15));
    foodname.innerHTML = recipe[num].name;
    recipeimage1.src = recipe[num].image1;
    recipeimage2.src = recipe[num].image2;
    ingridents.innerHTML = recipe[num].ingridients;
    instructions.innerHTML = recipe[num].instruction;
    console.log(recipe [num]);
}

var recipe=[
    {
        name :"Avocado Toast",
        image1: "images/Avocado-Toast-1.png",
        image2:"images/Avocado-Toast-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },
      {
        name :"English Breakfast",
        image1: "images/English-Breakfast-1.png",
        image2:"images/English-Breakfast-2.png",
        instruction: "<ul><li> IHeat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil.</li><li>Cook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.</li> <li>Snip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.</li> <li>For the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy</li><li> For the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.</li> <li>For the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.</li><li>Once all the ingredients are cooked, serve on warm plates and enjoy straight away with a good squeeze of tomato ketchup or brown sauce.</li></ul>",
      
          ingridients: "<ul><li>2 sausages</li> <li> 2 bacons </li> <li> mushrooms </li> <li> tomatoes </li> <li> black pudding </li> <li>1 large egg</li> </ul>"
    },

        {
        name :"Smoked Fish",
        image1: "images/fish-1.png",
        image2:"images/fish-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },

        {
        name :"Fruit Salad",
        image1: "images/Fruit-Salad-1.png",
        image2:"images/Fruit-Salad-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },

        {
        name :"Almond Bar",
        image1: "images/Almond-Bar-1.png",
        image2:"images/Almond-Bar-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },

        {
        name :"Ham & Eggs",
        image1: "images/Ham-and-egg-1.png",
        image2:"images/Ham-and-egg-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },

        {
        name :"Oatmeal",
        image1: "images/Oatmeal-1.png",
        image2:"images/Oatmeal-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },

        {
        name :"Omelette",
        image1: "images/Omelette-1.png",
        image2:"images/Omelette-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },

        {
        name :"Overnight Oats",
        image1: "images/Overnight-oats-1.png",
        image2:"images/Overnight-oats-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },

        {
        name :"Overnight Strawberry Oats",
        image1: "images/overnight-strawberry-1.png",
        image2:"images/Overnight-strawberry-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },

        {
        name :"Poached Salmon",
        image1: "images/Poached-Salmon-1.png",
        image2:"images/Poached-Salmon-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },
    {
        name :"Roasted Chicken",
        image1: "images/Roasted-Chicken-1.png",
        image2:"images/Roasted-Chicken-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },
    {
        name :"Veggie Salad",
        image1: "images/salad-1.png",
        image2:"images/salad-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },
    {
        name :"Skinny Sandwich",
        image1: "images/Sandwich-1.png",
        image2:"images/Sandwich-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },
    {
        name :"Fruit Smoothie",
        image1: "images/Smoothie-1.png",
        image2:"images/Smoothie-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    },
    {
        name :"Veggie Snack",
        image1: "images/Veggie-Snack-1.png",
        image2:"images/Veggie-Snack-2.png",
        instruction: "<ul><li> In a small bowl, combine avocado, lemon juice, salt, and pepper. Gently mash with the back of a fork.</li><li>Top toasted bread with mashed avocado mixture. Drizzle with olive oil and sprinkle over desired toppings.</li></ul>",
        ingridients: "<ul><li> &#189; small avocado </li> <li>  &#189; teaspoon fresh lemon juice </li> <li> &#190; teaspoon Kosher salt</li> <li> 1 slice whole bread </li> <li> 1 hard-boiled egg</li> </ul>"
    }
    
    
];













// Workout


var bike_time = document.querySelector("#bike-time-numberw p"),
    bike_speed = document.querySelector("#bike-speed-numberw p"),
   bike_cals = document.querySelector("#bike-cals-numberw p"),
    
    walk_time = document.querySelector("#walk-time-numberw p"),
    walk_speed = document.querySelector("#walk-speed-numberw p"),
   walk_cals = document.querySelector("#walk-cals-numberw p"), 
    
    run_time = document.querySelector("#run-time-numberw p"),
    run_speed = document.querySelector("#run-speed-numberw p"),
   run_cals = document.querySelector("#run-cals-numberw p"),
    
    yoga_time = document.querySelector("#yoga-time-numberw p"),
    yoga_speed = document.querySelector("#yoga-speed-numberw p"),
   yoga_cals = document.querySelector("#yoga-cals-numberw p")
    ;
    



function showWorkout(){
    var numw1 = Math.floor(Math.random() * Math.floor(10));
    var numw2 = Math.floor(Math.random() * Math.floor(10));
    var numw3 = Math.floor(Math.random() * Math.floor(10));
    var numw4 = Math.floor(Math.random() * Math.floor(6));
    
    bike_time.innerHTML = workout[numw1].time;
    bike_speed.innerHTML = workout[numw1].speed;
    bike_cals.innerHTML = workout[numw1].cals;
    
    walk_time.innerHTML = workout[numw2].time;
    walk_speed.innerHTML = workout[numw2].speed;
    walk_cals.innerHTML = workout[numw2].cals;
    
    run_time.innerHTML = workout[numw3].time;
    run_speed.innerHTML = workout[numw3].speed;
    run_cals.innerHTML = workout[numw3].cals;
    
    yoga_time.innerHTML = workout[numw4].time;
    yoga_speed.innerHTML = workout[numw4].speed;
    yoga_cals.innerHTML = workout[numw4].cals;
    
}

var workout=[
    {
        time : 25,
        speed: 5,
        cals:90
    },
      {
        time : 15,
        speed: 10,
        cals:50
    },
      {
        time : 35,
        speed: 7,
        cals:90
    },
      {
        time : 20,
        speed: 6,
        cals: 80
    },
      {
        time : 25,
        speed: 10,
        cals:90
    },
      {
        time : 35,
        speed: 13,
        cals:75
    },
      {
        time : 25,
        speed: 10,
        cals:100
    },
      {
        time : 65,
        speed: 20,
        cals:120
    },
      {
        time : 65,
        speed: 30,
        cals:140
    },
      {
        time : 55,
        speed: 30,
        cals: 110
    },
      {
        time : 45,
        speed: 20,
        cals:120
    }
    ]
    
    