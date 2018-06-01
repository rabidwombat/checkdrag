var checkdrag = function(checkboxes) {
  this.isDragging = false;
  this.dragSetting;
  this.clickBox = function(e) {
    e.preventDefault();
    return false;
  };
  this.mousedownBox = function(e) {
    e.target.checked = !e.target.checked;
    this.isDragging = true;
    this.dragSetting = e.target.checked;
  };
  this.mouseoverBox = function(e) {
    if (this.isDragging) {
      e.target.checked = this.dragSetting;
    }
  };
  this.mouseupDoc = function(e) {
    this.isDragging = false;
  };

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', this.clickBox.bind(this));
    checkbox.addEventListener('mousedown', this.mousedownBox.bind(this));
    checkbox.addEventListener('mouseover', this.mouseoverBox.bind(this));
    document.addEventListener('mouseup', this.mouseupDoc.bind(this));
  });
};
