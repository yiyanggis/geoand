(function(){


    var GeoEvent = function(geometry, time, attributes) {
      var self = this;

      self.geometry=geometry;
      self.time=time;
      self.attributes=attributes;

  }

  exports.GeoEvent=GeoEvent;
  
}).call(this);

