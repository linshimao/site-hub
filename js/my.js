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


//初始化函数
function init() {
  changeALine(); //切换nav > ul > li > a底部边框
  searchBtnToggle(); //控制输入框搜索按钮的显示和隐藏
  drawCircle(); //绘制圆形
  changeCircleName(); //圆形名称跟随input动态改变
  addBtnAnimation(); //顶部加号鼠标点击动画
  changeBgAndBorder(); //小圆形被选中，添加border，并且改变绘制的圆形的填充色
}
init();

$(function () {
  if ($.cookie('bgUrl')) {
    $("#wrap").css("backgroundImage", "url(http://img.infinitynewtab.com/wallpaper/" + $.cookie("bgUrl").toString().split("bgUrl=").join('') + ".jpg");
  }
  $(".btn-img:eq(0)").click(function () {
    $("#changeBgImg .btn-img").addClass("rotate");
    setTimeout(function () {
      $("#changeBgImg .btn-img").removeClass("rotate");
    }, 1000);
    var randomNumber = Math.ceil((Math.random() * 4049)) + 1;
    var img1 = new Image();
    var imgArry = new Array();
    var Oimg;
    $.cookie('bgUrl', randomNumber, {
      expires: 365
    });
    img1.src = "http://img.infinitynewtab.com/wallpaper/" + $.cookie("bgUrl").toString().split("bgUrl=").join('') + ".jpg";
    Oimg = "url(" + img1.src + ")";
    img1.onload = function () {
      imgArry.push(Oimg);
      console.log(imgArry[0]);
      $("#wrap").css("backgroundImage", imgArry[0]);
      console.log($("#wrap").css("backgroundImage"));
    }

  });
});
//判断图片是否加载完成


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

//绘制圆形
function drawCircle() {
  var canvas = document.getElementById("mycanvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    //		ctx.strokeStyle = "#2ECC71";
    ctx.fillStyle = "#2ECC71";
    var circle = {
      x: 100,
      y: 70,
      r: 50
    };
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
//圆形名称跟随input动态改变
function changeCircleName() {
  var search_border = document.getElementsByClassName("search-border")[0];
  var input_2 = search_border.getElementsByTagName("input")[1];
  var previewName = document.getElementById("previewName");
  if (document.all) {
    input_2.onpropertychange = function () {
      if (input_2.value == "") {
        previewName.innerHTML = "名称";
      } else {
        previewName.innerHTML = input_2.value;
      }

    }
  } else {
    input_2.oninput = function () {
      if (input_2.value == "") {
        previewName.innerHTML = "名称";
      } else {
        previewName.innerHTML = input_2.value;
      }

    }
  }
}

//顶部加号鼠标点击动画
function addBtnAnimation() {
  var sideMenuControl = document.getElementById("sideMenuControl");
  var tag = true;
  sideMenuControl.onclick = function () {
    if (tag) {
      this.style["-webkit-transform"] = "rotate(135deg)";
      tag = false;
    } else {
      this.style["-webkit-transform"] = "rotate(-90deg)";
      tag = true;
    }
  }
}

//      this.style.borderColor = borderColorArray[e];
//      console.log(that);

//小圆形被选中，添加border，并且改变绘制的圆形的填充色
function changeBgAndBorder() {
  var iconBgColor = document.getElementsByClassName("iconBgColor"),
    borderColorArray = ["rgb(26, 188, 156)", "rgb(46, 204, 113)", "rgb(51, 197, 197)", "rgb(52, 152, 219)", "rgb(155, 89, 182)", "rgb(52, 73, 94)", "rgb(241, 196, 15)", "rgb(230, 126, 34)", "rgb(231, 76, 60)", "rgb(149, 165, 166)"];
  $("#iconBgColor").on("click", ".iconBgColor", function () {
    $(".iconBgColor").css("borderColor", "transparent");
    this.style.borderColor = borderColorArray[$(this).index()];
    //每次点击颜色再次绘制圆形
    function drawCircle(color) {
      var canvas = document.getElementById("mycanvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalCompositeOperation = 'source-atop';
        var circle = {
          x: 100,
          y: 70,
          r: 50
        };
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
        ctx.fill();
      }
    }
    drawCircle(borderColorArray[$(this).index()]);
    $("#previewName").css("color", borderColorArray[$(this).index()]);
  });
}