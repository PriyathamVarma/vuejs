//const product = 'Socks'


const app = Vue.createApp({
    // data for the view goes here
    data(){
        return { 
            product: 'socks with colorful stripes',
            image: './assets/images/socks_blue.jpeg',
            stock: true,
            inventory: 100,
            details: ['50% cotton','40% wool','20% polyester'],
            variants: [
                {id : 1, color : 'green',image: './assets/images/socks_green.jpeg'},
                {id : 2, color : 'blue',image: './assets/images/socks_blue.jpeg'},
            ],
            cart : 10000
        }
    },

    //methods goes here
    methods: {
        cartFunc(){
                this.cart = 0 ;
        },
        updateImage(variantImage){
            this.image = variantImage;
        }
    }
    
});