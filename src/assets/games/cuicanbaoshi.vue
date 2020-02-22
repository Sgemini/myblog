<template>
    <div>
        <h1>璀璨宝石</h1>
        <section class='currency-container'>
            <input type="checkbox" value="yellowCurrency" ref='yellow' id='yellow' v-model="chooseUniversalCurrency" @change="universal" />
            <label for='yellow'>黄色(剩余：{{ 5 - yellowCurrency }})</label>
            <input type="checkbox" value="blueCurrency" id='blue' v-model="currencies" @change="handleClick" :disabled="currencies.length > 2" />
            <label for='blue'>蓝色(剩余：{{ currencyCount - blueCurrency }})</label>
            <input type="checkbox" value="redCurrency" id='red' v-model="currencies" @change="handleClick" :disabled="currencies.length > 2" />
            <label for='red'>红色(剩余：{{ currencyCount - redCurrency }})</label>
            <input type="checkbox" value="whiteCurrency" id='white' v-model="currencies" @change="handleClick" :disabled="currencies.length > 2" />
            <label for='white'>白色(剩余：{{ currencyCount - whiteCurrency }})</label>
            <input type="checkbox" value="greenCurrency" id='green' v-model="currencies" @change="handleClick" :disabled="currencies.length > 2" />
            <label for='green'>绿色(剩余：{{ currencyCount - greenCurrency }})</label>
            <input type="checkbox" value="blackCurrency" id='black' v-model="currencies" @change="handleClick" :disabled="currencies.length > 2" />
            <label for='black'>黑色(剩余：{{ currencyCount - blackCurrency }})</label>

            <div>
                <button class='get-currency' @click="takeCurrency">拿币</button>
                <button class='get-currency' @click="cleanSelectCurrency">重选</button>
            </div>
        </section>

        <section class='land-section'>
            <span class='land-prompt'>低地区（剩余{{lowlands.length}}张）</span>
            <Card :cards='showLowlands' :chooseCard='chooseCard' land="low"/>
            <span class='land-prompt'>中地区剩余{{mediumlands.length}}张）</span>
            <Card :cards='showMediumlands' :chooseCard='chooseCard' land="medium"/>
            <span class='land-prompt'>高地区剩余{{highlands.length}}张）</span>
            <Card :cards='showHighlands' :chooseCard='chooseCard' land="high"/>
            <button @click="buyCard">买卡</button>
        </section>
        <section class='assets-section'>
            <div class='currency-container'>
                <div>蓝币：{{ blueCurrency }}</div>
                <div>红币：{{ redCurrency }}</div>
                <div>白币：{{ whiteCurrency }}</div>
                <div>黑币：{{ blackCurrency }}</div>
                <div>绿币：{{ greenCurrency }}</div>
                <div>黄币：{{ yellowCurrency }}</div>
            </div>
            <div class='land-container'>
                <div class='assets-section--land'>蓝地：{{ blueLand }}</div>
                <div class='assets-section--land'>红地：{{ redLand }}</div>
                <div class='assets-section--land'>白地：{{ whiteLand }}</div>
                <div class='assets-section--land'>黑地：{{ blackLand }}</div>
                <div class='assets-section--land'>绿地：{{ greenLand }}</div>
            </div>
            <div class='seizure-container'>

            </div>
        </section>
        <Popup v-if='showPopup' :cancel='cancel' :confirm='confirm' />
    </div>
</template>

<script>
import data from './cuicanbaoshi.json'
import Popup from '../../components/Popup'
import Card from './Card'
// console.log(Popup)
export default {
    data () {
        return {
            currencies: [],
            blueCurrency: 0,
            redCurrency: 0,
            yellowCurrency: 0,
            whiteCurrency: 0,
            blackCurrency: 0,
            greenCurrency: 0,
            currencyCount: 8,

            lowlands: this.random(data.lowland),
            mediumlands: this.random(data.mediumland),
            highlands: this.random(data.highland),
            blueLand: 0,
            redLand: 0,
            whiteLand: 0,
            blackLand: 0,
            greenLand: 0,
            seizureLand: [],
            showLowlands: [],
            showMediumlands: [],
            showHighlands: [],

            chooseUniversalCurrency: false,
            selectedCard: {},
            showPopup: false
        }
    },
    created () {
        this.showLowlands = this.lowlands.slice(0, 4)
        this.showMediumlands = this.mediumlands.slice(0, 4)
        this.showHighlands = this.highlands.slice(0, 4)
        this.lowlands = this.lowlands.filter(val => !this.showLowlands.includes(val))
        this.mediumlands = this.mediumlands.filter(val => !this.showMediumlands.includes(val))
        this.highlands = this.highlands.filter(val => !this.showHighlands.includes(val))
    },
    components: {
        Popup, Card
    },
    methods: {
        handleClick: function () {
            this.$refs.yellow.checked = false
        },
        takeCurrency: function () {
            for (let i = 0; i < this.currencies.length; i++) {
                this[this.currencies[i]] += 1
            }
            if (this.$refs.yellow.checked) { this.yellowCurrency += 1 }
            this.cleanSelectCurrency()
        },
        cleanSelectCurrency: function () {
            this.currencies = []
            this.chooseUniversalCurrency = false
        },
        universal: function () {
            this.currencies = []
        },
        random: function (array) {
            let m = array.length
            let i = null
            while (m) {
                i = (Math.random() * m--) >>> 0;
                [array[m], array[i]] = [array[i], array[m]]
            }
            return array
        },

        chooseCard: function (card, land) {
            this.showPopup = true
            this.selectedCard = card
            debugger
        },

        cancel: function () {
            this.showPopup = false
        },

        confirm: function () {
            this.showPopup = false
        },
        buyCard: function () {

        }
    }
}
</script>

<style scoped lang='scss'>
    section {
        margin: 20px 0;
    }

    .currency-container {
        .get-currency {
            font-size: 18px;
        }
    }

    .assets-section {
        display: flex;
        .currency-container, .land-container {
            flex-grow: 1;
        }
        .assets-section--land {

        }
    }

</style>
