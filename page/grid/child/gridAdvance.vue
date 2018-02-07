<template>
    <div class="gridBox">
        <p>advance</p>
        <div class="container">
            <div class="item item-a">one</div>
            <div class="item item-b">two</div>
            <div class="item item-c">three</div>
            <div class="item item-d">four</div>
            <!-- <div class="item">five</div>
            <div class="item">six</div>
            <div class="item">seven</div>
            <div class="item">eight</div> -->
        </div>
    </div>

</template>
<script>
    export default {
        name: 'gridAdvance',
        data() {
            return {
                
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