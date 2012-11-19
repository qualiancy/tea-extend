describe('extend(a, b)', function () {
  it('should merge two objects', function () {
    var a = { hello: 'universe' }
      , b = { speak: 'loudly' }
      , c = extend(a, b);
    a.should.deep.equal({ hello: 'universe', speak: 'loudly' });
    c.should.deep.equal({ hello: 'universe', speak: 'loudly' });
  });

  it('should overwrite properties in a', function () {
    var a = { hello: 'world' }
      , b = { hello: 'universe' }
      , c = extend(a, b);
    a.should.deep.equal({ hello: 'universe' });
    c.should.deep.equal({ hello: 'universe' });
  });
});

describe('extend(a, b, c)', function () {
  it('should merge many objects', function () {
    var a = { hello: 'universe' }
      , b = { speak: 'loudly' }
      , c = { language: 'en' }
      , d = extend(a, b, c);
    a.should.deep.equal({ hello: 'universe', speak: 'loudly', language: 'en' });
    d.should.deep.equal({ hello: 'universe', speak: 'loudly', language: 'en' });
  });

  it('should overwrite properties in previous objects', function () {
    var a = { hello: 'world' }
      , b = { hello: 'universe', speak: 'softly' }
      , c = { speak: 'loudly', language: 'en' }
      , d = extend(a, b, c);
    a.should.deep.equal({ hello: 'universe', speak: 'loudly', language: 'en' });
    d.should.deep.equal({ hello: 'universe', speak: 'loudly', language: 'en' });
  });
});
