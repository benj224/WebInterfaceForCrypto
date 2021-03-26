function addBlock (leftSpace, topSpace, number) {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode(number.toString());
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    newDiv.classList.add("block");
    leftStr = leftSpace.toString().concat("px")
    topStr = topSpace.toString().concat("px")
    newDiv.style.left = leftStr; 
    newDiv.style.top = topStr;
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }