// src/components/TermsModal.jsx
import { useRef, forwardRef, useImperativeHandle } from "react";

const PrivacyModal = forwardRef((props, ref) => {
  const privacyModalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      const modal = new window.bootstrap.Modal(privacyModalRef.current);
      modal.show();
    },
  }));

  return (
    <div
      className="modal fade"
      ref={privacyModalRef}
      tabIndex="-1"
      aria-labelledby="privacyModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="privacyModalLabel">
              🔒 Privacy Policy
            </h5>
          </div>
          <div className="modal-body">
            <p class="text-muted">Last updated: June 16, 2025</p>

            <p>
              At <strong>Tah Kape!</strong>, your privacy matters to us. This
              Privacy Policy explains how we collect, use, and protect your
              information when you use our website (
              <a href="https://www.tahkape.ph" target="_blank">
                www.tahkape.ph
              </a>
              ).
            </p>

            <h6 class="mt-4">1. Information We Collect</h6>
            <ul>
              <li>
                <strong>Contact info</strong>: Name, email, phone number
              </li>
              <li>
                <strong>Order details</strong>: Items purchased, delivery
                address
              </li>
              <li>
                <strong>Account data</strong>: If you register or log in
              </li>
              <li>
                <strong>Website usage</strong>: IP address, browser type, pages
                visited
              </li>
            </ul>

            <h6 class="mt-4">2. How We Use Your Information</h6>
            <ul>
              <li>To process your orders</li>
              <li>To respond to your inquiries</li>
              <li>To send updates or promotions (if opted in)</li>
              <li>To improve your experience on our website</li>
            </ul>

            <h6 class="mt-4">3. Cookies 🍪</h6>
            <p>
              We use cookies to enhance your experience. You can disable them in
              your browser, but the site may not function fully without them.
            </p>

            <h6 class="mt-4">4. Sharing Your Information</h6>
            <p>We do not sell your personal data. We only share it with:</p>
            <ul>
              <li>Trusted delivery or payment providers</li>
              <li>Third parties for analytics or email services</li>
            </ul>

            <h6 class="mt-4">5. Data Protection</h6>
            <p>
              We use SSL encryption and regularly update our systems to keep
              your data safe.
            </p>

            <h6 class="mt-4">6. Your Rights</h6>
            <ul>
              <li>Access, update, or delete your data</li>
              <li>Withdraw consent for marketing</li>
              <li>File a complaint if needed</li>
            </ul>
            <p>
              Email us at{" "}
              <a href="mailto:privacy@tahkape.ph">privacy@tahkape.ph</a> to make
              a request.
            </p>

            <h6 class="mt-4">7. Third-Party Links</h6>
            <p>
              We may link to external sites. We're not responsible for their
              content or privacy practices.
            </p>

            <h6 class="mt-4">8. Updates to This Policy</h6>
            <p>This policy may change. We’ll post updates on this page.</p>

            <h6 class="mt-4">9. Contact Us</h6>
            <p>
              📧 Email:{" "}
              <a href="mailto:privacy@tahkape.ph">privacy@tahkape.ph</a>
              <br />
              📞 Phone: +63 936 939 2655
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Ingles eh, sige na nga...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PrivacyModal;
