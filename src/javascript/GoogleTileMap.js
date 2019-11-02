import L from 'leaflet'

export const GoogleTileMap = L.TileLayer.extend({
  options: {
    attribution: '&copy; <a href="http://infinigru.com">InfiniGru</a>',
    format: 'png',
    crossOrigin: true,
    urlbase: 'http://mt{0}.google.com/vt/lyrs={1}&z={2}&x={3}&y={4}'
  },
  initialize: function (type, options) {
    this.type = type
    this.server = 0
    L.Util.setOptions(this, options)
  },
  getTileUrl: function (tilePoint) {

    let z = this._getZoomForUrl()
    let x = tilePoint.x
    let y = tilePoint.y
    let s = (this.server + 1) % 4
    return this.options.urlbase.format(s, this.type, z, x, y)
  }
})
String.prototype.format = function () {
  let a = this
  for (let k in arguments) {
    a = a.replace('{' + k + '}', arguments[k])
  }
  return a
}
