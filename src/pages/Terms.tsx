import './Terms.css';

export function Terms() {
  return (
    <div className="terms container">
      <h1 className="terms-title">Terms & Ordering Information</h1>
      <div className="terms-content">
        <section>
          <h2>Ordering</h2>
          <p>All products are made to order to ensure maximum freshness. Please place your order at least H-2 (two days) before your requested delivery or pickup date.</p>
        </section>

        <section>
          <h2>Payment</h2>
          <p>Full payment is required to confirm your order. We accept bank transfers. Order processing will begin once payment verification is completed.</p>
        </section>

        <section>
          <h2>Pickup & Delivery</h2>
          <p>Orders can be picked up at our location or delivered via your preferred courier service (GoSend, GrabExpress). Delivery costs and risks are borne by the customer.</p>
        </section>

        <section>
          <h2>Cancellation & Changes</h2>
          <p>Cancellations or changes to your order must be made at least 24 hours prior to the scheduled delivery/pickup time. Late cancellations are not eligible for a refund.</p>
        </section>

        <section>
          <h2>Product Quality & Refund Policy</h2>
          <p>We pride ourselves on the quality of our homemade products. If there is a significant issue with your order upon receipt, please contact us immediately on WhatsApp with a photo of the product. Refunds or replacements are evaluated on a case-by-case basis.</p>
        </section>
      </div>
    </div>
  );
}
