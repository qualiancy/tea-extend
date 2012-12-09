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

describe('extend.include(props ...)', function () {
  it('should return a function', function () {
    var exclude = extend.exclude('prop');
    exclude.should.be.a('function');
  });

  it('should include only the listed properties', function () {
    var a = { hello: 'world' }
      , b = { hello: 'universe', speak: 'softly' }
      , c = { speak: 'loudly', language: 'en' }
      , exclude = extend.include('hello', 'speak')
      , d = exclude(a, b, c);
    d.should.deep.equal({ hello: 'universe', speak: 'loudly' });
  });

  it('should not modify the original objects', function () {
    var a = { hello: 'world' }
      , b = { hello: 'universe', speak: 'softly' }
      , c = { speak: 'loudly', language: 'en' }
      , exclude = extend.include('hello', 'speak')
      , d = exclude(a, b, c);
    a.should.deep.equal({ hello: 'world' });
    b.should.deep.equal({ hello: 'universe' , speak: 'softly' });
    c.should.deep.equal({ speak: 'loudly' , language: 'en' });
  });
});

describe('extend.exclude(props ...)', function () {
  it('should return a function', function () {
    var exclude = extend.exclude('prop');
    exclude.should.be.a('function');
  });

  it('should exclude the listed properties', function () {
    var a = { hello: 'world' }
      , b = { hello: 'universe', speak: 'softly' }
      , c = { speak: 'loudly', language: 'en' }
      , exclude = extend.exclude('hello', 'speak')
      , d = exclude(a, b, c);
    d.should.deep.equal({ language: 'en' });
  });

  it('should not modify the original objects', function () {
    var a = { hello: 'world' }
      , b = { hello: 'universe', speak: 'softly' }
      , c = { speak: 'loudly', language: 'en' }
      , exclude = extend.exclude('hello', 'speak')
      , d = exclude(a, b, c);
    a.should.deep.equal({ hello: 'world' });
    b.should.deep.equal({ hello: 'universe' , speak: 'softly' });
    c.should.deep.equal({ speak: 'loudly' , language: 'en' });
  });
});
