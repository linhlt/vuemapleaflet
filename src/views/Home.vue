<template>
  <gru-map :center="center" :zoom="zoom">
    <gru-tile-layer name="Google Map" v-bind:google-tile="true" v-bind:visible="true" source="m"></gru-tile-layer>
    <gru-tile-layer name="Google Earth" v-bind:google-tile="true" source="y"></gru-tile-layer>
    <gru-tile-layer source="http://{s}.tile.osm.org/{z}/{x}/{y}.png" name="openStreetMap"></gru-tile-layer>
    <gru-layer-control></gru-layer-control>
    <gru-cluster-group name="ATM">
      <gru-maker v-for="p in markers" :lat-lng="p.point" :popup="p.popup" :key="p.id"></gru-maker>
    </gru-cluster-group>
  </gru-map>
</template>

<script>
  // @ is an alias to /src
  import GruMap from '../components/GruMap'
  import GruLayerControl from '../components/GruLayerControl'
  import GruTileLayer from '../components/GruTileLayer'
  import GruClusterGroup from '../components/GruClusterGroup'
  import GruMaker from '../components/GruMaker'

  export default {
    name: 'home',
    components: {
      GruMaker,
      GruClusterGroup,
      GruTileLayer,
      GruLayerControl,
      GruMap
    },
    data () {
      return {
        center: [17.04638, 106.37734],
        zoom: 5,
        markers: points
      }
    }
  }
  const points = [
    { id: 1, point: [21.33102, 107.3977], popup: 'maker 1' },
    { id: 2, point: [20.33102, 107.3977], popup: 'maker 2' },
    { id: 3, point: [19.33102, 107.3977], popup: 'maker 3' }
  ]
</script>
