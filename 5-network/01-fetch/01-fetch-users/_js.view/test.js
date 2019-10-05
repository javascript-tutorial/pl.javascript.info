describe("getUsers", function() {

  it("pobiera użytkowników GitHuba", async function() {
    let users = await getUsers(['iliakan', 'remy', 'brak.użytkowników']);
    assert.equal(users[0].login, 'iliakan');
    assert.equal(users[1].login, 'remy');
    assert.equal(users[2], null);
  });

});
