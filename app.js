let x = 1;


AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var lastIndex = -1;
      var COLORS = ['red', 'green', 'blue'];
      this.el.addEventListener('click', function (evt) {
        // lastIndex = (lastIndex + 1) % COLORS.length;
        // this.setAttribute('material', 'color', COLORS[lastIndex]);
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
  });

AFRAME.registerComponent('pile-remover', {
    init: function () {
        this.el.addEventListener('click', function () {
            console.log("Aahha poopy face");
            this.setAttribute('visible', 'false');
        });
    }
});