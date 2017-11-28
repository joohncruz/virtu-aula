$ = (element) => document.querySelector(element)

// Cena
let sceneMenu = $('a-scene')

// Titulos
let textMenu = "value: VirtuAula; font: #exoFont; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; size: 1.5; height: 0.5;"
let textAvatar = "value: Meu Avatar; font: #exoFont; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; size: 1.5; height: 0.5;"
let textSala = "value: Sala de Aula; font: #exoFont; bevelEnabled: true; bevelSize: 0.1; bevelThickness: 0.1; curveSegments: 1; size: 1.5; height: 0.5;"

// Menu
let planeAvatar = $('a-plane#plane-avatar')
let planeSala = $('a-plane#plane-sala')

// Sala
let planeManutencao = $('a-plane#plane-manutencao')

// Avatar 
let planeMasculino = $('a-plane#plane-masculino')
let planeFeminino = $('a-plane#plane-faminio')
let modeloMasculino = $('a-entity#modelM')
let modeloFeminino = $('a-entity#modelF')

// Contexto
let planeVoltar = $('a-plane#plane-Voltar')
let title = $('a-entity#menu-title')

// Metodos

let load = () => {
    if($('a-plane#plane-Voltar')) sceneMenu.removeChild(planeVoltar)
    if($('a-plane#plane-manutencao')) sceneMenu.removeChild(planeManutencao)

    if($('a-plane#plane-masculino')) sceneMenu.removeChild(planeMasculino)
    if($('a-plane#plane-faminio')) sceneMenu.removeChild(planeFeminino)
    if($('a-entity#modelM'))  sceneMenu.removeChild(modeloMasculino)
    if($('a-entity#modelF'))  sceneMenu.removeChild(modeloFeminino)
    
} 
load();

let removeMenu = () => {
    if($('a-plane#plane-avatar')) sceneMenu.removeChild(planeAvatar)
    if($('a-plane#plane-sala')) sceneMenu.removeChild(planeSala)
}

let addMenu = () => {
    sceneMenu.appendChild(planeAvatar)
    sceneMenu.appendChild(planeSala)
}

// Transition 
let transitionAvatar = () => {
    removeMenu()

    sceneMenu.appendChild(planeMasculino)
    sceneMenu.appendChild(planeFeminino)
    sceneMenu.appendChild(modeloMasculino)
    sceneMenu.appendChild(planeVoltar)
    title.attributes[3].value = textAvatar
}

let transitionSala = () => {
    removeMenu()
    sceneMenu.appendChild(planeVoltar)
    sceneMenu.appendChild(planeManutencao)
    title.attributes[3].value = textSala
}

let transitionMenu = () => {
    title.attributes[3].value = textMenu
    addMenu()
    load();
    
}

// Alter Elements
let alterModelMasculino = () => {
    if($('a-entity#modelF'))  sceneMenu.removeChild(modeloFeminino)
    sceneMenu.appendChild(modeloMasculino)
    
}

let alterModelFeminino = () => {
    if($('a-entity#modelM'))  sceneMenu.removeChild(modeloMasculino)
    sceneMenu.appendChild(modeloFeminino)
    
}