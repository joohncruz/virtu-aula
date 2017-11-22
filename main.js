$ = (element) => document.querySelector(element);
console.log(window.location)

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

        if(data == 'meu-avatar') {
          window.location = 'https://joohncruz.github.io/virtu-aula/avatar'
        }
        
        if(data == 'voltar') {
          window.location = 'https://joohncruz.github.io/virtu-aula/'
        }

        if(data == 'sala-de-aula') {
          window.location = 'https://joohncruz.github.io/virtu-aula/sala'
        }

        console.log('preciso mudar de tela agora kkk')  
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
});