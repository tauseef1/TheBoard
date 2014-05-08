﻿( function ( homeController ) {

    var data = require( "../data" );

    homeController.init = function ( app ) {

        app.get( "/", function ( req, res ) {
            //res.send( "<html><body><h1>Express</h1></body></html>" );

            data.getNoteCategories( function ( err, results ) {
                res.render( "jade/index", { title: "The Board", error: err, categories: results });
            });
        });

        app.post( "/newCategory", function ( req, res ) {
            var categoryName = req.body.categoryName;
            data.createNewCategory( categoryName, function ( err ) {
                if ( err ) {
                    console.log( err );
                    res.redirect( "/" );
                }
                else {
                    console.log("Created new category: " + categoryName);
                    res.redirect("/notes/" + categoryName);
                }
            });
        });

    };

})( module.exports );