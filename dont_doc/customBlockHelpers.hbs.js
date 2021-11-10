const hbs = require('handlebars');
const helperMD = require("helper-markdown")

// from: https://stackoverflow.com/questions/8853396/logical-operator-in-a-handlebars-js-if-conditional
hbs.registerHelper("x", function(expression, options) {
    var result;

    // you can change the context, or merge it with options.data, options.hash
    var context = this;

    // yup, i use 'with' here to expose the context's properties as block variables
    // you don't need to do {{x 'this.age + 2'}}
    // but you can also do {{x 'age + 2'}}
    // HOWEVER including an UNINITIALIZED var in a expression will return undefined as the result.
    with(context) {
        result = (function() {
            try {
                return eval(expression);
            } catch (e) {
                console.warn('•Expression: {{x \'' + expression + '\'}}\n•JS-Error: ', e, '\n•Context: ', context);
            }
        }).call(context); // to make eval's lexical this=context
    }

    return result;
});

hbs.registerHelper("xif", function(expression, options) {
    return Handlebars.helpers["x"].apply(this, [expression, options]) ? options.fn(this) : options.inverse(this);
});

hbs.registerHelper('markdown', helperMD)