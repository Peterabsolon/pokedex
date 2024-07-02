import { makeAutoObservable } from 'mobx'

import { NotificationsStore } from './notifications.store'

export class AppStore {
  notifications: NotificationsStore

  constructor() {
    makeAutoObservable(this)

    this.notifications = new NotificationsStore()
  }
}

export const app = new AppStore()
