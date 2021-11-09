function showMenuMobile() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block")
    x.style.display = "none";
  else
    x.style.display = "block";
}

module.exports = showMenuMobile;

function showEmail() {
  var y = document.querySelector(".final_list span:last-child"); 
  if (y.style.display === "inline-block")
    y.style.display = "none";
  else
    y.style.display = "inline-block";
}
  
module.exports = showEmail;