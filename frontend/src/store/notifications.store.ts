import { makeAutoObservable } from 'mobx'

export class NotificationsStore {
  constructor() {
    makeAutoObservable(this)
  }
}
