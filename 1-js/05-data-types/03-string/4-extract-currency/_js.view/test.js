describe("extractCurrencyValue", function() {

  it("dla ciągu $120 zwraca numer 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });


});