// import { EmailNotification, SMSNotification } from "../src/notifications";
// import { NotificationService } from "../src/notification-service";

describe("NotificationService", () => {
  it("should have a send method", () => {
    const emailSender = new EmailNotification();
    const smsSender = new SMSNotification();
    expect(typeof emailSender.send).toBe("function");
    expect(typeof smsSender.send).toBe("function");
  });
  it("should send an email notification", () => {
    const sendSpy = jest.fn();
    EmailNotification.prototype.send = sendSpy;
    const service = new NotificationService(new EmailNotification());
    service.notifyUser("user@example.com", "Hello, world!");
    expect(sendSpy).toHaveBeenCalled();
    expect(sendSpy).toHaveBeenCalledWith("user@example.com", "Hello, world!");
  });

  it("should send an SMS notification", () => {
    const sendSpy = jest.fn();
    SMSNotification.prototype.send = sendSpy;
    const service = new NotificationService(new SMSNotification());
    service.notifyUser("user@example.com", "Hello, world!");
    expect(sendSpy).toHaveBeenCalled();
    expect(sendSpy).toHaveBeenCalledWith("user@example.com", "Hello, world!");
  });
});
