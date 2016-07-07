(function(){
  var GeoEvent=require("./geoEvent").GeoEvent;

  var Arrest = function(geometry, time, attributes) {
      var self = this;

      GeoEvent.call(this,geometry, time, attributes);

  }

  Arrest.prototype = Object.create(GeoEvent.prototype);

  Arrest.prototype.constructor = Arrest;

  exports.Arrest=Arrest;
  
}).call(this);

