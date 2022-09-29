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


AFRAME.registerComponent('funfact-clicker', {
    schema: {
        clicked: {type: 'boolean', default: false},
        baseColor: {type: 'string', default: 'orange'}
    },

    init: function() {
        // let clicked = false;
        let textBox1 = "gg it worked";
        let textBox2 = "boo";
        let textBox3 = "ashas";
        let finalVal ="you screwed up";
        
        let clickCheck = this.data.clicked;
        let candy1 = document.querySelector('#candy2');
        let candy2 = document.querySelector('#candy2');
        // candy2.setAttribute('clicked', false);
        let candy3 = document.querySelector('#candy3').getAttribute('funfact-clicker');
        // candy3.setAttribute('clicked', false);
        console.log(candy2);
        console.log(candy3);
        
        

        this.el.addEventListener('click', function () {
            let selected = this.id.toString();
            
            //sets the correct message based on which object was clicked
            switch (selected) {
                case "candy1":
                    finalVal = textBox1;
                    console.log(finalVal + " from candy1");
                    break;
                case "candy2":
                    finalVal = textBox2;
                    console.log(finalVal + " from candy2");
                    break;
                case "candy3":
                    finalVal = textBox3;
                    console.log(finalVal + " from candy3");
                    break;
                default:
                    finalVal = "you screwed up";
                    break;
            }

            let target = document.querySelector('#sampleText');
            console.log(selected + ": " + finalVal);
            //if not currently on, sets correct value, and turns it on, then sets flag var to on
            target.setAttribute('value', finalVal);
            target.setAttribute('scale', "1 1 1");
        });

        this.el.addEventListener('mouseenter', function () {
            this.setAttribute('material', 'color: #A4E2CC');
        });

        this.el.addEventListener('mouseleave', function () {
            this.setAttribute('material', `color: ${this.getAttribute('funfact-clicker').baseColor}`)
        });
    }
});

AFRAME.registerComponent('click-to-disappear', {
    init: function () {
        this.el.addEventListener('click', function () {
            // console.log("big weenis");
            this.setAttribute('scale', "0 0 0");
        });
    }
});