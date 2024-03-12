interface INotification {
  sendEmail(email: string, content: string): void;
  sendSMS(phoneNumber: string, content: string): void;
  sendPushNotification(deviceId: string, content: string): void;
}

export class EmailNotification implements INotification {
  sendEmail(email: string, content: string) {
    console.log(`Send mail to ${email} with content: ${content}`);
  }

  // Métodos não relevantes para notificação por e-mail
  sendSMS(phoneNumber: string, content: string) {
    throw new Error("Not implemented");
  }

  sendPushNotification(deviceId: string, content: string) {
    throw new Error("Not implemented");
  }
}
