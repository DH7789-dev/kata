import {Potter} from "./Potter";
import { should } from 'chai';
should();

describe('When make simple tests for Potter class', () => {

  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });

  describe("when make simple addition for price book", ()=>{
    it('should return 0 book at 0', () => {
      potter.price([]).should.equal(0)
    });

    it('should return 1 book at 8$', () => {
      potter.price([1]).should.equal(8)
      potter.price([1]).should.equal(8)
      potter.price([1]).should.equal(8)
      potter.price([1]).should.equal(8)
      potter.price([1]).should.equal(8)
    });

    it('should return 2 book at 16$', () => {
      potter.price([1,1]).should.equal(16)
    });

    it('should return 3 book at 24$', () => {
      potter.price([1,1,1]).should.equal(24)
    });

    it('should return 4 book at 32$', () => {
      potter.price([1,1,1,1]).should.equal(32)
    });

    it('should return 5 book at 40$', () => {
      potter.price([1,1,1,1,1]).should.equal(40)
    });

  })

  describe("when reduce for number suite", ()=>{
    it('should 2 book series at 15.2$', () => {
      potter.price([1,2]).should.equal(15.2)
    });
    it('should 3 book series at 21.6$', () => {
      potter.price([1,2,3]).should.equal(21.6)
    });
    it('should 4 book series at 25.6$', () => {
      potter.price([1,2,3,4]).should.equal(25.6)
    });
    it('should return 5 book at 30$', () => {
      potter.price([1,2,3,4,5]).should.equal(30)
    });
  })

  describe("excepte reduce for 2book identique", ()=>{
    it('should return 3 book at 23.2$', () => {
      potter.price([1,1,3]).should.equal(23.2)
    });
    it('should return 3 book at 23.2$', () => {
      potter.price([1,2,2]).should.equal(23.2)
    });
    it('should return 3 book at 23.2$', () => {
      potter.price([2,2,3]).should.equal(23.2)
    });

    it('should  2book equal for 4books at 30.4$', () => {
      potter.price([2,2,3,3]).should.equal(30.4)
    });

    it('should  2book equal for 4books at 30.4$', () => {
      potter.price([2,2,1,1]).should.equal(30.4)
    });

    it('should  2book equal for 4books at 30.4$', () => {
      potter.price([2,2,4,4]).should.equal(30.4)
    });


  })


});
