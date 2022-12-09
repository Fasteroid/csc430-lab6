<template>
    <div>
        <h1>{{ msg }}</h1>
        <div>
            <img class="image" ref="img" :src="require('../assets/images/' + getImgIndex + '.jpg')" />
        </div>
        <div>
            <!-- not disabling the button -->
            <button class="button" @click="next()">Next</button> 
        </div>
        <div v-for="pred in predictions" :key="pred.index">
            {{ pred.label }}: {{ pred.probability.toFixed(0) + '%' }}
        </div>
        <div v-if="!predictions.length">hmm.....</div>
    </div>
</template>

<script>
    export default {
        name: 'DetectImage',
        props: {
            msg: String
        },
        data() {
            return {
                image: 0,        // start on image 0
                numImages: 10,   // 12 to start, had to delete two PNGs
                predictions: [], // prevents reference undefined
            }
        },
        computed: {
            getImgIndex() {
                return `${this.image}`;
            },
            // no disable method needed where we're from :)
        },
        methods: {
            next() {
                this.image = this.randomImage(this.image); // wrap around
                this.predictions = [];
                setTimeout(this.predict, 500);
            },
            randomImage(prev) { // pick random image instead
                let choice = Math.floor( Math.random() * this.numImages ); // random choice
                if( choice == prev ) choice = (choice + 1) % this.numImages; // oops
                return choice
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    .image {
        min-height: 300px;
        max-height: 300px;
        max-width: 100%;
    }
    .button {
        width: 200px;
        height: 50px;
        border-radius: 5px;
        background-color: blueviolet;
        color: white;
        font-size: 20pt;
        margin: 10px;
    }
    .button:disabled,
    .button[disabled] {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
    }
</style>
