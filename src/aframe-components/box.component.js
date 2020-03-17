// https://stackoverflow.com/questions/35710130/shadow-catcher-in-three-js-shadow-on-transparent-material/35711403#35711403
AFRAME.registerComponent("box", {
  init: function() {
    var el = this.el;

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );

    el.setObject3D("mesh", cube);
  }
});