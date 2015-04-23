$(function() {
  $('h4:not(#guage-legend)').hide();
  $('label:not(#for-project-name, #for-row-guage, #for-needle-size, #for-stitch-guage)').hide();
  $('p:not(.design-instructions)').hide();
  $('hr:not(#first-break)').hide()
  $('.go-to-pattern').hide();
  $('.save-design').hide();
  ;
});

$(function() {
  $('#first-step').click(function() {
    $('#make').fadeIn(700);
    $('#second-break').fadeIn(700);
    $('.reminder').fadeIn(700);
    $('.how').fadeIn(700);
    $('#for-up, #for-down').fadeIn(700);
  });
});

$(function() {
  $('#up').click(function() {
    $('.shoulder-construction').fadeIn(700);
    $('#for-yoke, #for-set, #for-raglan').fadeIn(700);
  });
});

$(function() {
  $('#yoke').click(function() {
    $('.collar').fadeIn(700);
    $('#for-crew, #for-vee').fadeIn(700);
  });
});

$(function() {
  $('#crew').click(function() {
    $('.waist-shape').fadeIn(700);
    $('#for-yes-shape, #for-no-shape'). fadeIn(700);
  });
});

$(function() {
  $('#no-shape').click(function() {
    $('.torso-length').fadeIn(700);
    $('#for-yes-hips, #for-no-hips').fadeIn(700);
  });
});

$(function() {
  $('#no-hips').click(function() {
    $('.fit').fadeIn(700);
    $('#for-loose, #for-close').fadeIn(700);
  });
});

$(function() {
  $('#loose').click(function() {
    $('.save-design').fadeIn(700);
  });
  $('#close').click(function() {
    $('.save-design').fadeIn(700);
  });
});

$(function() {
  $('.save-design').click(function() {
    $('.save-design').fadeOut(700);
    $('.go-to-pattern').fadeIn(700);
  });
});

$(function() {
  $('.go-to-pattern').click(function() {
    window.location.href='pattern.html';
  });
});
