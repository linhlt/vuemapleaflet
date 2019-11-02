<template>
  <div>
    <slot v-if="ready"></slot>
  </div>
</template>
<script>
  import { MarkerClusterGroup } from 'leaflet.markercluster'
  import { findRealParent } from '../javascript/Utils'

  export default {
    name: 'GruClusterGroup',
    props: {
      visible: {
        type: Boolean, default: true
      },
      name: { type: String, default: '' }
    },
    data () {
      return {
        ready: false,
        layerType: 'overlay'

      }
    },
    mounted () {
      this.mapObject = new MarkerClusterGroup()
      this.parentContainer = findRealParent(this.$parent)
      console.log('cluster layer', this.parentContainer)
      this.parentContainer.addLayer(this, this.visible)
      this.ready = true
    },
    methods: {
      addMaker (maker) {
        this.mapObject.addLayer(maker)
      }
    }

  }
</script>

<style scoped>

</style>
