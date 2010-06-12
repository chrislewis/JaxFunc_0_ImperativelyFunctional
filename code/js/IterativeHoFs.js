/*
 * Initial iterative implementations of higher-order functions each and map.
 *
 * Chris Lewis (chris@thegodcode.net), for JaxFunc (http://www.meetup.com/JaxFunc/) 
 */
var I = {
	
	/*
	 * Given a list and an operation, invoke the operation on each element of
	 * the list. Because the operation is a unit type (it doesn't return
	 * anything), it is almost certain to result in side-effects. 
	 */
	each: function(list, op) {
		for(var i in list)
			op(list[i]);
	},
	
	/*
	 * Given a list and a function, invoke the function on each element of
	 * the list. The function is a transformation of A -> B, by which each 
	 * element of the list will be transformed. A and B would be type
	 * annotations, where A might represent an int, and B perhaps a string.
	 * Whether or not they differ doesn't matter, the emphasis is on
	 * the transformation.
	 */
	map: function(list, f) {
		var _new = [];
		for(var i in list)
			_new.push(f(list[i]));
		return _new;
	}
	
}
