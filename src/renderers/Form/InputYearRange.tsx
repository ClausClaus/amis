import React from 'react';
import {FormItem} from './Item';
import cx from 'classnames';
import includes from 'lodash/includes';
import {filterDate, parseDuration} from '../../utils/tpl-builtin';
import InputDateRange, {DateRangeControlSchema} from './InputDateRange';
import DateRangePicker from '../../components/DateRangePicker';
import {createObject, autobind} from '../../utils/helper';
import {Action} from '../../types';
/**
 * YearRange 年份范围控件
 * 文档：https://baidu.gitee.io/amis/docs/components/form/input-year-range
 */
export interface YearRangeControlSchema
  extends Omit<DateRangeControlSchema, 'type'> {
  type: 'input-year-range';
}

export default class YearRangeControl extends InputDateRange {

  // 派发有event的事件
  @autobind
  dispatchEvent(event: React.SyntheticEvent<HTMLElement> | string, data: any = {}) {
    const {dispatchEvent} = this.props;
    dispatchEvent(event, createObject(data));
  }

  // 动作
  doAction(action: Action, data: object, throwErrors: boolean) {
    const {resetValue, onChange} = this.props;
    if (includes(['clear', 'reset'], action.actionType)) {
      onChange(resetValue || '');
    }
  }

  // 值的变化
  @autobind
  handleChange(data: any) {
    this.props.onChange(data);
    this.dispatchEvent('change', data);
  }

  render() {
    const {
      className,
      classPrefix: ns,
      defaultValue,
      defaultData,
      minDate,
      maxDate,
      minDuration,
      maxDuration,
      data,
      format,
      env,
      ...rest
    } = this.props;

    return (
      <div className={cx(`${ns}DateRangeControl`, className)}>
        <DateRangePicker
          viewMode="years"
          format="YYYY"
          inputFormat="YYYY"
          placeholder="YearRange.placeholder"
          ranges="thisyear,lastYear"
          classPrefix={ns}
          data={data}
          {...rest}
          minDate={minDate ? filterDate(minDate, data, format) : undefined}
          maxDate={maxDate ? filterDate(maxDate, data, format) : undefined}
          minDuration={minDuration ? parseDuration(minDuration) : undefined}
          maxDuration={maxDuration ? parseDuration(maxDuration) : undefined}
          onChange={this.handleChange}
          onFocus={this.dispatchEvent}
          onBlur={this.dispatchEvent}
        />
      </div>
    );
  }
}

@FormItem({
  type: 'input-year-range'
})
export class YearRangeControlRenderer extends YearRangeControl {
  static defaultProps = {
    format: 'X',
    joinValues: true,
    delimiter: ',',
    timeFormat: '',
    inputFormat: 'YYYY',
    dateFormat: 'YYYY'
  };
}
