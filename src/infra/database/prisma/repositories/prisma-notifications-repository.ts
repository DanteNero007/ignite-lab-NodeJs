import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../aplication/entities/notification';
import { NotificationRepository } from '../../../../aplication/repositories/notification-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        category: notification.category,
        content: notification.content.value,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
