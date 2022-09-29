AFRAME.registerComponent('pile-remover', {
    init: function () {
        
        this.el.addEventListener('click', function () {
            
            let scale = this.getAttribute('scale');
            let repeat = this.getAttribute('material').repeat;
            console.log(repeat.x + " " + repeat.y);
            console.log("Aahha poopy face " + this.id + " " + scale.x);
            this.setAttribute('scale', {x: 0.85 * scale.x, y: 0.85 * scale.y, z: 0.85 * scale.z});
            let repeatNew = repeat.x * 0.75;
            console.log(repeatNew);
            console.log("${repeatNew}");
            this.setAttribute('material', `repeat: ${repeatNew} ${repeatNew}`);
        });
    }
});

