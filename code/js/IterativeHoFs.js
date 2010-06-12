
var I = {
	
	each: function(list, op) {
		for(var i in list)
			op(list[i]);
	},
	
	map: function(list, op) {
		var _new = [];
		for(var i in list)
			_new.push(op(list[i]));
		return _new;
	},
	
	filter: function(list, pred) {
		var _new = [];
		for(var i in list)
			if(pred(list[i]))
				_new.push(list[i]);
		return _new;
	},
	
	foldr: function(list, initial, op) {
		if(list.length == 0)
			return initial;
		else {
			for(var i in list)
				initial = op(initial, list[i]);
			return initial;
		}
	}
	
}
