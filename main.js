//const product = 'Socks'


const app = Vue.createApp({
    // data for the view goes here
    data(){
        return { 
            product: 'socks with colorful stripes',
            selectedVariant: 0,
            stock: true,
            inventory: 100,
            details: ['50% cotton','40% wool','20% polyester'],
            variants: [
                {id : 1, color : '#2A5038',image: './assets/images/socks_green.jpeg', qty:50},
                {id : 2, color : '#022F3B',image: './assets/images/socks_blue.jpeg', qty:10},
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
        },
        
        addToCart() {
            this.cart = this.cart+1;
            this.inventory = this.inventory-1;
        },

        removeFromCart(){
            this.cart = this.cart-1;
            this.inventory = this.inventory+1;
        },
        emptyCart(){
            this.cart = 0;
            this.inventory = 100;
        },
        updateVariant(index){
            this.selectedVariant = index;
            console.log(index);
        }
    },

    //computed properties
    computed:{
        title(){
            return this.product + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        qty(){
            return this.variants[this.selectedVariant].qty;
        }
    }
    
});