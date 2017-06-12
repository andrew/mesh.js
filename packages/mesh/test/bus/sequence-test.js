var mesh = require('../..');

var SequenceBus = mesh.SequenceBus;
var NoopBus = mesh.NoopBus;
var Bus = mesh.Bus;
var WrapBus = mesh.WrapBus;
var BufferedBus = mesh.BufferedBus;
var AsyncResponse = mesh.AsyncResponse;
var Response      = mesh.Response;
var EmptyResponse = mesh.EmptyResponse;
var ErrorResponse = mesh.ErrorResponse;


var co = require('co');
var expect = require('expect.js');
var timeout = require('../utils/timeout');

describe(__filename + '#', function() {

  it('is a bus', function() {
    expect(SequenceBus.create()).to.be.an(Bus);
  });

  it('executes ops against multiple busses and joins the read() data', co.wrap(function*() {

    var bus = SequenceBus.create([
      BufferedBus.create(void 0, 'a'),
      BufferedBus.create(void 0, 'b')
    ]);

    var response = bus.execute();

    expect((yield response.read()).value).to.be('a');
    expect((yield response.read()).value).to.be('b');
    expect((yield response.read()).done).to.be(true);
  }));

  it('skips a bus that was removed during execution', co.wrap(function*() {

    var rmbus = {
      execute: function(operation) {
        busses.splice(1, 1); // remove the next bus
        return EmptyResponse.create();
      }
    };

    var busses = [BufferedBus.create(void 0, 'a'), rmbus, BufferedBus.create(void 0, 'b'), BufferedBus.create(void 0, 'c')];

    var bus = SequenceBus.create(busses);
    var response = bus.execute(busses);

    expect((yield response.read()).value).to.be('a');
    expect((yield response.read()).value).to.be('b');
    expect((yield response.read()).value).to.be('c');
  }));

  it('passes errors down', co.wrap(function*() {
    var bus = SequenceBus.create([BufferedBus.create(new Error('unknown error'))]);
    var err;

    try {
      yield bus.execute({}).read();
    } catch (e) { err = e; }

    expect(err.message).to.be('unknown error');
  }));

  it('can execute an operation against a bus that does not response a response', co.wrap(function*() {
    var bus = SequenceBus.create([
      { execute() { }}
    ]);

    var err;

    try {
      yield bus.execute({}).read();
    } catch(e) { err = e; }

    expect(err).to.be(void 0);
  }));

  it('can stream when a nested parallel bus is empty', co.wrap(function*() {
    var bus = SequenceBus.create([
      BufferedBus.create(void 0, [1, 2, 3]),
      SequenceBus.create([])
    ]);

    expect(yield bus.execute({}).readAll()).to.eql([1, 2, 3]);
  }));

  it("can cancel a response", co.wrap(function*() {
    var canceled = 0;
    var a = { execute: function(writable) {
      return Response.create(function(writable) {
        writable.then(function() {
          canceled++;
        });
      });
    }};

    var bus = SequenceBus.create([a, a]);

    var resp = bus.execute({});
    resp.cancel();
    yield timeout(10);
    expect(canceled).to.be(1);
  }));

  it("can cancel a response with no busses", co.wrap(function*() {
    var canceled = false;
    var bus = SequenceBus.create([]);

    var resp = bus.execute({});
    resp.cancel();
    yield timeout(5);
    expect(canceled).to.be(false);
  }));
});
