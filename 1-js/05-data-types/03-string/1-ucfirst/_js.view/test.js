describe("ucFirst", function() {
  it('Zmienia pierwszy znak na wielką literę', function() {
    assert.strictEqual(ucFirst("john"), "John");
  });

  it("Nie wysypuje się na na pustym łańcuchu", function() {
    assert.strictEqual(ucFirst(""), "");
  });
});