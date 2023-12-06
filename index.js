const container = document.querySelector(".container");  

const select_button = document.querySelector(".select");

const reset = document.querySelector(".reset");

const black = document.querySelector(".black");

const multi_colour = document.querySelector(".multi-colour")

let container_height = container.offsetHeight-10


select_button.addEventListener("click", () => {
    container.innerHTML = "";

   let grid_number = prompt("Please choose a number of squares (under 100) per side you would like inside the grid");
   grid_number_input = Number(grid_number);
   grid_number_total = grid_number_input * grid_number_input;

   let height_width = container_height / grid_number_input;
   let widthOfBorder = Math.round(height_width * 0.10);

   height_width = height_width - (widthOfBorder*2);

   widthOfBorder = widthOfBorder.toString();
   widthOfBorder = widthOfBorder + "px";

   height_width = height_width.toString();
   height_width = height_width + "px";
 
   for (i = 0; i < grid_number_total; i++){
    const div = document.createElement("div");
    div.style.backgroundColor="white" ; 
    div.style.borderColor="black" ;
    
    div.style.height= height_width;
    div.style.width=  height_width;
    div.style.borderStyle="solid";
    div.style.borderWidth= widthOfBorder;
    container.appendChild(div);

   div.addEventListener("mouseover", () => {
    div.style.backgroundColor="black" ;
    });
     

    multi_colour.addEventListener("click" , () => {
        div.addEventListener("mouseover", () => {        
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; 
        div.style.backgroundColor=rgb 
    })});

    black.addEventListener("click" , () => {
        div.addEventListener("mouseover", () => {
        div.style.backgroundColor="black" ;
       })
    }); 
}
});

reset.addEventListener("click", () => {
    container.innerHTML = "";
});






