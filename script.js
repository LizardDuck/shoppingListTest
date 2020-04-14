// document.getElementsByTagName("h1")
// document.getElementsByClassName("second")[0] -> 
// document.getElementById("first")

var button = document.getElementById("add");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");



function inputLength(){
	// Function that gets length of input from text field Input and returns the length
	return input.value.length;
}


function createListElement(){
		//Function that creates a list element and appends it to the UL list 
		//also resets text field

		var li = document.createElement("li"); //create new li element
		li.appendChild(document.createTextNode(input.value)) //add text node with value from input
		li.classList.add("listItem");
		ul.appendChild(li) //attaches new text node to the UL list

		li.addEventListener("click", function() {
			// creates a boolean that toggles the done class on li:
			// if the list item is clicked this toggles the done class
			var finished = this.classList.toggle("done");

			//creates a remove button
			var removeButton = document.createElement("button");
			removeButton.classList.add("deleteButton");

			//if list item clicked, finished is true

			if (finished){
				removeButton.appendChild(document.createTextNode("remove"));
				removeButton.classList = "deleteButton";
				li.appendChild(removeButton);

				removeButton.addEventListener("click",function(){
					this.parentElement.remove();
				})
			} else {
				this.getElementsByClassName("deleteButton")[0].remove();
			}

		})

		//



		input.value = ""
}


function addListAfterClick(){
	// Function for checking length of input before adding list element
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeyPress(event){
	// Function for checking length of input AND checking if enter key is used
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
	shopList = document.querySelectorAll("li")
}



button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeyPress);

