
// Part 3 Question 3
window.addEventListener("load",function(){
    console.log("Anna")
    })


// Part 3 Question 4

document.querySelector("h1").addEventListener("click",function(){
    this.style.display = "none";
})


// Part 3 Question 5

const images = document.querySelectorAll("img");
images.forEach((image, index) => {
  if (index === 2) {
    image.addEventListener("mouseenter", function() {
      this.style.border = "15px solid green";
  })}
});



// Part 3 Question 6

document.querySelector("button.style").addEventListener("focus",function(){
    console.log("focusing on button 1")
   this.style.background = "white";
})
// 2 - Restore the text color to black and remove the border when the focus is removed. 
document.querySelector("button.style").addEventListener("blur",function(){
    console.log("blurring on button 1")
   this.style.background = "bisque";
})



// Part 3 Question 7
document.querySelector("button.style2").addEventListener("click",function(){
    console.log("clicking button 2")
  document.querySelector("#maincontent").style.backgroundImage = "url(../images/mountain.jpg)";
})

// Part 3 Question 8
// document.querySelectorAll("partA").addEventListener("click",function(){
//     this.innerHTML = "data-lightbox='gallery'" + this.innerHTML; 
// })