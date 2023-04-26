import React from 'react';

import { OntarioRadioButtons } from '@ontario-digital-service/ontario-design-system-component-library-react';

import CodeHighlighter from '../../components/code-highlighter';

export default function RadioButtonExample() {
	const radioButtonsCodeExample = `import { OntarioRadioButtons } from '@ontario-digital-service/ontario-design-system-component-library-react'; \n
<OntarioRadioButtons 
	caption="Radio legend"
	name="radio-example"
	required={false}
	hintText="Example hint text for radio buttons"
	options={[
		{
			value: "option-1",
			elementId: "option-1",
			label: "Option 1",
			hintExpander: {
				content: "This is the example content for the Option 1 radio option.",
				hint: "Example hint expander for Option 1 radio option option"
			}
		},
		{
			value: "option-2",
			elementId: "option-2",
			label: "Option 2"
		},
		{
			value: "option-3",
			elementId: "option-3",
			label: "Option 3"
		},
	]}
	hintExpander={{
		content: "This is the example content for the radio button group hint expander.",
		hint: "Example hint expander for the radio button group",
		elementId: "radio-button-group-hint-expander"
	}}
>
</OntarioRadioButtons>`;
	return (
		<div className="ontario-row">
			<div className="ontario-columns ontario-large-12">
				<h2>Example</h2>
				<OntarioRadioButtons
					caption="Radio legend"
					name="radio-example"
					required={false}
					hintText="Example hint text for radio buttons"
					options={[
						{
							value: 'option-1',
							elementId: 'option-1',
							label: 'Option 1',
							hintExpander: {
								content: 'This is the example content for the Option 1 radio option.',
								hint: 'Example hint expander for Option 1 radio option option',
							},
						},
						{
							value: 'option-2',
							elementId: 'option-2',
							label: 'Option 2',
						},
						{
							value: 'option-3',
							elementId: 'option-3',
							label: 'Option 3',
						},
					]}
					hintExpander={{
						content: 'This is the example content for the radio button group hint expander.',
						hint: 'Example hint expander for the radio button group',
						elementId: 'radio-button-group-hint-expander',
					}}
				></OntarioRadioButtons>

				<p>With the following markup:</p>

				<CodeHighlighter codeExample={radioButtonsCodeExample} />

				<hr />
			</div>
		</div>
	);
}
