var cases  = [];
var expect = require('expect.js');
var mesh   = require('mesh');
var co     = require('co');

exports.create = function(createBus, options) {

  if (!options) options = {};

  function it(desc, run) {
    cases.push({ description: desc, run: co.wrap(run) });
  }

  var bus;

  beforeEach(function() {
    bus = createBus();
  });

  function *insert(collection, data) {
    return yield bus.execute({ collection: collection, action: 'insert', data: data });
  }

  function *loadOne(collection, query) {
    return yield bus.execute({ collection: collection, action: 'load', query: query }).read();
  }

  function load(collection, query) {
    return bus.execute({ collection: collection, action: 'load', query: query });
  }

  function *removeOne(collection, query) {
    return yield bus.execute({ collection: collection, action: 'remove', query: query }).read();
  }

  function *updateOne(collection, query, data) {
    return yield bus.execute({ collection: collection, action: 'update', query: query, data: data }).read();
  }

  it('can insert() data into a collection', function*() {
    yield insert('letters', { name: 'a' });
    var item = yield loadOne('letters', { name: 'a' });
    expect(item.value.name).to.be('a');
  });

  it('can remove() one item from a collection', function*() {
    yield insert('letters', { name: 'a' });
    var item = yield removeOne('letters', { name: 'a' });
    expect(item.value.name).to.be('a');
  });

  it('can update() one item from a collection', function*() {
    yield insert('letters', { name: 'a', last: 'b' });
    var item = yield updateOne('letters', { name: 'a' }, { name: 'b', last: 'c' });
    expect(item.value.name).to.be('b');
    // expect(item.value.name).to.be('a');
  });

  it('can load() multiple items from a collection', function*() {

    yield insert('letters', { name: 'a', last: 'b' });
    yield insert('letters', { name: 'a', last: 'c' });
    yield insert('letters', { name: 'a', last: 'd' });
    yield insert('letters', { name: 'a', last: 'e' });

    var cursor = load('letters', { name: 'a' });
    expect((yield cursor.read()).value.last).to.be('b');
    expect((yield cursor.read()).value.last).to.be('c');
    expect((yield cursor.read()).value.last).to.be('d');
    expect((yield cursor.read()).value.last).to.be('e');
  });

  if (options.hasCollections) {
    it('throws an error if "collection" doesn\'t exist in the operation', function*() {
      var err;
      try {
        yield insert(void 0, {});
      } catch(e) {
        err = e;
      }
      expect(err).not.to.be(void 0);
    });
  }

  return cases;
}