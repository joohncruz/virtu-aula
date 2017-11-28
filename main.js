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
          transitionAvatar()
          //window.location = 'https://joohncruz.github.io/virtu-aula/avatar'
        }
        
        if(data == 'voltar') {
          transitionMenu()
          //window.location = 'https://joohncruz.github.io/virtu-aula/'
        }

        if(data == 'sala-de-aula') {
          transitionSala()
          //window.location = 'https://joohncruz.github.io/virtu-aula/sala'
        }

        if(data == 'avatar-feminino') {
          alterModelFeminino()
        }

        if(data == 'avatar-masculino') {
          alterModelMasculino()
        }
        
        console.log('preciso mudar de tela agora kkk')  
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
});




