$ = (element) => document.querySelector(element);

AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
      to: {default: '2.5 2.5 2.5'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        this.setAttribute('scale', data.to);
      });
    }
});

AFRAME.registerComponent('cursor-panel', {
    schema: {type: 'string'},
    init: function () {
      var data = this.data;

      this.el.addEventListener('click', function (evt) {
        console.log(data)  
        console.log('preciso mudar de tela agora kkk')  
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
});