/**
 *
 * @source: http://www.example.net/some-javascript-source.js
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2022 Lucas G. Cavalheiro
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

const initCalculator = () => ({
  money: "25,000",
  monthLiterals: [
    { digit: "01", literal: "January" },
    { digit: "02", literal: "February" },
    { digit: "03", literal: "March" },
    { digit: "04", literal: "April" },
    { digit: "05", literal: "May" },
    { digit: "06", literal: "June" },
    { digit: "07", literal: "July" },
    { digit: "08", literal: "August" },
    { digit: "09", literal: "September" },
    { digit: "10", literal: "October" },
    { digit: "11", literal: "November" },
    { digit: "12", literal: "December" },
  ],
  today: dayjs(),
  currentMonth: null,
  currentYear: null,
  minMonth: null,
  minYear: null,
  reachDate: null,
  monthDiff: null,
  payments: null,

  init() {
    this.currentMonth = this._calcDateFromToday(48).month();
    this.currentYear = this._calcDateFromToday(48).year();
    this.minMonth = this._calcDateFromToday(1).month();
    this.minYear = this._calcDateFromToday(1).year();
    this._setReachDate();
    this._setMonthDiff();
    this._setPayments();

    this.$watch("currentMonth", () => {
      this._setReachDate();
      this._setMonthDiff();
      this._setPayments();
    });

    this.$watch("money", () => {
      this._setPayments();
    });
  },

  changeMonth(factor) {
    const newIndex = this.currentMonth + factor;
    if (newIndex >= this.monthLiterals.length) {
      this.currentMonth = 0;
      this.currentYear++;
    } else if (newIndex < 0) {
      this.currentMonth = this.monthLiterals.length - 1;
      this.currentYear--;
    } else {
      this.currentMonth = newIndex;
    }
    this._evalMonth();
  },
  _evalMonth() {
    if (
      this.currentYear === this.minYear &&
      this.currentMonth < this.minMonth
    ) {
      this.currentMonth = this.minMonth;
    }
  },
  _calcDateFromToday(months) {
    return this.today.add(months, "month");
  },
  _setReachDate() {
    this.reachDate = `${this.currentYear}-${
      this.monthLiterals[this.currentMonth].digit
    }`;
  },
  _setMonthDiff() {
    this.monthDiff = dayjs(this.reachDate).diff(this.today, "month") + 1;
  },
  _setPayments() {
    this.payments =
      Math.ceil(parseFloat(this.money.replaceAll(",", "")) / this.monthDiff) ||
      0;
  },
  formatReachDate() {
    return dayjs(this.reachDate).format("MMMM YYYY");
  },
});
