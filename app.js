
// Function to make candy pile progressively smaller on consecutive clicks until a certain point is reached
AFRAME.registerComponent('pile-remover', {
    init: function () {
        
        this.el.addEventListener('click', function () {
            let scale = this.getAttribute('scale');
            let repeat = this.getAttribute('material').repeat;
            let scaleVar = 0.85
            this.setAttribute('scale', {x: scaleVar * scale.x, y: scaleVar * scale.y, z: scaleVar * scale.z});
            let repeatNew = repeat.x * scaleVar;
            this.setAttribute('material', `repeat: ${repeatNew} ${repeatNew}`);
            // if it gets to small, make it "invisible"
            if (scale.x * scaleVar < 0.25) {
                this.setAttribute('scale', "0 0 0");
            }
        });
    }
});

// the method for making the candies clickable/hoverable
AFRAME.registerComponent('funfact-clicker', {
    schema: {
        baseColor: {type: 'string', default: 'orange'}
    },
    //sets the text that will in turn be put into finalVal based on which is clicked
    init: function() {
        let textBox1 = `In our 3D graphic scene, we wanted to recreate a notable artwork done by Felix Gonzalez-Torres. 
        This particular piece is called “Untitled” (Portrait of Ross in L.A.) and represents the passing of his lover who unfortunately was taken by AIDS.`;
        
        let textBox2 = `The piece is a pile of candy that roughly weighs around 175lbs and represents the body weight of Torres's lover.
        The exhibit is meant to be interactive and allows individuals to remove a piece of candy, a representation of the virus taking Torres's lover piece by piece.`;
        
        let textBox3 = `The candy doesn't only represent the virus exhausting the body of his lover but the love that remains.
        Candy has long been tied to affection and is often given to loved ones. While the candy is eaten the love remains.`;
        
        let textBox4 = `This 3D graphic scene is meant to create a VR experience that imitates the exhibit whichis currently held at the Art Institute of Chicago.
        You can click on the candy pile and it will reduce in size until there's nothing left.`;
        let finalVal ="blankString";
        //the click function that loads the correct textbox
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
            target.setAttribute('text', `value: ${finalVal}`);
            target.setAttribute('scale', "1 1 1");
        });

        //hover method to clarify which one the user is about to click
        this.el.addEventListener('mouseenter', function () {
            this.setAttribute('material', 'color: #F4E2FC');
        });

        this.el.addEventListener('mouseleave', function () {
            this.setAttribute('material', `color: ${this.getAttribute('funfact-clicker').baseColor}`)
        });
    }
});

//method for making the textbox disappear on click
AFRAME.registerComponent('click-to-disappear', {
    init: function () {
        this.el.addEventListener('click', function () {
            this.setAttribute('scale', "0 0 0");
        });
    }
});