import { externalSchematic, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { OptionsSchema } from './options-schema.interface';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function boilerplate(_options: OptionsSchema): Rule {
	return (_: Tree, _context: SchematicContext) => {
		const name: string = _options.name;
		return externalSchematic('@schematics/angular', 'ng-new', {
			name,
			version: '9.0.0',
			directory: name,
			routing: true,
			style: 'scss',
			inlineStyle: false,
			inlineTemplate: false
		});
		// return tree;
	};
}
