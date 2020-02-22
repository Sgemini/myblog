<template>
    <div class='land-level'>
        <div v-for='card in cards' :key='card.id' class='land-card' :style="{backgroundColor: card.color}" :data-id="card.id" @click='chooseCard'>
            <div>颜色：{{card.color}}</div>
            <div>积分：{{card.integral}}</div>
            <div v-for='cost in Object.keys(card.cost)' :key='cost.key'>
                <div :class="cost + '-cost'"></div>
                <span>{{card.cost[cost]}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        // cards: {
        //     type: Array,
        //     default: []
        // },
        land: {
            type: String,
            default: ''
        }
    },
    methods: {
        chooseCard: function (e) {
            let card = this.cards.find(c => c.id === e.currentTarget.dataset.id)
            this.$parent.chooseCard(card, this.land)
        }
    }

}
</script>

<style scoped lang='scss'>
    .land-level::-webkit-scrollbar { display:none }

    .land-section {
        .land-level {
            display: flex;
            align-items: center;
            overflow-x: auto;
            margin-bottom: 30px;
        }
        .land-prompt {
            margin-right: 20px;
        }
        .land-card {
            border: 1px solid black;
            width: 100px;
            height: 150px;
            flex-shrink: 0;
            margin-right: 10px;
        }
    }

    .blue-cost, .red-cost, .black-cost, .white-cost, .green-cost {
        display: inline-block;
        border-radius: 50%;
        width: 20px;
        height: 20px;
    }

    .blue-cost {
        background-color: blue;
    }

    .red-cost {
        background-color: red;
    }

    .black-cost {
        background-color: black;
    }

    .white-cost {
        background-color: white;
    }

    .green-cost {
        background-color: green;
    }
</style>
