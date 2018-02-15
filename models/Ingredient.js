var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Ingredient Model
 * ==========
 */
var Ingredient = new keystone.List('Ingredient');

Ingredient.add({
	name: { type: Types.Text, required: true, unique: true, index: true, initial: true },
});


Ingredient.register();
