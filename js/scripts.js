$(function() {
  console.log('jquery is working')

    $(".terms .javascript").click(function() {
      $(".definitions h5").hide();
      $(".definitions .javascript").show();
      console.log('we see the javascript defintion');
    });

    $(".terms .operators").click(function() {
      $(".definitions h5").hide();
      $(".definitions .operators").show();
      console.log('we see the operators defintion');
    });

    $(".terms .variables").click(function() {
      $(".definitions h5").hide();
      $(".definitions .variables").show();
      console.log('we see the variables defintion');
    });

    $(".terms .variablenaming").click(function() {
      $(".definitions h5").hide();
      $(".definitions .variablenaming").show();
      console.log('we see the variablenaming defintion');
    });

    $(".terms .functions").click(function() {
      $(".definitions h5").hide();
      $(".definitions .functions").show();
      console.log('we see the functions defintion');
    });

    $(".terms .methods").click(function() {
      $(".definitions h5").hide();
      $(".definitions .methods").show();
      console.log('we see the methods defintion')
    });

    $(".terms .arguments").click(function() {
      $(".definitions h5").hide();
      $(".definitions .arguments").show();
      console.log('we see the arguments defintion');
    });

    $(".terms .parameters").click(function() {
      $(".definitions h5").hide();
      $(".definitions .parameters").show();
      console.log('we see the parameters defintion');
    });

    $(".terms .returns").click(function() {
      $(".definitions h5").hide();
      $(".definitions .returns").show();
      console.log('we see the returns defintion');
    });

    $(".terms .chainingmethods").click(function() {
      $(".definitions h5").hide();
      $(".definitions .chainingmethods").show();
      console.log('we see the chainingmethods defintion');
    });

    $(".terms .strings").click(function() {
      $(".definitions h5").hide();
      $(".definitions .strings").show();
      console.log('we see the strings defintion');
    });

    $(".terms .booleans").click(function() {
      $(".definitions h5").hide();
      $(".definitions .booleans").show();
      console.log('we see the booleans defintion');
    });

    $(".terms .undefined").click(function() {
      $(".definitions h5").hide();
      $(".definitions .undefined").show();
      console.log('we see the undefined defintion');
    });

    $(".terms .nan").click(function() {
      $(".definitions h5").hide();
      $(".definitions .nan").show();
      console.log('we see the nan defintion');
    });

    $(".terms .escape").click(function() {
      $(".definitions h5").hide();
      $(".definitions .escape").show();
      console.log('we see the escape defintion');
    });

    $(".terms .jsalert").click(function() {
      $(".definitions h5").hide();
      $(".definitions .jsalert").show();
      console.log('we see the jsalert defintion');
    });

    $(".terms .comments").click(function() {
      $(".definitions h5").hide();
      $(".definitions .comments").show();
      console.log('we see the comments defintion');
    });

    $(".terms .jquery").click(function() {
      $(".definitions h5").hide();
      $(".definitions .jquery").show();
      console.log('we see the jquery defintion')
    });

    $(".terms .attributes").click(function() {
      $(".definitions h5").hide();
      $(".definitions .attributes").show();
      console.log('we see the attributes defintion');
    });

    $(".definitions h5").click(function () {
      console.log('this is hiding');
      $(this).hide();
    });



});
