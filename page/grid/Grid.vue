<template>
    <div class="gridBox">
        <button @click="componentId = 'gridBasic'">gridBasic</button>
        <button @click="componentId = 'gridAdvance'">gridAdvance</button>
        <component :is="componentId"></component>
    </div>
</template>
<script>
import gridBasic from './child/gridBasic.vue'
import gridAdvance from './child/gridAdvance.vue'
    export default {
        name: 'grid',
        components: {
             gridBasic,
             gridAdvance
        },
        data() {
            return {
                componentId: 'gridBasic'
            }
        }
    }
</script>
<style lang="scss" scoped>
    $girdContainerHeight: 600px;
    .gridBox {
        box-sizing: border-box;
        border: 1px solid black;
    }

    .container {
        width: 100%;
        height: $girdContainerHeight;
        display: grid; 
        grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
        grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
        // grid-template-columns: 1fr 50px 1fr 1fr;
        // grid-template-columns: 50px 50px 50px 50px;
        // grid-template-rows: auto;
        // grid-template-areas: "header header header header" "main main . sidebar" "footer footer footer footer";
        grid-column-gap: 10px;
        grid-row-gap: 15px;
        justify-items: end;
        align-items: end;
        justify-content: end; 
    }

    .item {
        box-sizing: border-box;
        border: 1px solid cyan;
    }

    // .item-a {
    //     grid-area: header;
    //     background: #4876dc;
    // }

    // .item-b {
    //     grid-area: main;
    //     background: #f5dc34;
    // }

    // .item-c {
    //     grid-area: sidebar;
    //     background: #ad4b3e;
    // }

    // .item-d {
    //     grid-area: footer;
    //     background: #80b762;
    // }
</style>