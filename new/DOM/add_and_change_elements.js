//Changing text
  const para = document.querySelector('p');
  //console.log(para.innerText);
  para.innerText = "hello";
  //Append to the text
  para.innerText += " hello";

  //Change the text on multiple elements 
  const paras = document.querySelectorAll('p');
  paras.forEach(para => {
    para.innerText = "new text";
    //append
    para.innerText += "new text";
    
  })

//Change HTML
  const content = document.querySelector(".content");
  //Replace the entire HTML content
  content.innerHTML = "<h2>This is a new h2 tag</h2>";
  //Append content
  content.innerHTML += "<h2>This is a new h2 tag</h2>";
  //Append a html sippet for each element in the array to the content div
  const people = ['mario', 'john', 'alex'];
  people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
  })
