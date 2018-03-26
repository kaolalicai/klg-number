export class NumberUtil {

  static add (a: number, b: number) {
    return this.fixNumPrecision(a + b)
  }

  static sub (a: number, b: number) {
    return this.fixNumPrecision(a - b)
  }

  /**
   * 判断数字是否接近0
   * @param {number} a
   * @returns {boolean}
   */
  static closeToZero (a: number) {
    // TODO  非空判断
    return a < 0.1
  }

  /**
   * 四舍五入
   * 1. 为什么不用 toFixed ？toFixed return string 这个方法 return number
   * 2. 为什么不用 Math.round ？不支持指定小数位
   * 注意 toFixed() 四舍五入的规则与数学中的规则不同，使用的是银行家舍入规则，银行家舍入:所谓银行家舍入法，其实质是一种四舍六入五取偶（又称四舍六入五留双）法。具体规则如下：
   * 简单来说就是：四舍六入五考虑，五后非零就进一，五后为零看奇偶，五前为偶应舍去，五前为奇要进一
   * @param num
   * @param digits 默认2
   * @returns {Number}
   */
  static fixedNum (num: number, digits = 2) {
    return parseFloat(Number(num).toFixed(digits))
  }

  /**
   * 修复 0.1 + 0.2 = 0.30000000000000004 的这类数字
   * @param num
   * @returns {*}
   */
  static fixNumPrecision (num: number) {
    const left = Math.abs(num - this.fixedNum(num))
    // 是 0.30000000000000004 的情况才 fix
    if (left < 0.0000001) {
      return this.fixedNum(num)
    }
    return num
  }

  /**
   * 截取 digits 位小数 不做四舍五入
   * @param num
   * @param digits
   * @returns {number}
   */
  static cutNum (num: number, digits = 2) {
    if (!num) return 0
    num = this.fixNumPrecision(num)
    const re = new RegExp('^-?\\d+(?:\\.\\d{0,' + digits + '})?', 'gim')
    return parseFloat(num.toString().match(re)[0])
  }
}
