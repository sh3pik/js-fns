import assert from 'assert'
import findLast from '.'
import sinon from 'sinon'

describe('findLast', () => {
  var array = [1, 2, 3]

  it('finds the last element in the array', () => {
    assert(findLast(array, (i) => i > 1) === 3)
  })

  it('stops execution as soon as it finds the element', () => {
    sinon.stub()
    const matcher = sinon.stub()
    matcher.withArgs(1).returns(true)
    matcher.withArgs(2).returns(true)
    matcher.withArgs(3).returns(false)

    assert(findLast(array, matcher) === 2)
    assert(matcher.callCount === 2)
  })

  it('returns undefined', () => {
    assert(findLast(array, (i) => i === 420) === undefined)
  })
})
