let checkdrag = function(checkboxes, options = {}) {
  let intObj = {
    isDragging: false,
    dragSetting: undefined,
    clickBox: e => e.preventDefault(),
    mouseDownBox: e => {
      this.dragSetting = e.target.checked = !e.target.checked;
      this.isDragging = true;
    },
    mouseOverBox: e => {if (this.isDragging) e.target.checked = this.dragSetting},
    mouseUpDoc: e => this.isDragging = false
  }

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', intObj.clickBox.bind(intObj));
    checkbox.addEventListener('mousedown', intObj.mouseDownBox.bind(intObj));
    checkbox.addEventListener('mouseover', intObj.mouseOverBox.bind(intObj));
    document.addEventListener('mouseup', intObj.mouseUpDoc.bind(intObj));
  });
};
