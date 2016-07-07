(function(){
  var GeoLoc=require("./geoLoc").GeoLoc;

  var Market=function(geometry,attributes,name) {

      GeoLoc.call(this, geometry,attributes);

      var self = this;
      self.name=name;
  }

  Market.prototype = Object.create(GeoLoc.prototype);

  Market.prototype.constructor = Market;

  exports.Market=Market;
  
}).call(this);

