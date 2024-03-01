// PaymentProcessor.test.ts
import { PaymentProcessor } from "../src/payment-processor";

describe("PaymentProcessor", () => {
  it("should process payment with the injected payment service", () => {
    const mockPaymentService = {
      processPayment: jest.fn().mockReturnValue(true),
    };
    const paymentProcessor = new PaymentProcessor(mockPaymentService);

    paymentProcessor.processPayment(100);

    expect(mockPaymentService.processPayment).toHaveBeenCalledWith(100);
  });
});
