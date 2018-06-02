'use strict';

var checkdrag = function checkdrag(checkboxes) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var intObj = {
    isDragging: false,
    dragSetting: undefined,
    clickBox: function clickBox(e) {
      return e.preventDefault();
    },
    mouseDownBox: function mouseDownBox(e) {
      _this.dragSetting = e.target.checked = !e.target.checked;
      _this.isDragging = true;
    },
    mouseOverBox: function mouseOverBox(e) {
      if (_this.isDragging) e.target.checked = _this.dragSetting;
    },
    mouseUpDoc: function mouseUpDoc(e) {
      return _this.isDragging = false;
    }
  };

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('click', intObj.clickBox.bind(intObj));
    checkbox.addEventListener('mousedown', intObj.mouseDownBox.bind(intObj));
    checkbox.addEventListener('mouseover', intObj.mouseOverBox.bind(intObj));
    document.addEventListener('mouseup', intObj.mouseUpDoc.bind(intObj));
  });
};