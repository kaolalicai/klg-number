import * as _ from 'lodash'
import * as assert from 'power-assert'
import {NumberUtil} from './NumberUtil'

describe('NumberUtil test', async function () {

  it(' add ', async () => {
    assert.equal(NumberUtil.add(0.1, 0.2), 0.3)
  })

  it(' sub ', async () => {
    assert.equal(NumberUtil.sub(0.3, 0.2), 0.1)
  })

  it(' closeToZero ', async () => {
    assert.ok(NumberUtil.closeToZero(0.00000001))
    assert.equal(NumberUtil.closeToZero(0.1), false)
    assert.equal(NumberUtil.closeToZero(0.01), true)
  })

  it(' fixedNum ', async () => {
    assert.ok(_.isNumber(NumberUtil.fixedNum(2.335)))
    // 惊不惊喜意不意外
    assert.equal(NumberUtil.fixedNum(2.335), 2.33)
    assert.equal(NumberUtil.fixedNum(2.3351), 2.34)
    assert.equal(NumberUtil.fixedNum(2.345), 2.35)

    assert.equal(NumberUtil.fixedNum(2.33333333, 4), 2.3333)
    assert.equal(NumberUtil.fixedNum(2.333351, 4), 2.3334)

    assert.equal(NumberUtil.fixedNum(234.4545), 234.45)
    assert.equal(NumberUtil.fixedNum(-234.4455), -234.45)
    assert.equal(NumberUtil.fixedNum(-234.4445), -234.44)
    assert.equal(NumberUtil.cutNum(0), 0)
    assert.equal(NumberUtil.cutNum(10 / 3), 3.33)
  })

  it(' fix obj ', async () => {
    assert.deepEqual(NumberUtil.fixObj({a: 0.1 + 0.2}), {a: 0.3})
  })

  it(' cutNum ', async () => {
    assert.ok(_.isNumber(NumberUtil.cutNum(2.335)))
    assert.equal(NumberUtil.cutNum(2.335), 2.33)
    assert.equal(NumberUtil.cutNum(0.1 + 0.2), 0.3)
    assert.equal(NumberUtil.cutNum(234.4545), 234.45)
    assert.equal(NumberUtil.cutNum(-234.4545), -234.45)
    assert.equal(NumberUtil.cutNum(0), 0)
    assert.equal(NumberUtil.cutNum(10 / 3), 3.33)
  })

  it(' fixNumPrecision ', async () => {
    assert.ok(_.isNumber(NumberUtil.fixNumPrecision(0.1 + 0.2)))
    assert.equal(NumberUtil.fixNumPrecision(0.1 + 0.2), 0.3)
    assert.equal(NumberUtil.fixNumPrecision(3.0004), 3.0004)
  })
})
