//const product = 'Socks'


const app = Vue.createApp({
    data(){
        return { 
            product: 'socks with colorful stripes',
            image: './assets/images/socks_blue.jpeg',
            stock: true,
            inventory: 100,
            details: ['50% cotton','40% wool','20% polyester'],
            variants: [
                {id : 1, color : 'green'},
                {id : 2, color : 'blue'},
            ]
        }
    }
});