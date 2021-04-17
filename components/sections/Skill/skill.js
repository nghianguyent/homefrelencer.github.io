function createNumberOfBox(parents, id)
{
     let box_number = document.createElement("h3");
     parents.appendChild(box_number);
     box_number.className = "number_of_box";
     box_number.textContent = "0";
     box_number.id = "box" + (id + 1);
}
function createContentOfBox(parents, id)
{
     let box_content = document.createElement("p");
     parents.appendChild(box_content);
     box_content.className = "content_of_box";
     box_content.textContent = BOX_ELEMENTS[id].content;
}
for(var i = 0; i < BOX_ELEMENTS.length; i++)
{
     let box_parents = document.createElement("div");
     document.getElementById("box").appendChild(box_parents);
     createNumberOfBox(box_parents, i);
     createContentOfBox(box_parents, i);
     box_parents.className = BOX_ELEMENTS[i].class;
}
// ----------------------------------------------------------------
let amount = 0;
function countUp()
{
     if(amount == 0)
     {
          amount++;
          for(let i = 1; i <= 200; i++)
               setTimeout(function(){document.getElementById("box1").innerHTML = i}, i * 9);
          for(let i = 1; i <= 120; i++)
               setTimeout(function(){document.getElementById("box2").innerHTML = i}, i * 16);
          for(let i = 1; i <= 10; i++)
               setTimeout(function(){document.getElementById("box4").innerHTML = i}, i * 150);
          for(let i = 1; i <= 4; i++)
               setTimeout(function(){document.getElementById("box3").innerHTML = i}, i *400);
     }
}




