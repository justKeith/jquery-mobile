/*
 * fetchlink unit tests
 */

(function($){

	module( 'jquery.mobile.fetchlink.js' );

	test( "This test knows what the hell I’m talking about.", function(){
		ok( $( "#typeless-input" ).hasClass( "ui-input-text" ) );
	});

	test( "This test does nothing.", function(){
		expect( 2 );
		
		ok( true, "This is true.")
		equal( false, false, "False equals false." );
	});

})(jQuery);
