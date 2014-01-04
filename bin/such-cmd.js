#!/usr/bin/env node
var doge = require('../lib/such-code.js'),
                colors = require("colors"),
        wow, such = process.argv.slice(2);

if (!such.length)
  such = ["doge", "excite", "node", "scalability", "mongo", "webscale", "node.js", "hacking"];

                for ( var suchLines = 0; suchLines
     < Math.random()*30|0      // wow so random
                                        ; suchLines ++) 
              { // so excite
           
                                             if (Math.random() > 0.5 ) {
                      process.stdout.write("\n");
                }
                          
                          wow = such[
                                        such.length
          * Math.random() | 0 ];
                
           
        for (var muchCols = 0 ;       muchCols <
                Math.random()*200|0                  ; muchCols++) {
                    process.stdout.write(" ")
                }
  var soRandomness = Math.random()*9|0,
  
  suchColor = [
              "green"
                    ,"red",
                                "grey", "blue", "white"
,"magenta"  ,"cyan",
                                                   "rainbow",
                      "yellow"][soRandomness];

                    console.log(String(doge(
                      // such random
                              wow))[suchColor]
            );   
            
    }
