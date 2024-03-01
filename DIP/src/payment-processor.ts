import { StripePaymentService } from "./stripe-payment.service";

export class PaymentProcessor {
  private paymentService = new StripePaymentService();

  processPayment(amount: number): void {
    const result = this.paymentService.processPayment(amount);
    if (result) {
      console.log("Payment processed successfully.");
    } else {
      console.log("Payment failed.");
    }
  }
}
