const hbs = require('handlebars');
var helpers = require('handlebars-helpers')();

// from: https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
hbs.registerHelper("expif",function(v1, operator, v2, options) {
	switch (operator)
	{
		case "==":
			return (v1==v2) ? options.fn(this) : options.inverse(this);
		
		case "!=":
			return (v1!=v2) ? options.fn(this) : options.inverse(this);
		
		case "===":
			return (v1===v2) ? options.fn(this) : options.inverse(this);
		
		case "!==":
			return (v1!==v2) ? options.fn(this) : options.inverse(this);
		
		case "&&":
			return (v1&&v2) ? options.fn(this) : options.inverse(this);
		
		case "||":
			return (v1||v2) ? options.fn(this) : options.inverse(this);
		
		case "<":
			return (v1<v2) ? options.fn(this) : options.inverse(this);
		
		case "<=":
			return (v1<=v2) ? options.fn(this) : options.inverse(this);
		
		case ">":
			return (v1>v2) ? options.fn(this) : options.inverse(this);
		
		case ">=":
			return (v1>=v2) ? options.fn(this) : options.inverse(this);
		
		default:
			return eval(""+v1+operator+v2) ? options.fn(this) : options.inverse(this);
	}
});

// https://newbedev.com/is-it-possible-to-assign-a-parameter-value-within-handlebars-templates-without-using-helpers
hbs.registerHelper('assign', function (varName, varValue, options) {
	if (!options.data.root) {
		options.data.root = {};
	}
	options.data.root[varName] = varValue;
});

hbs.registerHelper('now', () => {
    return new Date()
});