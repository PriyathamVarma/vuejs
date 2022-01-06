app.component('product-display',{

  props:{
    premium : {
      type: Boolean,
      required: true
    }
  },
    template: 
    /*html*/
    `      <!--- product display div element --->
    <div class="product-display">

      <!--- product container div element --->
      <div class="product-container">

        <!--- product image div element --->
        <div class="product-image">
          <!-- Image goes here -->
          <image :src="image"/>
          <p style="margin-left:40px">Quantity of products : {{qty}}</p>

        <!--- End of product image div element --->  
        </div>
        <!-- product info div element -->
        <div class="product-info">

          <h1> PRODUCTS </h1>
          <h2> {{title}} </h2>
          <h3>Shipping : {{shipping}}</h3>
          <h2>{{ product }}</h2>
          <p v-if='stock' > In Stock </p>
          <p v-if='inventory <= 100 && inventory >10'>Fast Selling. Only <span>{{inventory}}</span>  available now</p>
          <p v-else='stock'> Out of Stock </p>
          <p v-show="stock"> Stock Options </p>

          <ul>
            <li v-for="detail in details"> {{detail}} </li>
          </ul>

          <div v-for="(variant,index) in variants" 
               v-bind:key="variant.id"                  
               v-on:mouseover="updateVariant(index)"
               class="color-circle"
               v-bind:style="{ backgroundColor : variant.color }">
          </div>

          <button class = "button"
                  v-on:click = "addToCart"
                  v-bind:class = "{disabledButton : !stock}"
                  v-bind:disabled = '!stock'>
                  Add To Cart
          </button>

          <button class="button" 
                  v-on:click="removeFromCart">
                  Remove From Cart
          </button>

          <button class="button"
                  v-on:click="emptyCart">
                  Empty Cart
          </button>
          <!-- NOTE : ******* instead of v-on:click it can be written as @click ******** -->

        </div>
        <!--End of product info div element -->

      <!--- End of product container div element --->  
      </div>

    <!--- End of product display div element --->  
    </div>`,

    //data, methods and properties

        // data for the view goes here
     data(){
          return { 
              product: 'socks with colorful stripes',
              selectedVariant: 0,
              stock: true,
              details: ['50% cotton','40% wool','20% polyester'],
              variants: [
                  {id : 1, color : '#2A5038',image: '../assets/images/socks_green.jpeg', qty:50},
                  {id : 2, color : '#022F3B',image: '../assets/images/socks_blue.jpeg', qty:10},
              ]
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
          },
          shipping(){
            if(this.premium){
              return "Free"
            }
            return 3;

          }
      }

});