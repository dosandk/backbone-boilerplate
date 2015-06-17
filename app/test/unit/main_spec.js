describe("Our First Test", function() {
    it('should pass', function() {
        expect(true).toBe(true);
    })
});

describe('jQuery', function() {
    it('should be loaded', function() {
        expect($).toBeDefined();
    })
});

describe('Underscore', function() {
    it('should be loaded', function() {
        expect(_).toBeDefined();
    })
});

describe('Backbone', function() {
    it('should be loaded', function() {
        expect(Backbone).toBeDefined();
    })
});

it("should expose an attribute", function() {
    var episode = new Backbone.Model({
        title: "Hollywood - Part 2"
    });
    expect(episode.get("title"))
        .toEqual("Hollywood - Part 2");
});

it("apple data should be loaded", function() {
    expect(appleData.length).toEqual(4);
});

