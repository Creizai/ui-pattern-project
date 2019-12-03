let artArr = [
{
	name: "Breaking Bad",
	url: "mages/BB.jpg",
	quote: "Science Bitch"
},
{
	name: "Boba Fett",
	url: "images/bobafett.jpg",
	quote: "........"
},
{
	name: "Egon Spengler",
	url: "images/egons.jpg",
	quote: "RIP"
},
{
	name: "John Wick",
	url: "images/JohnWick.jpg",
	quote: "Yeah.. I'm Back!"
},
{
	name: "Joker",
	url: "images/JokerColor.jpg",
	quote: "Want to see a magic trick?!"
},
{
	name: "Predator",
	url: "images/PredatorFinal.jpg",
	quote: "You're one ugly muther...."
},
{
	name: "Rita Vrataski",
	url: "images/rita.jpg",
	quote: "I'm full metal B...."
},
{
	name: "Superman",
	url: "images/Superman.jpg",
	quote: "MARTHA!!!"
},
{
	name: "Terminator",
	url: "images/Terminator",
	quote: "I'll be Back"
}]



let modal = document.getElementById("myModal");


// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelectorAll("img");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function() {
    	console.log("Clicked!")
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

}



// //Code to add event listener to all
// //for refactoring
// var elements = document.querySelectorAll(img);
// for (var i = 0; i < elements.length; i++) {
//     var img = elements[i].src;
//     console.log(elements[i].src);
//     var modalImg = document.getElementById("img01");
//     var captionText = elements[i].alt;
//     elements[i].addEventListener("click", function() {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;
//     });
// }

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}