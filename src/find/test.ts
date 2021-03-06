import assert from 'assert'
import find from '.'
import sinon from 'sinon'

describe('find', () => {
  const array = [1, 2, 3]

  it('finds first element by condition', () => {
    assert(find(array, (i) => i > 1) === 2)
  })

  it('stops execution as soon as it finds the element', () => {
    sinon.stub()
    const matcher = sinon.stub()
    matcher.withArgs(1).returns(false)
    matcher.withArgs(2).returns(true)
    matcher.withArgs(3).returns(true)

    assert(find(array, matcher) === 2)
    assert(matcher.callCount === 2)
  })

  it('returns undefined', () => {
    assert(find(array, (i) => i === 420) === undefined)
  })
})
