AFRAME.registerComponent('pile-remover', {
    init: function () {
        
        this.el.addEventListener('click', function () {
            
            let scale = this.getAttribute('scale');
            let repeat = this.getAttribute('material').repeat;
            console.log("Aahha poopy face " + this.id + " " + scale.x);
            this.setAttribute('scale', {x: 0.85 * scale.x, y: 0.85 * scale.y, z: 0.85 * scale.z});
            let repeatNew = repeat.x * 0.85;
            this.setAttribute('material', `repeat: ${repeatNew} ${repeatNew}`);
            if (scale.x * 0.85 < 0.35) {
                this.setAttribute('scale', "0 0 0");
            }
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
        let textBox1 = `In our 3D graphic scene, we wanted to recreate a notable artwork done by Felix Gonzalez-Torres. 
        This particular piece is called “Untitled” (Portrait of Ross in L.A.) and represents the passing of his lover who unfortunately was taken by AIDS.`;
        
        let textBox2 = `The piece is a pile of candy that roughly weighs around 175lbs and represents the body weight of Torres's lover.
        The exhibit is meant to be interactive and allows individuals to remove a piece of candy, a representation of the virus taking Torres's lover piece by piece.`;
        
        let textBox3 = `The candy doesn't only represent the virus exhausting the body of his lover but the love that remains.
        Candy has long been tied to affection and is often given to loved ones. While the candy is eaten the love remains.`;
        
        let textBox4 = `This 3D graphic scene is meant to create a VR experience that imitates the exhibit whichis currently held at the Art Institute of Chicago.
        You can click on the candy pile and it will reduce in size until there's nothing left.`;
        let finalVal ="blankString";
        
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
                    break;
                case "candy2":
                    finalVal = textBox2;
                    break;
                case "candy3":
                    finalVal = textBox3
                    break;
                case "candy4":
                    finalVal = textBox4;
                    break;
                default:
                    finalVal = "you screwed up";
                    break;
            }

            let target = document.querySelector('#textBox');
            console.log(selected + ": " + finalVal);
            //if not currently on, sets correct value, and turns it on, then sets flag var to on
            target.setAttribute('text', `value: ${finalVal}`);
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