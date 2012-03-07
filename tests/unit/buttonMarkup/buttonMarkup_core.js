/*
 * mobile buttonMarkup tests
 */
(function($){
	module("jquery.mobile.buttonMarkup.js");

	test( "Header/footer buttons should be styled appropriately", function() {
		var headerButton1 = $("#header-button-1"),
		    headerButton2 = $("#header-button-2"),
			headerButton3 = $("#header-button-3"),
			headerButton4 = $("#header-button-4"),
			footerButton1 = $("#footer-button-1"),
			footerButton2 = $("#footer-button-2");

		ok((headerButton1.hasClass("ui-btn-left") &&
		    headerButton2.hasClass("ui-btn-right")), "first header button should have class 'ui-btn-left' and the second one should have 'ui-btn-right'");
		ok( ( !footerButton1.hasClass("ui-btn-left") && !footerButton2.hasClass("ui-btn-right") ), "'ui-btn-left' and 'ui-btn-right' should not be applied to buttons in footers.");
		ok( ( headerButton3.css("display") == "inline-block" && footerButton1.css("display") == "inline-block" ), "Buttons in headers/footers should default to inline styling." );
		ok( ( headerButton4.attr("data-nstest-inline") == "false" && headerButton4.hasClass("ui-btn-block") ) && 
			( footerButton2.attr("data-nstest-inline") == "false" && footerButton2.hasClass("ui-btn-block") ), "Buttons in headers/footers should not default to inline styling if `data-inline` is explicitly set to false.");
	});

	test( "control group buttons should be enhanced inside a footer", function(){
		var group, linkCount;

		group = $("#control-group-footer");
		linkCount = group.find( "a" ).length;

		same( group.find("a.ui-btn").length, linkCount, "all 4 links should be buttons");
		same( group.find("a > span.ui-corner-left").length, 1, "only 1 left cornered button");
		same( group.find("a > span.ui-corner-right").length, 1, "only 1 right cornered button");
		same( group.find("a > span:not(.ui-corner-left):not(.ui-corner-right)").length, linkCount - 2, "only 2 buttons are cornered");
	});

	test( "control group buttons should respect theme-related data attributes", function(){
		var group = $("#control-group-content");

		ok(!group.find('[data-shadow=false]').hasClass("ui-shadow"),
			 "buttons with data-shadow=false should not have the ui-shadow class");
		ok(!group.find('[data-corners=false]').hasClass("ui-btn-corner-all"),
			 "buttons with data-corners=false should not have the ui-btn-corner-all class");
		ok(!group.find('[data-iconshadow=false] .ui-icon').hasClass("ui-icon-shadow"),
			 "buttons with data-iconshadow=false should not have the ui-icon-shadow class on their icons");
	});

	// Test for issue #3046 and #3054:
	test( "mousedown on SVG elements should not throw an exception", function(){
		var svg = $("#embedded-svg"),
			success = true,
			rect;
		ok(svg.length > 0, "found embedded svg document" );
		if ( svg.length > 0 ) {
			rect = $( "rect", svg );
			ok(rect.length > 0, "found rect" );
			try {
				rect.trigger("mousedown");
			} catch ( ex ) {
				success = false;
			}
			ok( success, "mousedown executed without exception");
		}
	});

	test( "Elements with “data-mini='true'” should have “ui-mini” class attached to enhanced element.", function(){
		var $mini = $("#mini"),
			$full = $("#full"),
			$minicontrol = $('#mini-control');

		ok( $full.not('.ui-mini'), "Original element does not have data attribute, enhanced version does not recieve .ui-mini.");
		ok( $mini.is('.ui-mini'), "Original element has data attribute, enhanced version recieves .ui-mini." );
		ok( $minicontrol.is('.ui-mini'), "Controlgroup has data attribute and recieves .ui-mini.");
	});
	
})(jQuery);
