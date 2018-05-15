<template src="./image-carousel.vue.html"></template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component({})
export default class extends Vue {
    @Prop()
    images: string;
    @Prop()
    itemWidth: string;

    currentIndex = 0;

    get imageList(): string[] {
        return JSON.parse(this.images);
    }

    get imageRange(): number [] {
        return Array.from({length:this.imageList.length}, (k, v) => v);
    }

    onPreviousClick() {
        if(this.currentIndex > 0) {
            --this.currentIndex;
        }
    }

    onNextClick() {
        if(this.currentIndex < this.imageRange.length - 1) {
            ++this.currentIndex;
        }
    }
}

</script>
