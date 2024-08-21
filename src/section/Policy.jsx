import React from "react";

const Policy = () => {
  return (
    <div
      className="max-w-[1240px] mx-auto py-16 px-2 grid lg:grid-cols-1 gap-8 text-gray-300"
      id="policy"
    >
      <div className="mx-auto px-2">
        <h1 className="w-full text-3xl font-bold text-[#a6a4f8]">
          Privacy Policy
        </h1>
        <p className="py-4">
          We take your privacy seriously and are committed to protecting your
          personal information. This privacy policy describes how we collect,
          use, and share your personal information when you use our database
          services.
        </p>
        <ol className="list-decimal px-4 grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          <li>
            <h1 className="font-bold">Information We Collect</h1> We collect
            information that you provide to us when you sign up for our
            services, such as your name, email address, and billing information.
            We may also collect information about your use of our services, such
            as your IP address, browser type, and operating system.
          </li>
          <li>
            <h1 className="font-bold">How We Use Your Information</h1>
            We use your information to provide our services to you, to
            communicate with you about your account, and to improve our
            services. We may also use your information to send you marketing
            communications about our services.
          </li>
          <li>
            <h1 className="font-bold">How We Share Your Information</h1>
            We may share your information with our service providers and
            partners who help us provide our services to you. We may also share
            your information with law enforcement or other government agencies
            if required by law or to protect our rights and property.
          </li>
          <li>
            <h1 className="font-bold">Your Choices</h1>
            You can choose not to provide us with certain information, but this
            may limit your ability to use our services. You can also opt-out of
            receiving marketing communications from us.
          </li>
          <li>
            <h1 className="font-bold">Changes to Our Privacy Policy</h1>
            We may update our privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on our website.
          </li>
          <li>
            <h1 className="font-bold">Contact Us</h1>
            If you have any questions or concerns about our privacy policy,
            please contact us at [111-000-1234].
          </li>
        </ol>
        <p className="py-6">
          By using our services, you agree to our collection, use, and sharing
          of your personal information as described in this privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Policy;
