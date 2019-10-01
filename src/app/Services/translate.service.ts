import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor() {}

  countPublishTime(input: string) {
    const now = new Date().getTime();
    const oldTime = new Date(input).getTime();
    const difference = now - oldTime;
    let result = '';

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const halfamonth = day * 15;
    const month = day * 30;
    const year = month * 12;
    const _year = difference / year;
    const _month = difference / month;
    const _week = difference / (7 * day);
    const _day = difference / day;
    const _hour = difference / hour;
    const _min = difference / minute;
    if (_year >= 1) {
      result = '新增於' + Math.floor(_year) + ' 年前';
    } else if (_month >= 1) {
      result = '新增於' + Math.floor(_month) + ' 個月前';
    } else if (_week >= 1) {
      result = '新增於' + Math.floor(_week) + ' 周前';
    } else if (_day >= 1) {
      result = '新增於' + Math.floor(_day) + ' 天前';
    } else if (_hour >= 1) {
      result = '新增於' + Math.floor(_hour) + '個小時前';
    } else if (_min >= 1) {
      result = '新增於' + Math.floor(_min) + ' 分鐘前';
    } else {
      result = '剛剛';
    }
    return result;
  }
}
