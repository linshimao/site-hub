//切换壁纸
/*function changeBgImg() {
  var Img = document.getElementsByClassName('btn-img');
  var wrap = document.getElementById('wrap');
  //  console.log(randomNumber);
  var link =
    Img[0].onclick = function () {
      var randomNumber = Math.ceil((Math.random() * 4050));
      wrap.style.backgroundImage = "url(http://img.infinitynewtab.com/wallpaper/" + randomNumber + ".jpg";

    }
}
changeBgImg();

*/
//切换壁纸(并且将生成的随机数存入cookie)
$(function () {
  $(".btn-img:eq(0)").on("click", function () {
    var randomNumber = Math.ceil((Math.random() * 4049)) + 1;
    console.log(randomNumber);
    $.cookie("bgUrl", randomNumber, {
      expires: 365
    });
    $("#wrap").css("backgroundImage", "url(http://img.infinitynewtab.com/wallpaper/" + $.cookie("bgUrl") + ".jpg");
  });
  $("#wrap").css("backgroundImage", "url(http://img.infinitynewtab.com/wallpaper/" + $.cookie("bgUrl") + ".jpg");
});


//切换nav > ul > li > a底部边框
function changeALine() {
  var OUl = document.getElementById('OUl');
  var OA = OUl.getElementsByTagName('a');
  for (var i = 0; i < OA.length; i++) {
    OA[i].onclick = function () {
      for (var i = 0; i < OA.length; i++) {
        OA[i].removeAttribute("class");
      }
      this.setAttribute("class", "a-active");
    }
  }
}
changeALine();

//控制输入框搜索按钮的显示和隐藏
function searchBtnToggle() {
  var searchInput1 = document.getElementsByTagName("input")[0];
  var searchInput2 = document.getElementsByTagName("input")[1];
  searchInput1.onclick = function () {
    searchInput2.style.backgroundImage = "url(img/search_icon.png)";
    searchInput2.style.backgroundRepeat = "no-repeat";
    searchInput2.style.backgroundPosition = "center";
    searchInput2.style.backgroundSize = "50%";
    searchInput2.style.backgroundColor = "#41f084";
  }
  searchInput1.onblur = function () {
    searchInput2.style.backgroundColor = "#fff";
  }
  searchInput2.onmouseover = function () {
    this.style.backgroundImage = "url(img/search_icon.png)";
    this.style.backgroundRepeat = "no-repeat";
    this.style.backgroundPosition = "center";
    this.style.backgroundSize = "50%";
    this.style.backgroundColor = "#2ECC71";
  }
  searchInput2.onmouseout = function () {
    this.style.backgroundColor = "#fff";
  }
}
searchBtnToggle();