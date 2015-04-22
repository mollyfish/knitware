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
  sizes.push(new Size('XS', {
    chest: 30, sleeve:16.5, upperArm:9.75, armHole:6.5, waist:24, hips:34, backLength: 16.5}));
  sizes.push(new Size('S', {
    chest:34, sleeve:17, upperArm: 10.25, armHole: 7, waist: 26.5, hips: 36, backLength: 17}));
  sizes.push(new Size('M', {
    chest: 38, sleeve: 17, upperArm: 11, armHole: 7.5, waist: 30, hips: 40, backLength: 17.25}));
  sizes.push(new Size('L', {
    chest: 42, sleeve: 17.5, upperArm: 12, armHole: 8, waist: 34, hips: 44, backLength: 17.5}));
  sizes.push(new Size('XL', {
    chest: 46, sleeve: 17.5, upperArm: 13.5, armHole: 8.5, waist: 38, hips: 48, backLength: 17.75}));
  sizes.push(new Size('XXL', {
    chest: 50, sleeve: 18, upperArm: 15.5, armHole: 9, waist: 42, hips: 53, backLength: 18}));

  $("#nameSave").submit(function () {
    event.preventDefault(); 
    sizeIndex = 0;
    if ($('#XS').prop('checked')){
      sweaterSize = sizes[0].label;
    }
    if ($('#S').prop('checked')){
      sizeIndex = 1;
      sweaterSize = sizes[1].label;
    }
    if ($('#M').prop('checked')){
      sizeIndex = 2;
      sweaterSize = sizes[2].label;
    }
    if ($('#L').prop('checked')){
      sizeIndex = 3;
      sweaterSize = sizes[3].label;
    }
    if ($('#XL').prop('checked')){
      sizeIndex = 4;
      sweaterSize = sizes[4].label;
    }
    if ($('#XXL').prop('checked')){
      sizeIndex = 5;
      sweaterSize = sizes[5].label;
    }
    knitterName = $('#knitter-name').val();
    currentUser = new Knitter (knitterName);
    localStorage.setItem('user', JSON.stringify(currentUser)); // puts currentUser in localStorage with a key of 'user'
    localStorage.setItem('sizes', JSON.stringify(sizes)); //puts sizes array into local storage with a key of 'sizes'
    var visited = JSON.parse(localStorage.getItem('visited'));
    console.log(typeof(visited));
    console.log(visited);

    var secondTime = function() {
      var $retrieveOldSweater = $('<div id="secondTime">Hello! It looks like you\'ve been here before.  Want to retrieve the sweater you made last time?</div>');
      if (visited === true) {
          var box = $('#retrieve').html($retrieveOldSweater);
          console.log(box);
          console.log('I hear you');
      } 
    }
    secondTime();


  });
});

