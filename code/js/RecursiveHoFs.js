
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
	},
	
	filter: function(list, pred) { return R._filter(list, [], pred); },
	
	_filter: function(list, acc, pred) {
		if(list.length == 0) 
			return acc;
		else {
			if(pred(list[0]))
				acc.push(list[0]);
			return R._filter(list.slice(1), acc, pred);
		}
	},
	
	foldr: function(list, initial, op) {
		if(list.length == 0)
			return initial;
		else
			return R.foldr(list.slice(1), op(initial, list[0]), op);
	}
	
}
