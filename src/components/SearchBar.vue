
<template>
    <div class="searchbar"> 
        <input placeholder="Search wines..." v-model="search"          @input="onChange" @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter" type="text" />
        <ul v-show="isOpen" class="searchbar-results">
            <li v-for="(result, i) in results" :key="i"  @click="setResult(result)" class="searchbar-result" :class="{ 'is-active': i === arrowCounter }">
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
      arrowCounter: -1
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  unmounted() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    setResult(result) {
      this.search = result;
      this.isOpen = false;
      },
    filterResults() {
      this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    },
    onChange() {
      this.filterResults();
      this.isOpen = true;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.arrowCounter = -1;
        this.isOpen = false;
      }
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter];
      this.arrowCounter = -1;
      this.isOpen = false;
    }
  },
};
</script>

<style>
  .searchbar {
    position: relative;
    width: auto; 
  }

  .searchbar-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    min-height: 1em;
    max-height: 6em;    
    overflow: auto;
  }

  .searchbar-result {
    list-style: none;
    text-align: center;
    padding: 4px 2px;
    cursor: pointer;
    width: auto;
  }
  .searchbar-result.is-active,
  .searchbar-result:hover {
    background-color: #e0d49d;
    color: white;
  }
</style>