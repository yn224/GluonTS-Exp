function loadlang()
{
  var lng = document.getElementById("langselector").value;
  var cnt = document.getElementById("contents");
  switch (lng)
  {
    case "en":
      cnt.src = "index.html";
      break;
    case "kr":
      cnt.src = "index_kr.html";
      break;
  }
}
