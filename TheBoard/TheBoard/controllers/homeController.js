( function ( homeController ) {

    var data = require( "../data" );

    homeController.init = function ( app ) {

        app.get( "/", function ( req, res ) {
            //res.send( "<html><body><h1>Express</h1></body></html>" );

            data.getNoteCategories( function ( err, results ) {
                res.render( "jade/index",
                    {
                        title: "The Board",
                        error: err,
                        categories: results,
                        newCatError: req.flash( "newCatName" )
                    });
            });
        });

        app.get( "/notes/:categoryName", function ( req, res ) {
            var categoryName = req.params.categoryName;
            data.getNotes( categoryName, function ( err, notes ) {
                if ( err ) {
                    res.send( 400, err )
                        }
                else {
                    res.render( "jade/notes", { title: categoryName, notes: notes.notes });
                }
            });
        });

        app.post( "/newCategory", function ( req, res ) {
            var categoryName = req.body.categoryName;
            data.createNewCategory( categoryName, function ( err ) {
                if ( err ) {
                    console.log( err );
                    req.flash( "newCatName", err );
                    res.redirect( "/" );
                }
                else {
                    console.log( "Created new category: " + categoryName );
                    res.redirect( "/notes/" + categoryName );
                }
            });
        });

    };

})( module.exports );