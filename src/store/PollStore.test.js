import PollStore from './PollStore';

let store = null;

beforeEach(() => {
  store = new PollStore();
});

test('PollStore initialized with correct default values', () => {
  expect(store.pollQuestion).toEqual('');
  expect(store.pollOptions).toEqual([]);
  expect(store.pollLocked).toBe(false);
});

test('PollStore changes pollQuestion property', () => {
  store.setPollQuestion('test');
  expect(store.pollQuestion).toEqual('test');
});

test('PolLStore changes pollOptions property', () => {
  store.setPollOptions(['new-option']);
  expect(store.pollOptions).toEqual(['new-option']);
});

test('PollStore adds pollOption', () => {
  store.addPollOption('test');
  expect(store.pollOptions).toEqual(['test']);
});

test('PollStore changes pollLocked property', () => {
  store.setPollLocked(true);
  expect(store.pollLocked).toBe(true);
});

test('PollStore resets all properties', () => {
  store.setPollQuestion('newQuestion');
  store.setPollOptions(['newOptions']);
  store.setPollLocked(true);
  store.reset();
  expect(store.pollQuestion).toEqual('');
  expect(store.pollOptions).toEqual([]);
  expect(store.pollLocked).toBe(false);
});

test('PollStore increases count property of pollOption', () => {
  store.setPollOptions([{ id: 'option1', count: 0 }]);
  store.addVote('option1');
  expect(store.pollOptions[0].count).toEqual(1);
});
