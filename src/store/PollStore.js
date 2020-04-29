import { action, observable } from 'mobx';

export default class PollStore {
  @observable pollQuestion = '';

  @observable pollOptions = [];

  @observable pollLocked = false;

  @action setPollQuestion = (data) => {
    this.pollQuestion = data;
  }

  @action setPollOptions = (data) => {
    this.pollOptions = data;
  }

  @action addPollOption = (data) => {
    this.pollOptions.push(data);
  }

  @action addVote = (optionId) => {
    const option = this.pollOptions.find((opt) => opt.id === optionId);
    option.count += 1;
  }

  @action reset = () => {
    this.pollOptions = [];
    this.pollQuestion = '';
    this.pollLocked = false;
  }

  @action setPollLocked = (data) => {
    this.pollLocked = data;
  }
}
