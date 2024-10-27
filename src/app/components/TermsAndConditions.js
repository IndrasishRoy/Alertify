import React from "react";

const TermsAndConditions = ({ setShowTerms }) => {
  // Function to handle going back to the registration page
  const handleBackToSignUp = () => {
    setShowTerms(false);
  };
  return (
    <div className="flex w-full justify-center items-center bg-white">
      <div className="p-10 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Terms & Conditions
        </h2>
        <div className="border border-gray-300 rounded-lg p-4 max-h-[70vh] overflow-y-auto">
          <p className="mb-4">
            Welcome to <b>Alertify</b>! Before completing your registration, we
            just need to make sure you're on the same page with our Terms and
            Conditions. Please take a moment to review them below. By
            proceeding, you agree to follow these terms, which are here to
            protect both you and us.
          </p>
          <p className="mb-4">
            ----------------------------------------------------------------------------------------------------------------------
          </p>
          <p className="font-bold mb-2">Terms and Conditions</p>
          <p className="mb-4">
            1. Acceptance of Terms: By signing up and using Alertify, you agree
            to follow these terms, our policies, and any laws that apply. If you
            do not agree, you should not use our services.
          </p>
          <p className="mb-4">
            2. Usage Rights: You’re allowed to use Alertify for personal,
            non-commercial purposes only. That means no copying, selling, or
            modifying the content unless you have permission.
          </p>
          <p className="mb-4">
            3. Disclaimers: Alertify provides information and services "as is" —
            meaning we cannot guarantee everything will always work perfectly or
            that the data will always be 100% accurate (though we try!).
          </p>
          <p className="mb-4">
            4. Liability Limitations: We do our best, but Alertify is not
            responsible for any damages that may happen due to the use of our
            services (like loss of data or delays in receiving alerts).
          </p>
          <p className="mb-4">
            5. Data Accuracy: We aim for accuracy in everything, but sometimes
            there might be errors (human or technical). Let us know if you spot
            one, and we’ll fix it.
          </p>
          <p className="mb-4">
            6. Links to Other Sites: You might find links to other websites
            through Alertify. We don’t control those, so make sure you check
            their policies, too.
          </p>
          <p className="mb-4">
            7. Updates to Terms: We may update these terms from time to time. We
            will notify you of significant changes, but it’s a good idea to
            review them occasionally.
          </p>
          <p className="mb-4">
            8. Governing Law: All legal matters regarding Alertify are governed
            by the laws of the country where we operate.
          </p>
          <p className="mb-4">
            9. Your Privacy: Your privacy is important to us. By signing up,
            you’re also agreeing to our Privacy Policy, which explains how we
            collect and use your information.
          </p>
          <p className="mb-4">
            10. Alerts and Notifications: While we strive to provide real-time
            alerts and accurate information about emergencies and weather
            conditions, there may be factors beyond our control that affect
            timeliness. Please use our services as an additional resource, not
            your sole source of information during emergencies.
          </p>
          <p className="mb-4">
            ----------------------------------------------------------- <br />
            ### Ready to Proceed? By clicking "Agree & Sign Up," you confirm
            that you've read, understood, and accepted these Terms and
            Conditions.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleBackToSignUp}
            className="w-full p-3 bg-green-600 text-white rounded-full font-semibold"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;