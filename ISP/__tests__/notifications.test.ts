import { EmailNotification } from "../src/notifications";

describe("EmailNotification", () => {
  const emailNotification = new EmailNotification();

  it("should send an email", () => {
    expect(() =>
      emailNotification.sendEmail("test@example.com", "Hello")
    ).not.toThrow();
  });

  it("should not support sending SMS", () => {
    expect(() => emailNotification.sendSMS("123456789", "Hello")).toThrow(
      "Método não suportado"
    );
  });

  it("should not support sending push notifications", () => {
    expect(() =>
      emailNotification.sendPushNotification("device123", "Hello")
    ).toThrow("Método não suportado");
  });
});
