$(function() {
  var listPile = new List("#cardPile");
  for (var i = 0; i < 10; i++) {
    var item = new Item(i);
    listPile.element.append(item.element);
    listPile.array.push(item.value);
  };

  var listSlot = new List("#cardSlots");
  $( ".draggable" ).draggable({helper: 'clone',
    drag: function(event, ui) {
      sum = 0;
      dive = this;
      val = $(this).text();
      var div = new Item(val);
      $(".droppable").droppable({
        drop: function(event, ui) {
          if (listSlot.array.length < 10) {
            listSlot.element.append(div.element);
            listSlot.array.push(div.value);
            for (var i = 0; i < listSlot.array.length; i++) {
              sum += Number(listSlot.array[i]);
            };
            $("#total_sum").text(sum);
          };
        }
      });
    }
  });
});


var Item = function(value){
  var self = this;
  function initialize(){
    self.value = value;
    self.element = "<div class='draggable'>" + value + "</div>";
  };
  initialize();
};


var List = function(selector){
  var self = this;
  function initialize(){
    self.array = new Array();
    self.element = $(selector);
  };
  initialize();
};
