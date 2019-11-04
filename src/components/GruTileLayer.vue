<script>
    import L from 'leaflet'
    import {findRealParent} from '../javascript/Utils'
    import {GoogleTileMap} from '../javascript/GoogleTileMap'

    export default {
        name: 'GruTileLayer',
        data() {
            return {
                layerType: 'base'
            }
        },
        props: {
            source: {type: String, default: ''},
            name: {type: String, default: 'Tile Layer'},
            googleTile: {type: Boolean, default: false},
            visible: {type: Boolean, default: false}
        },
        mounted() {
            if (this.googleTile) {
                this.mapObject = new GoogleTileMap(this.source === '' ? 'm' : this.source)
            } else {
                this.mapObject = L.tileLayer(this.source)
            }
            this.parentContainer = findRealParent(this.$parent)
            this.parentContainer.addLayer(this, this.visible)
        },
        render() {
            return null
        }
    }
</script>

<style scoped>

</style>
