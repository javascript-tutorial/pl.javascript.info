describe("checkSpam", function() {
  it('uważa "buy ViAgRA now" za spam', function() {
    assert.isTrue(checkSpam('buy ViAgRA now'));
  });

  it('uważa "free xxxxx" za spam', function() {
    assert.isTrue(checkSpam('free xxxxx'));
  });

  it('nie uważa "innocent rabbit" za spam', function() {
    assert.isFalse(checkSpam('innocent rabbit'));
  });
});