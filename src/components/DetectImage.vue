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
    import * as cvstfjs from "customvision-tfjs";
    import labels from "raw-loader!../../public/models/labels.txt";
    export default {
        name: 'DetectImage',
        props: {
            msg: String
        },
        data() {
            return {
                image: 0,        // start on image 0
                numImages: 10,   // 12 to start, had to delete two PNGs
                labels: labels,
                // model: null, // had to comment this out for the stackoverflow fix to work 
                predictions: []
            }
        },
        computed: {
            getImgIndex() {
                return `${this.image}`;
            },
            // no disable method needed where we're from :)
        },
        async mounted() {
            this.image = this.randomImage();

            // load up a new model
            this.model = new cvstfjs.ClassificationModel();
            await this.model.loadModelAsync("models/model.json");

            this.model = Object.freeze(this.model) // thanks stackoverflow! https://stackoverflow.com/questions/67815952/vue3-app-with-tensorflowjs-throws-typeerror-cannot-read-property-backend-of-u

            // parse labels
            this.labels = labels.split("\n").map(e => {
                return e.trim();
            });

            // run prediction
            this.predict();
        },
        methods: {
            next() {
                this.image = this.randomImage(); // pick randomly
                this.predictions = [];
                setTimeout(this.predict, 500);
            },
            randomImage() { // pick random image instead
                let choice = Math.floor( Math.random() * this.numImages ); // random choice
                if( choice == this.image ) choice = (choice + 1) % this.numImages; // oops
                return choice
            },
            async predict() {
                //execute inference
                let prediction = await this.model.executeAsync(this.$refs.img);
                let label = prediction[0];
                //build up a predictions object by parsing details to labels and probability
                this.predictions = label.map((p, i) => {
                    return { index: i, label: this.labels[i], probability: p * 100 };
                });
            },
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
