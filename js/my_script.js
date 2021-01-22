$(function () {
  /* TOP-Pageボタン制御 */
  $(".page-top").hide(); // TOP-Pageボタン非表示

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // スクロールが100に達したらボタン表示
      $(".page-top").fadeIn();
    } else {
      $(".page-top").fadeOut();
    }
  });

  $(".page-top").click(function () {
    // TOP-Pageボタンクリックされた時
    $("body,html").animate({ scrollTop: 0 }, 500); // TOPへスクロール
    return false;
  });

  /* ドロップダウンメニュー */
  /* 初回表示 */
  if (window.matchMedia("(max-width: 680px)").matches) {
    $("#drop_menu_hidden").hide(); // Window スマホサイズの時
  } else {
    $("#drop_menu_hidden").show(); // Window PCサイズの時
  }

  /* ドロップダウンメニュークリック時の処理 */
  $("#spnavi li").click(function () {
    if ($("#drop_menu_hidden").is(":hidden")) {
      $("#drop_menu_hidden:not(:animated)").slideDown("fast");
    } else {
      $("#drop_menu_hidden:not(:animated)").slideUp("fast");
    }
  });

  /* windowがリサイズされたときの処理 */
  $(window).resize(function () {
    if (window.matchMedia("(max-width: 680px)").matches) {
      $("#drop_menu_hidden").hide(); // Window スマホサイズの時
    } else {
      $("#drop_menu_hidden").show(); // Window PCサイズの時
    }
  });

  /* WayPoint */
  $(".menu_box img").waypoint(
    function () {
      if ($(".menu_box img").css("visibility") == "visible") {
      } else {
        $(".menu_box img").css("visibility", "visible");
        $(".menu_box img").toggleClass("animated rubberBand");
      }
    },
    { offset: "60%" }
  );
});
