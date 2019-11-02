<template>
  <div id='map'>
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
  import L from 'leaflet'

  export default {
    name: 'GruMap',
    props: {
      center: { type: [Array, Object], default: null },
      zoom: { type: Number, default: 5 }
    },
    data () {
      return {
        ready: false,
        layersToAdd: [],
        layerControl: undefined
      }
    },
    mounted () {
      this.mapObject = L.map('map', {
        center: L.latLng(this.center),
        zoom: this.zoom,
        attributionControl: false,
        zoomAnimation: true,
        fadeAnimation: true
      })
      this.ready = true
    },
    methods: {
      registerLayerControl (lControlLayers) {
        console.log('register control layer', this.mapObject)
        this.layerControl = lControlLayers
        this.mapObject.addControl(lControlLayers.mapObject)
        this.layersToAdd.forEach(layer => {
          this.layerControl.addLayer(layer)
        })
        this.layersToAdd = []
      },
      addLayer (layer, visible) {
        if (layer.layerType !== undefined) {
          if (this.layerControl === undefined) {
            this.layersToAdd.push(layer)
          } else {
            this.layerControl.addLayer(layer)
          }
        }
        if (visible) {
          this.mapObject.addLayer(layer.mapObject)
        }
      }
    }
  }
</script>

<style>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
