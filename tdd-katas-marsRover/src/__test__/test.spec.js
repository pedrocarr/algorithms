const Rover = require('../index')

describe('rover test', () => {

  let rover;

  beforeEach(() => {
     rover = new Rover();
  });

  it("should when no instructions are given have initial position 0:0:N",()=>{
    expect(rover.execute("")).toBe("0:0:N");

  });

  it("should face EAST when rotating to the right",()=>{
    expect(rover.execute("R")).toBe("0:0:E");
  });

  it("should face SOUTH when rotating twice right",()=>{
    expect(rover.execute("RR")).toBe("0:0:S");
  });
})
