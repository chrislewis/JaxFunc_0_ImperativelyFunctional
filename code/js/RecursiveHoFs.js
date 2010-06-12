/*
 * Implementations of the functions defined in IterativeHoFs.js, but using
 * recursion instead.
 *
 * Chris Lewis (chris@thegodcode.net), for JaxFunc (http://www.meetup.com/JaxFunc/)
 */
var R = {
	
	each: function(list, op) {
		if(list.length > 0) {
			op(list[0]);
			R.each(list.slice(1), op);
		}
	},
	
	map: function(list, op) { return R._map(list, [], op); },
	
	_map: function(list, acc, op) {
		if(list.length == 0)
			return acc;
		else {
			acc.push(op(list[0]));
			return R.map(list.slice(1), acc, op);
		}
	}
	
}
