import { Base } from '../../utils/common.interface';
import { Hint } from '../../utils/common.interface';
import { HintExpander } from '../ontario-hint-expander/hint-expander.interface';

export interface Checkbox extends Base {
  /**
   * The legend for the checkbox
   */
  legend: string;

  /**
   * The name for the checkbox (note that to group checkboxes to the same question, the name must be the same)
   */
  name: string;

  /**
   * The text to display as label. This will override the text provided through the Element Content.
   *
   * @example
   * <ontario-checkbox name="checkbox-name" checkbox-label="checkbox label">This is a checkbox label</ontario-label>
   *
   * The resulting label will show `"checkbox label"`.
   */
  label: string;

  /**
   * If there are multiple inputs in a fieldset, display each input as an option
   */
  options?: string;

  /**
   * Used to define whether the hint text component is required or not. If required, the value passed should be 'true'.
   */
  hintText?: Hint;

  /**
   * Used to define whether the hint expander component is required or not. If required, the value passed should be 'true'.
   */
  hintExpander?: HintExpander;

  /**
   * Used to used check if the parent component is an input.
   */
  inputExists?: boolean;

  /**
   * The checkbox content value
   */
  value: string;
}
