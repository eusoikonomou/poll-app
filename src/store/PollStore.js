import { action, observable } from 'mobx';

export default class PollStore {
  @observable pollQuestion = '';
  @observable pollOptions = [];
  @observable votes = [];
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

  @action addVote = optionId => {
    this.pollOptions.find((option) => option.id === optionId).count++;
  }

  @action reset = () => {
    this.votes = [];
    this.pollOptions = [];
    this.pollQuestion = '';
    this.pollLocked = false;
  }

  @action setPollLocked = (data) => {
    this.pollLocked = data;
  }
}
