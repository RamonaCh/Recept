var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Recipe Model
 * ==========
 */
var Recipe = new keystone.List('Recipe');

Recipe.add({
	name: { type: Types.Text, required: true, unique: true, index: true, initial: true },
	Ingredient: { type: Types.Relationship, ref: 'Ingredient', initial: true, many: true },
	description: { type: Types.Textarea, initial: true },
	amount: { type: Types.Number, initial: true, required: true },
	entity: { type: Types.Select, required: true, options: 'first, second', emptyOption: false, initial: true },
	picture: { type: Types.CloudinaryImage, folder: 'path/to/image', initial: true, required: false },
});


Recipe.register();
