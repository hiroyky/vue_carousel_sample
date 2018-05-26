<template src="./image-carousel.vue.html"></template>

<script lang="ts">
import Vue from "vue";
import VueTouch from "vue-touch";
Vue.use(VueTouch, {name: 'v-touch'})
import {Component, Prop} from "vue-property-decorator";

@Component({})
export default class extends Vue {
    @Prop()
    protected images: string[];
    @Prop()
    protected itemWidth: number;

    currentIndex = 0;

    get imageList(): string[] {
        return this.images;
    }

    get imageRange(): number [] {
        return Array.from({length:this.imageList.length}, (k, v) => v);
    }

    get wholeWidth(): number {
        return this.itemWidth * this.imageList.length;
    }

    get margin(): number {
        return this.currentIndex * -1 * this.itemWidth;
    }

    onPreviousClick() {
        this.displayPrevious();
    }

    onNextClick() {
        this.displayNext();
    }

    onSwipeLeft() {
        this.displayNext();
    }

    onSwipeRight() {
        this.displayPrevious();
    }

    protected displayPrevious() {
        if(this.currentIndex > 0) {
            --this.currentIndex;
        }
    }
    protected displayNext() {
        if(this.currentIndex < this.imageRange.length - 1) {
            ++this.currentIndex;
        }
    }
}

</script>
