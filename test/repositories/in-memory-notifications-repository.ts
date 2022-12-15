import { Notification } from '../../src/aplication/entities/notification';
import { NotificationRepository } from '../../src/aplication/repositories/notification-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
