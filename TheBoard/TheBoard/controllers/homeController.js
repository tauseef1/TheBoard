( function ( homeController ) {

    var data = require( "../data" );

    homeController.init = function ( app ) {

        app.get( "/", function ( req, res ) {
            //res.send( "<html><body><h1>Express</h1></body></html>" );

            data.getNoteCategories( function ( err, results ) {
                res.render( "jade/index", { title: "Express + Jade", error: err, categories: results });
            });

        });

    };

})( module.exports );