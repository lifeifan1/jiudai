// var mNav = document.getElementById("nav_min")[0];
// var bNav = document.getElementsByClassName("nav_m")[0];
// var Nav = mNav.children;
onload = function () {
  var mNav = document.getElementsByClassName('nav_min')[0];
  var bNav = document.getElementsByClassName('nav_b')[0];
  var nv = mNav.children;
  var bv = bNav.children;
  for (let i = 0; i < nv.length; i++) {
    nv[i].onmouseover = function () {
      for (let j = 0; j < bv.length; j++) {
        bv[j].style.display = 'none';
      }
      bv[i].style.display = 'block';
    };
  }
};
