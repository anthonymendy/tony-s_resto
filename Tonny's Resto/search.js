/*

*/
let names = [
    "FRIED CHICKEN ",
     "PIZZA" ,
     "fried fish" ,
      "food"
    
    ]///////;
    //sort sort names in accending order
    let sortedNames= names.sort();
    
    //refrence
    let input = ducument.getElementById("input");
    
    //Execute function on keyup 
    input.addEventListener("keyup", (e)=> {
    //loop through above array
    //innitially remove all elements (so if user erase a letter or adds new letter then clean previous outputs )
        removeElements();
    for(let i of sortedNames){
       
        //convert input to lowercase and compare with each string
        
        if(i .toLowerCase().startsWith(input.value.
            toLowerCase()) && input.value  != ""){
                //creat li element
                let listitem = ducument.creatElement("li");
                //one common class name 
                listitem.creatlist.add("list-item");
                listitem.style.cursor = "pointer"
                listitem.setAttribute("onlick", "displaynames" ('"+ i +"'));
                //display matched part in bold
               let word = "<b>" + i.substr(0, input.value.length)
                "</b>";
                word+= i.substr(input.value.length);
                //display the value  in the array
                listitem.innerHTML = word;
                document.querySelector(".list").appendChild(listitem);
    
            }
    
        }
    });
    function displaynames(value){
        input.value = value;
    }
    function removeElements (){
        //clear all the items 
        let items = document.querySelectorAll(".list-items");
        items.forEach((item) =>{
            item.remove();
        });
        }