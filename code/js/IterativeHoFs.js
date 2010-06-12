
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
	},
	
	/*
	 * Given a list and a predicate, produce a new list from each element of
	 * the original list for which the predicate is true.
	 */
	filter: function(list, pred) {
		var _new = [];
		for(var i in list)
			if(pred(list[i]))
				_new.push(list[i]);
		return _new;
	},
	
	foldr: function(list, initial, f) {
		if(list.length == 0)
			return initial;
		else {
			for(var i in list)
				initial = f(initial, list[i]);
			return initial;
		}
	}
	
}
