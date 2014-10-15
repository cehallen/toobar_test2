$(function() {
  // *********** Select01 ********* //
  $("#font-select").selectBoxIt();

  // *********** End **********//

  // *********** Slider *********** //
  //Store frequently elements in variables
  var slider  = $('#slider'),
    tooltip = $('.tooltip');

  //Hide the Tooltip at first
  tooltip.hide();

  //Call the Slider
  slider.slider({
    //Config
    range: "min",
    min: 1,
    value: 48,

    start: function(event,ui) {
        tooltip.fadeIn('fast');
    },

    //Slider Event
    slide: function(event, ui) { //When the slider is sliding

      var value  = slider.slider('value'),
        volume = $('.volume');

      tooltip.css('left', value).text(ui.value);  //Adjust the tooltip accordingly
    },

    stop: function(event,ui) {
        tooltip.fadeOut('fast');
    },
  });
  // ************ End ********** //

  // *********** Nav Bar Pull Icon *********** //
  $("#pull-row").click(function() {
    var toolbar = $("#toolbar");
    toolbar.slideToggle();
  });

  // $(window).resize(function(){
  //   var w = $(window).width();
  //   if(w > 640 && menu.is(':hidden')) {
  //       menu.removeAttr('style');
  //   }
  // });
  // ***************** End ********** //
});
