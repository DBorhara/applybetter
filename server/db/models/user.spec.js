/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let depak

      beforeEach(async () => {
        depak = await User.create({
          email: 'depak@applybetter.com',
          firstName: 'Depak',
          lastName: 'Borhara',
          title: 'Software Engineer',
          password: 'applications'
        })
      })

      it('returns true if the password is correct', () => {
        expect(depak.correctPassword('applications')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(depak.correctPassword('apps')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
