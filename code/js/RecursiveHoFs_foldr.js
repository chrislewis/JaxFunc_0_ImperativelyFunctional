/**
 * Here is an implementation of foldr (http://en.wikipedia.org/wiki/Fold_(higher-order_function),
 * followed by implementations of higher-order functions defined in terms
 * of folding.
 *
 * Chris Lewis (chris@thegodcode.net),
 * for JaxFunc (http://www.meetup.com/JaxFunc/) 
 */
var RF = {
	
	/*
	 * foldr (http://en.wikipedia.org/wiki/Fold_(higher-order_function), upon
	 * which we can build many things. Given a list of items, recursively
	 * combine each item with the next, using the given function. The process
	 * is seeded with an initial value, and when the list has been reduced to
	 * to nothing, we return that value. This means that when called with an
	 * empty list, we simply get that value, otherwise the list items are
	 * collapsed into a single value (seeded by the initial one).
	 */
	foldr: function(list, initial, f) {
		if(list.length == 0)
			return initial;
		else
			return RF.foldr(list.slice(1), f(initial, list[0]), f);
	},
	
	/* Many list operations can be expressed in terms of foldr... */
	
	/*
	 * A re-implementation of our each, which folds into nothing and simply
	 * returns the original list (call-chaining).
	 */
	each: function(list, op) {
		return RF.foldr(list, null, function(acc, i) {
			op(i);
			return list;
		});
	},
	
	/*
	 * map is naturally expressed in terms of a fold seeded by an empty list,
	 * and then populating that list by applying f(i) to each of its items.
	 */
	map: function(list, f) {
		return RF.foldr(list, [], function(acc, i) {
			acc.push(f(i));
			return acc;
		});
	},
	
	/*
	 * Given a list and a predicate, produce a new list from each element of
	 * the original list for which the predicate is true (again expressed in 
	 * terms of a fold).
	 */
	filter: function(list, pred) {
		return RF.foldr(list, [], function(acc, i) {
			if(pred(i))
				acc.push(i);
			return acc;
		});
	}
	
}
