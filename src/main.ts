import ImageCarousel from "./components/ImageCarousel.vue";
import Vue from "vue";

const vue = new Vue({
    el: "#main",
    components: {
        "image-carousel": ImageCarousel
    }
});
