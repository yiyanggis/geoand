(function(){
  var pg = require('pg');
  var config=require('../resources/config').config_dev;

  var Arrest=require("./Arrest").Arrest;
  var Market=require("./Market").Market;


  var dbModule = function() {
      var self = this;

      self.pgHost=config.host;
      self.pgPort=config.port;
      self.pgDB=config.database;
      self.pgUser=config.user;
      self.pgCred=config.password;

      self.ConnecDB=function(){
        
        var client = new pg.Client(self.CreateConnStr());

        // connect to our database
        client.connect(function (err) {
          if (err) throw err;

          // execute a query on our database
          client.query('SELECT $1::text as name', ['brianc'], function (err, result) {
            if (err) throw err;

            // just print the result to the console
            console.log(result.rows[0]); // outputs: { name: 'brianc' }

            // disconnect the client
            client.end(function (err) {
              if (err) throw err;
            });
          });
        });
      }

      self.ProcessQuery=function(queryStr){
        var client = new pg.Client(self.CreateConnStr());
        console.log(queryStr);
        // connect to our database
        client.connect(function (err) {
          if (err) throw err;

          // execute a query on our database
          client.query(queryStr, function (err, result) {
            if (err) throw err;

            // just print the result to the console
            console.log(result.rows[0]); // outputs: { name: 'brianc' }

            // disconnect the client
            client.end(function (err) {
              if (err) throw err;
            });
          });
        });
      }

      self.CreateConnStr=function(){
        var connectionStr='postgres://';
        connectionStr+=self.pgUser;
        connectionStr+=":";
        connectionStr+=self.pgCred;
        connectionStr+="@";
        connectionStr+=self.pgHost;
        connectionStr+=":";
        connectionStr+=self.pgPort;
        connectionStr+="/";
        connectionStr+=self.pgDB;

        return connectionStr;
      }

      self.GetArrest=function(id){
        var queryStr="select * from bpd_arrests where gid="+id;
        this.ProcessQuery(queryStr);
      }

  }

  exports.dbModule=dbModule;
  
}).call(this);

