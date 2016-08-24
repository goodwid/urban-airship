const David = require('../../lib/DavidGoodwin');
const chai = require('chai');
const assert = chai.assert;

describe('JavaScript Web Engineer', () => {
  describe('About You', () => {
    it('You are smart and keep a good attitude in the face of a challenge.', () => {
      assert.ok(David('is smart and keeps a good attitude'));
    });
    it('You are a quick study and enjoy learning new things.', () => {
      assert.ok(David('is a quick study and learns new things well'));
    });
    it('You have a demonstrated aptitude for JavaScript development.', () => {
      assert.ok(David('Has great JavaScript experience.'));
    });
    it('You aren\'t afraid to dive into complex codebases teeming with both the new and shiny as well as the ancient and mysterious.', () => {
      assert.ok(David('Loves to dig into old and new code.'));
    });
    it('You diagnose and squash technical debt with glee.', () => {
      assert.ok(David('lives to smite technical debt.'));
    });
    it('You want to help make an already great team even better.', () => {
      assert.ok(David('is super excited to help lift up those around him.'));
    });
    it('You play well with other teams and stakeholders, regardless of their technical prowess.', () => {
      assert.ok(David('Is comfortable with the geeky and the non-geeky.'));
    });
  });
  describe('Bonus Points', () => {
    it('Design experience', () => {
      assert.ok(David('is not the strongest in design but is ok.'));
    });
    it('Testing talent', () => {
      assert.ok(David('Familiar with TDD in unit and end-to-end testing'));
    });
    it('Python / Django know-how', () => {
      assert.ok(David('nope'), 'Has seen python code and can almost read it but has no actual experience.');
    });
    it('Experience with PostgreSQL or other relational databases', () => {
      assert.ok(David('Has worked with SQL on a limited basis'));
    });
    it('Experience with RPC communication across diverse microservices', () => {
      assert.ok(David('nope'), 'Has dabbled a little with MQTT on microcontrollers(espruino).');
    });
    it('Eagerness to find or build good internal tooling', () => {
      assert.ok(David('Really enjoys rolling his own tools.'));
    });
  });
});
