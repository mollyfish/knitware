$(function(){
  var sweaterSize;
  var knitterName;
  var currentUser;
  var sizeIndex;
  var sizes = [];
  var Knitter = function(name, options){
    this.name = knitterName;
    this.size = sizes[sizeIndex].label;
  }
  var Size = function(label, options){
    this.label = label;
    this.chest = options.chest;
    this.sleeve = options.sleeve;
    this.upperArm = options.upperArm;
    this.armHole = options.armHole;
    this.waist = options.waist;
    this.hips = options.hips;
    this.backLength = options.backLength;
    this.sideSeam = this.backLength - this.armHole;
  }

  sizes.push(new Size('WXS', {
    chest: 30, sleeve: 16.5, upperArm: 9.75, armHole: 6.5, waist: 24, hips: 34, backLength: 22.5}));
  sizes.push(new Size('WS', {
    chest: 34, sleeve:17, upperArm: 10.25, armHole: 7, waist: 26.5, hips: 36, backLength: 23}));
  sizes.push(new Size('WM', {
    chest: 38, sleeve: 17, upperArm: 11, armHole: 7.5, waist: 30, hips: 40, backLength: 23.25}));
  sizes.push(new Size('WL', {
    chest: 42, sleeve: 17.5, upperArm: 12, armHole: 8, waist: 34, hips: 44, backLength: 23.5}));
  sizes.push(new Size('WXL', {
    chest: 46, sleeve: 17.5, upperArm: 13.5, armHole: 8.5, waist: 38, hips: 48, backLength: 23.75}));
  sizes.push(new Size('WXXL', {
    chest: 50, sleeve: 18, upperArm: 15.5, armHole: 9, waist: 42, hips: 53, backLength: 24}));

  sizes.push(new Size('MS', {
    chest: 36, sleeve: 18, upperArm: 12, armHole: 9, waist: 30, hips: 37, backLength: 25.5}));
  sizes.push(new Size('MM', {
    chest: 40, sleeve: 18.5, upperArm: 13, armHole: 9.5, waist: 34, hips: 41, backLength: 26.75}));
  sizes.push(new Size('ML', {
    chest: 44, sleeve: 19.5, upperArm: 15, armHole: 10, waist: 38, hips: 45, backLength: 27.25}));
  sizes.push(new Size('MXL', {
    chest: 48, sleeve: 20, upperArm: 16, armHole: 10.5, waist: 44, hips: 49, backLength: 27.75}));
  sizes.push(new Size('MXXL', {
    chest: 52, sleeve: 20.5, upperArm: 17, armHole: 11, waist: 48, hips: 53, backLength: 28.5}));

  $(function() {
      $('#start-design').click(function(){
        window.location.href='design.html';
      });
    });

  $(function() {
    $('#start-design').hide();
  });

  $(function() {
    $("#knitter-name").focus(function(){
      $("#knitter-name").val('');
    })
  })

  $("#nameSave").submit(function () {
    event.preventDefault();
    sizeIndex = 0;
    if ($('#WXS').prop('checked')){
      sweaterSize = sizes[0].label;
    }
    if ($('#WS').prop('checked')){
      sizeIndex = 1;
      sweaterSize = sizes[1].label;
    }
    if ($('#WM').prop('checked')){
      sizeIndex = 2;
      sweaterSize = sizes[2].label;
    }
    if ($('#WL').prop('checked')){
      sizeIndex = 3;
      sweaterSize = sizes[3].label;
    }
    if ($('#WXL').prop('checked')){
      sizeIndex = 4;
      sweaterSize = sizes[4].label;
    }
    if ($('#WXXL').prop('checked')){
      sizeIndex = 5;
      sweaterSize = sizes[5].label;
    }
    if ($('#MS').prop('checked')){
      sizeIndex = 6;
      sweaterSize = sizes[6].label;
    }
    if ($('#MM').prop('checked')){
      sizeIndex = 7;
      sweaterSize = sizes[7].label;
    }
    if ($('#ML').prop('checked')){
      sizeIndex = 8;
      sweaterSize = sizes[8].label;
    }
    if ($('#MXL').prop('checked')){
      sizeIndex = 9;
      sweaterSize = sizes[9].label;
    }
    if ($('#MXXL').prop('checked')){
      sizeIndex = 10;
      sweaterSize = sizes[10].label;
    }
    knitterName = $('#knitter-name').val();
    currentUser = new Knitter (knitterName);
    localStorage.setItem('user', JSON.stringify(currentUser));
    localStorage.setItem('sizes', JSON.stringify(sizes)); 
    $('#submit').hide();
    $('#start-design').fadeIn(300);
  });

  var visited = JSON.parse(localStorage.getItem('visited'));
  var secondTime = function() {
    var $retrieveOldSweater = $('<p><span class="colorize">Hello! It looks like you\'ve been here before.</span></p><p id="second-time">Want to retrieve the sweater you made last time?</p>');
    if (visited === true) {
      $('#enter-name').hide();
      var $newHomeSection = $('<section id="alternate-enter-name"></section>');
      $('.welcome').after($newHomeSection);
      $newHomeSection.append($retrieveOldSweater);
      var $homePatternButton = $('<button id="to-previous-pattern">Yes, view pattern »</button>');
      $('p#second-time').after($homePatternButton);
      var $startNewDesign = $('<p id="startNew">If you\'d like to make a new pattern, clear your old pattern first.</p>');
      $('#alternate-enter-name').append($startNewDesign);
      var $clearButton = $('<button id="clearPattern">Clear old pattern</button>');
      $('p#startNew').after($clearButton);
    }
  }

   $(function() {
    $('#to-previous-pattern').click(function() {
      window.location.href='pattern.html';
    });
  });

  $(function() {
    $('#clearPattern').click(function() {
      localStorage.clear();
      console.log('i hear you');
      $('#alternate-enter-name').hide();
      $('#enter-name').show();
    });
  });
  secondTime();
});

