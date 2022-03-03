import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { OntarioTextarea } from '@ontario-digital-service/ontario-design-system-component-library-react';

export default function TextAreaExample() {
	const codeExample = `import { OntarioTextarea } from '@ontario-digital-service/ontario-design-system-component-library-react'; \n\n<OntarioTextarea
	labelCaption="this is a label caption"
	labelFor="this is a lable for"
	labelType="default"
	describedBy="described by"
	elementId="id"
	name="name"
	required
	value="value"
/>`;
	return (
		<>
			<div className="ontario-row">
				<div className="ontario-columns ontario-medium-12 ontario-large-12">
					<h3>Examples</h3>
					<p>Examples of where to use text areas include:</p>

					<ul>
						<p>
							<li>comments and user feedback</li>
						</p>
						<p>
							<li>"tell us about yourself" sections</li>
						</p>
						<p>
							<li>requests for more detail</li>
						</p>
					</ul>

					<div className="preview-container">
						<div className="example-container">
							<OntarioTextarea
								labelCaption="this is a label caption"
								labelFor="this is a lable for"
								labelType="default"
								describedBy="described by"
								elementId="id"
								name="name"
								required
								value="this is the content"
							/>
						</div>

						<p>With the following markup:</p>

						<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
							{codeExample}
						</SyntaxHighlighter>
					</div>
				</div>
			</div>
		</>
	);
}
