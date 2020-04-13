import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

import useStyles from './style.jsx';

interface TimeType {
  h: number;
  m: number;
  meridiem: string;
}

interface TimePropsType {
  value: string;
  onChange: Function;
}

const CustomTimePicker: React.FC<TimePropsType & RouteComponentProps> = (props: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const { onChange, value } = props;
  const [time, setTime] = useState<TimeType>({
    h: 12,
    m: 0,
    meridiem: 'AM',
  });

  useEffect(() => {
    onChange(`${time.h}:${renderMibutes(time.m)} ${time.meridiem}`);
  }, [time]);

  useEffect(() => {
    if (value) {
      const h = parseInt(value.slice(0, 2));
      const m = parseInt(value.slice(3).substr(0, 2));
      const meridiem = value.slice(-2);

      setTime({
        h: h,
        m: m,
        meridiem: meridiem,
      });
    }
  }, [value]);

  const renderMibutes = (value: number) => (value.toString().length === 1 ? `0${value}` : value);

  const changeHours = (value: number, direction: string) => {
    let newValue = 0;
    if (direction === 'up') {
      newValue = value + 1;
      if (newValue <= 12) {
        return newValue;
      }
      return 1;
    } else {
      newValue = value - 1;
      if (newValue >= 1) {
        return newValue;
      }
      return 12;
    }
  };

  const changeMinutes = (value: number, direction: string) => {
    let newValue = 0;
    if (direction === 'up') {
      newValue = value + 5;
      if (newValue <= 55) {
        return newValue;
      }
      return 0;
    } else {
      newValue = value - 5;
      if (newValue >= 0) {
        return newValue;
      }
      return 55;
    }
  };

  const changeMeridiem = (value: string) => {
    if (value === 'PM') {
      return 'AM';
    }
    return 'PM';
  };

  const changeTime = (typeDate: string, direction: string) => {
    switch (typeDate) {
      case 'h':
        setTime(prev => ({
          ...prev,
          h: changeHours(prev.h, direction),
        }));
        break;

      case 'm':
        setTime(prev => ({
          ...prev,
          m: changeMinutes(prev.m, direction),
        }));
        break;

      case 'meridiem':
        setTime(prev => ({
          ...prev,
          meridiem: changeMeridiem(prev.meridiem),
        }));
        break;

      default:
        alert('error');
        break;
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Dropdown
        onVisibleChange={() => setOpen(!open)}
        visible={open}
        trigger={['click']}
        overlay={
          <div className={classes.tooltip}>
            <div className={classes.angle}> </div>
            <div className={classes.col}>
              <CaretUpOutlined className={classes.icon} onClick={() => changeTime('h', 'up')} />
              {time.h}
              <CaretDownOutlined className={classes.icon} onClick={() => changeTime('h', 'down')} />
            </div>
            <div className={classes.duoRadius}>:</div>
            <div className={classes.col}>
              <CaretUpOutlined className={classes.icon} onClick={() => changeTime('m', 'up')} />
              {renderMibutes(time.m)}
              <CaretDownOutlined className={classes.icon} onClick={() => changeTime('m', 'down')} />
            </div>
            <div className={classes.col}>
              <CaretUpOutlined
                className={classes.icon}
                onClick={() => changeTime('meridiem', 'up')}
              />
              {time.meridiem}
              <CaretDownOutlined
                className={classes.icon}
                onClick={() => changeTime('meridiem', 'down')}
              />
            </div>
          </div>
        }
        placement="bottomLeft"
      >
        <div>{`${time.h}:${renderMibutes(time.m)} ${time.meridiem}`}</div>
      </Dropdown>
    </div>
  );
};

export default withRouter(CustomTimePicker);
