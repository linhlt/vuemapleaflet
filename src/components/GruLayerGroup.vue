<script>
    import L from 'leaflet'
    import {findRealParent} from '../javascript/Utils'

    export default {
        name: 'GruLayerGroup',
        data() {
            return {
                layerType: 'overlay'
            }
        },
        props: {
            name: {type: String, default: null},
            visible: {type: Boolean, default: true}
        },
        mounted() {
            this.mapObject = new L.FeatureGroup()
            this.parentContainer = findRealParent(this.$parent);
            this.parentContainer.addLayer(this)
        },
        render() {
            return null;
        }
    }
</script>

<style scoped>

</style>
