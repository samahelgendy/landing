// when top >=600 show button 
let btn = document.querySelector(".top button");
window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
// when click the button top=0
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
   })
  }
 
// create array text in li

let array = ["ABOUT ME", "PORTFOLIO", "DOWNLOAD CV"];
const lists = document.querySelector(".ul-list .list");
// create loop to make the display of the ordered list dynamic
for (let index = 0; index < array.length; index++) {
    
    const list = document.createElement("li");
   // add class in list
    list.className = "lis";
    // add text in list 
    list.innerText = array[index];
    // add li in ul
    lists.appendChild(list);
    // add attribute in li
    if (list.innerHTML === array[0]) {
         list.setAttribute("data-set", ".about");
        
    }
    if (list.innerHTML === array[1]) {
        list.setAttribute("data-set", ".Portfolios");
    }
     if (list.innerHTML === array[2]) {
        list.setAttribute("data-set", ".download");
    }
    
}

// when you click on the menu items you will be vanigated to the appropiated section dynamically
var menuList = document.querySelectorAll(".ul-list .list li");
function moveAnyWhere(element) {
    element.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.set).scrollIntoView({
                behavior: "smooth",
            })
        })
    })
}

moveAnyWhere(menuList);


const mList = document.getElementsByClassName("lis");

//use loop to use all list

    for (let index = 0; index < mList.length; index++){
    menuList[index].addEventListener("click", function() {

        let current = document.getElementsByClassName(" active");
        
        if (current.length > 0) {
            //remove all class active from list
            current[0].className = current[0].className.replace(" active", "");
            
        }
        //add class active on list when click on it
        this.className += " active";
        
    });
}



let secion = document.querySelector(".section");
let profiles = document.querySelector(".Portfolio.Portfolios");
let test = document.querySelector(".testimonial"); 
let want = document.querySelector(".wantto");

window.addEventListener("scroll", function () {
  // add active class in section 
    if (window.scrollY >= secion.offsetTop -20 && window.scrollY <= profiles.offsetTop -100) {
        secion.classList.add("active");
        document.getElementsByTagName("li")[2].classList.add("active");
        
    } else {
        secion.classList.remove("active");
        document.getElementsByTagName("li")[2].classList.remove("active");
    }

    // add active class in Portfolio

      if (window.scrollY >= profiles.offsetTop && window.scrollY <= test.offsetTop-100 ) {
          profiles.classList.add("active");
          document.getElementsByTagName("li")[1].classList.add("active");
    } else {
          profiles.classList.remove("active");
          document.getElementsByTagName("li")[1].classList.remove("active");
    }

    // add active class in testimonial
      if ( window.scrollY >= test.offsetTop && window.scrollY <= want.offsetTop -200) {
          test.classList.add("active");
          document.getElementsByTagName("li")[0].classList.add("active");
    } else {
          test.classList.remove("active");
          document.getElementsByTagName("li")[0].classList.remove("active");
    }
});
    


var btns = document.querySelectorAll(".section .ontime button");

var parg = document.querySelector(".section .ontime p.solid");

btns.forEach(function (btn) {
    btn.onclick = function () {
        btn.innerHTML = "Learn Less";
        btn.style.backgroundColor = "navy";
    }
});



