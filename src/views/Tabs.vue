<template>
  <div>
    <ul>
      <li
        v-for="(tab, index) in tabsProps.tabs"
        :key="index"
        :class="{ _active: index === tabsProps.selectedTab }"
        @click="setActiveTabIndex(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('header', {
      tabsProps: state => state.company.admin.partners.tabsProps
    })
  },

  mounted() {
    this.setActiveTabAuto('company.admin.partners')
  },

  methods: {
    ...mapActions('header', {
      setActiveTabIndex: 'setActiveTabIndex',
      setActiveTabAuto: 'setActiveTabAuto'
    })
  }
}
</script>

<style scoped>
._active {
  color: royalblue;
}
</style>
