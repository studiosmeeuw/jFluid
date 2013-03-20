/*
 * jFluid - jQuery Plugin
 *
 * Examples and documentation at: http://github.com/studiosmeeuw/jFluid
 *
 * Copyright (c) 2011 Karel Persoons
 *
 * Version: 0.1 (30/06/2011)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
 
 /*
 * jFluid - Options
 *
 * containerMin
 * containerMax
 * item
 * column
 * columnMin
 */

(function($){
	
	// jfluid function
	$.fn.jFluid = function(options) {
	
		// defaults
		var defaults = {
			item: 'div'
		};
		
		// overwrite defaults
		var options = $.extend(defaults, options);
		
		// get container
		container = this;
		
		// get item name
		item = options.item;
		
		// get column
		column = options.column
		
		// check items name
		if(item.substr(1) == '.'){
			
			// get child element with class
			item = this.children(item);
		} else {
		
			// 42 (get your towels ready)
		}
		
		// check if min-width for container is set
		if(options.containerMin){
			
			// set min-width for container
			container.css('min-width', options.containerMin + 'px');
		}
		
		// check if max-width for container is set
		if(options.containerMax){
			
			// set max-width for container
			container.css('max-width', options.containerMax + 'px');
		}
		
		// check if columns are named
		if(options.column){
		
			// check if min-width for columns is set
			if(options.columnMin)
			{
			
				// set min-width for columns
				container.css('min-width', options.columnMin + 'px');
			}
		}
		
		// get margin & padding of container
		containerMargin = parseInt(container.css('margin-left').replace('px', '')) + parseInt(container.css('margin-right').replace('px', ''));
		containerPadding = parseInt(container.css('padding-left').replace('px', '')) + parseInt(container.css('padding-right').replace('px', ''));
		
		// give parent element a min-width (fixes scrollbar bug)
		container.parent().css('min-width', options.columnMin + containerMargin + containerPadding + 'px');
		
		// get number of columns
		columnCount = column.length;
		
		// make array of possible jump values
		jumpWidthArray = [];
		
		console.log(jumpWidthArray);
		
		// get counter to max
		i = columnCount;
		
		// loop cols
		while(i > 0){
			
			// add jump value to array
			jumpWidthArray.push(i * options.columnMin + containerPadding);
			
			// adjust counter
			i--;
		}
		
		// init check fluid
		checkFluid();
		
		// window resize
		$(window).resize(function(){
		
			// check fluid
			checkFluid();
		});
		
	};
	
	
	// resize function
	checkFluid = function(){
	
		// get container width
		containerWidth = container.width();
		
		// check if width exeeds largest value
		if(containerWidth > jumpWidthArray[0]){
		
			// adjust col width
			$(column).css('width', 100/columnCount + '%');
		} else {
			
			// loop jump values
			$.each(jumpWidthArray, function(key, value){
			
				// check jump value
				if(containerWidth < value) {
				
					// just let it loop
				} else {
					
					// adjust col width
					$(column).css('width', 100/(columnCount - key) + '%');
					
					// stop
					return false;
				}
			})
		}
	}
	
})(jQuery);

// extra code

// another test

// and another one

// and we keep on going

// one more
