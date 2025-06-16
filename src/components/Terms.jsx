// src/components/TermsModal.jsx
import { useRef, forwardRef, useImperativeHandle } from "react";

const TermsModal = forwardRef((props, ref) => {
  const termsModalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      const modal = new window.bootstrap.Modal(termsModalRef.current);
      modal.show();
    },
  }));

  return (
    <div
      className="modal fade"
      ref={termsModalRef}
      tabIndex="-1"
      aria-labelledby="termsModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-lg modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 class="modal-title" id="termsModalLabel">
              ☕ Terms and Conditions of Use
            </h5>
          </div>
          <div className="modal-body">
            <p class="text-muted">Last updated: June 16, 2025</p>

            <p>
              Welcome to <strong>Tah Kape</strong>!
            </p>
            <p>
              By accessing and using our website (
              <a href="https://www.tahkape.ph" target="_blank">
                www.tahkape.ph
              </a>
              ), you agree to these Terms. Please read them carefully.
            </p>

            <h6>1. Acceptance of Terms</h6>
            <p>
              You must be at least 18 years old or have permission from a
              guardian.
            </p>

            <h6>2. Use of Website</h6>
            <ul>
              <li>Don’t misuse or break the site</li>
              <li>No hacking or impersonating others</li>
            </ul>

            <h6>3. Online Orders</h6>
            <ul>
              <li>Subject to product availability</li>
              <li>Prices may change</li>
              <li>Payment required at checkout</li>
            </ul>

            <h6>4. Intellectual Property</h6>
            <p>
              All site content belongs to Tah Kape! unless credited otherwise.
            </p>

            <h6>5. User-Submitted Content</h6>
            <p>Be respectful. We reserve the right to remove content.</p>

            <h6>6. Third-Party Links</h6>
            <p>We’re not responsible for external websites.</p>

            <h6>7. Limitation of Liability</h6>
            <p>
              We’re not liable for outages, lost data, or other disruptions.
            </p>

            <h6>8. Changes to Terms</h6>
            <p>Terms may change anytime. Keep an eye out for updates.</p>

            <h6>9. Governing Law</h6>
            <p>These terms are governed by the laws of the Philippines.</p>

            <h6>10. Contact Us</h6>
            <p>
              📧 Email: hello@tahkape.ph
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
              Sigeee, sabi mo eh...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TermsModal;
