  function Custumrender (reactElemnt , container){
 const domElement = document.createElement(reactElemnt.type);
  domElement.innerHTML = reactElemnt.childern;
  domElement.setAttribute ("href",  reactElemnt.props.href);
  container.appendChild (domElement)
  }
  
  const reactElemnt = {
    type : "a",
    props :{
        href : "https://google.com",
        target : "blank"
    },
    childern : "Click Me Vist Google"

 }
 
 const maincontainer = document.querySelector("#root");

Custumrender(reactElemnt , maincontainer)