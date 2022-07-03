
function add(){
    var  input = document.getElementById("title")
    var getlist= document.getElementById("todo")
    var ce = document.createElement("li")
    var get = document.createTextNode(input.value)  
    ce.appendChild(get)
  getlist.appendChild(ce)
  input.value=""
  var btn = document.createElement("button")
  var btntext=document.createTextNode("Remove")
  btn.appendChild(btntext)
  ce.appendChild(btn)
  btn.setAttribute("onclick","deleted(this)")
  var editbtn = document.createElement("button")
  var editbtntext =document.createTextNode("Edit")
  editbtn.appendChild(editbtntext)
  ce.appendChild(editbtn)
  editbtn.setAttribute("onclick","edit(this)")
  }
  
  function del(){
      document.getElementById("todo").innerHTML=""
  }
  
  function edit(e){
      var pr = prompt('enter the updated value',e.parentNode.firstChild.nodeValue)
      e.parentNode.firstChild.nodeValue= pr
  }
  function deleted(e){
  e.parentNode.remove()
  }
  