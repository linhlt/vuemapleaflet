<script>
    import {control} from 'leaflet'

    export default {
        name: 'GruLayerControl',
        mounted() {
            this.mapObject = control.layers(null, null, {
                position: 'topleft'
            })
            console.log(this.$parent)
            this.$parent.registerLayerControl(this)
            this.$nextTick(() => {
                this.$emit('ready', this.mapObject)
            })
        },
        methods: {
            addLayer(layer) {
                if (layer.layerType === 'base') {
                    this.mapObject.addBaseLayer(layer.mapObject, layer.name)
                } else if (layer.layerType === 'overlay') {
                    this.mapObject.addOverlay(layer.mapObject, layer.name)
                }
            }
        },
        render() {
            return null
        }
    }
</script>

<style scoped>

</style>
