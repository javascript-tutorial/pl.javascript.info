describe("truncate", function() {
  it("obcina ciąg do podanej długości (łącznie z wielokropkiem)", function() {
    assert.equal(
      truncate("Oto, co chciałbym powiedzieć na ten temat:", 20),
      "Oto, co chciałbym p…"
    );
  });

  it("nie zmienia krótkich łańcuchów", function() {
    assert.equal(
      truncate("Cześć wszystkim!", 20),
      "Cześć wszystkim!"
    );
  });

});
