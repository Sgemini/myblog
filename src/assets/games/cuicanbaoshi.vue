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
      <span class='land-prompt'>低地区</span>
      <div class='land-level'>
        <div v-for='lowland in lowlands' :key='lowland.id' class='land-card' :style="{backgroundColor: lowland.color}" :data-cost="lowland.cost">
          <div>颜色：{{lowland.color}}</div>
          <div>积分：{{lowland.integral}}</div>
          <div>花费：{{lowland.cost}}</div>
        </div>
      </div>
      <span class='land-prompt'>中地区</span>
      <div class='land-level'>
        <div class='land-card'>M1</div>
        <div class='land-card'>M2</div>
        <div class='land-card'>M3</div>
        <div class='land-card'>M4</div>
      </div>
      <span class='land-prompt'>高地区</span>
      <div class='land-level'>
        <div class='land-card'>H1</div>
        <div class='land-card'>H2</div>
        <div class='land-card'>H3</div>
        <div class='land-card'>H4</div>
      </div>
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
 </div>
</template>

<script>
import data from './cuicanbaoshi.json'
console.log(data)
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

      lowlands: data.lowland,
      mediumlands: data.mediumland,
      highlands: data.highland,
      blueLand: 0,
      redLand: 0,
      whiteLand: 0,
      blackLand: 0,
      greenLand: 0,
      seizureLand: [],

      chooseUniversalCurrency: false
    }
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
      height: 125px;
      flex-shrink: 0;
      margin-right: 10px;
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
