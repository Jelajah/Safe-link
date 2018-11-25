/**
 * Loco js export: JavaScript function
 * Project: Safelink.xml conversion
 * Release: Working copy
 * Locale: id-ID, Indonesian (Indonesia)
 * Exported by: Unregistered user
 * Exported at: Sun, 25 Nov 2018 05:37:10 +0000
 */
var t = function( pairs ){
    
    // named plural forms
    var pluralForms = ["other"];
    
    // calc numeric index of a plural form (0-0)
    function pluralIndex( n ){
        return Number( 0 );
    }

    // expose public t() function
    return function( msgid1, msgid2, n ){
        var value = pairs[msgid1];
        // singular if no multiplier
        if( null == n ){
            n = 1;
        }
        // plurals stored as objects, e.g. { one: "" }
        if( value instanceof Object ){
            value = value[ pluralForms[ pluralIndex(n) ] || 'one' ];
        }
        return value || ( 1 === n ? msgid1 : msgid2 ) || msgid1 || '';
    };
}(
    [] 
);
