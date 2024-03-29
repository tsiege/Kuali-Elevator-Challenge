const Elevator = require('../elevator')
// ELEVATOR CONCERNS
// 2. Each elevator will report as is moves from floor to floor.
// 3. Each elevator will report when it opens or closes its doors.
// 4. An elevator cannot proceed above the top floor.
// 5. An elevator cannot proceed below the ground floor (assume 1 as the min)
// 8. The elevator should keep track of how many trips it has made, and how many floors it
// has passed. The elevator should go into maintenance mode after 100 trips, and stop
// functioning until serviced, therefore not be available for elevator calls.

describe('Elevator', () => {
  beforeEach(() => {

  })
  it(`knows its destination once added`, ()=> {
    const elevator = new Elevator()
    elevator.goToFloor(15)
    assert.deepEqual(elevator.destinations, [15])
  })
  it(`opens its doors when at the floor for a request and is at ground floor`, ()=> {
    const elevator = new Elevator()
    elevator.goToFloor(15)
    assert.equal(elevator.doorsOpen, true)
  })
  describe('#advance', () => {
    it(`after selecting a floor the elevator and advance is called the elevator closes its doors`, () => {
      const elevator = new Elevator({})
      elevator.goToFloor(15)
      elevator.advance()
      assert.equal(elevator.doorsOpen, false)
    })
    it(`once it progresses to a floor it opens doors and registers one trip`, () => {
      const elevator = new Elevator({  })
      elevator.goToFloor(2)
      elevator.advance()
      assert.equal(elevator.doorsOpen, true)
      assert.equal(elevator.tripCount, 1)
    })
    it(`once it reaches a destination it returns to the first floor`, () => {
      const elevator = new Elevator({  })
      elevator.goToFloor(2)
      elevator.advance()
      elevator.advance()

      assert.equal(elevator.doorsOpen, true)
      assert.equal(elevator.tripCount, 2)
      assert.equal(elevator.currentFloor, 1)
    })
  })
})
