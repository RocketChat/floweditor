import * as React from 'react';
import Select from 'react-select';
import { FormElement, IFormElementProps } from './FormElement';
import { FormWidget, IFormValueState } from './FormWidget';

var styles = require('./CheckboxElement.scss');

interface ICheckboxElementProps extends IFormElementProps {
    defaultValue?: boolean;
    description?: string;
    border?: boolean;
}

interface ICheckboxState extends IFormValueState {
    checked: boolean;
}

export class CheckboxElement extends FormWidget<ICheckboxElementProps, ICheckboxState> {
    constructor(props: any) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            checked: this.props.defaultValue,
            errors: []
        };
    }

    private onChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            checked: event.currentTarget.checked
        });
    }

    validate(): boolean {
        return true;
    }

    render() {
        return (
            <FormElement
                border={this.props.border}
                name={this.props.name}
                required={this.props.required}
                errors={this.state.errors}>
                <label className={styles.label}>
                    <input
                        type="checkbox"
                        defaultChecked={this.state.checked}
                        onChange={this.onChange}
                    />
                    <div className={styles.title}>{this.props.name}</div>
                    <div className={styles.description}>{this.props.description}</div>
                </label>
            </FormElement>
        );
    }
}
