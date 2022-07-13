function expansion() {
  var x = document.getElementById("Topnav");
  if (x.className === "navbar") {
      x.className += " expanded";
  } else {
      x.className = "navbar";
  }
}

function search_expand() {
  var x = document.getElementById("search-responsive");
  if (x.className === "search-box") {
      x.className += " expanded";
  } else {
      x.className = "search-box";
  }
}

