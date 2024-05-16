import React from "react";

const PaymentTransferForm = () => {
  return (
    <form action="" className="flex flex-col">
      <div className="border-t border-gray-200">
        <div className="payment-transfer_form-item pb-6 pt-5">
          <div className="payment-transfer_form-content">
            <label className="text-14 font-medium text-gray-700">
              Transfer Note (Optional)
            </label>
            <span className="text-12 font-normal text-gray-600">
              Please provide any additional information or instructions related
              to the transfer
            </span>
          </div>
          <div className="flex w-full flex-col">
            <div>
              <textarea
                placeholder="Write a short note here"
                className="input-class flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="text-12 text-red-500" />
          </div>
        </div>

        <div className="payment-transfer_form-details">
          <h2 className="text-18 font-semibold text-gray-900">
            Bank account details
          </h2>
          <p className="text-16 font-normal text-gray-600">
            Enter the bank account details of the recipient
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="payment-transfer_form-item py-5">
          <div className="payment-transfer_form-content">
            <label className="text-14 w-full max-w-[280px] font-medium text-gray-700">
              Recipient&apos;s Email Address
            </label>
          </div>
          <div className="flex w-full flex-col">
            <div>
              <input
                placeholder="ex: johndoe@gmail.com"
                className="input-class flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="text-12 text-red-500" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="payment-transfer_form-item py-5">
          <div className="payment-transfer_form-content">
            <label className="text-14 w-full max-w-[280px] font-medium text-gray-700">
            Receiver&apos;s Bank A/C
            </label>
          </div>
          <div className="flex w-full flex-col">
            <div>
              <input
                placeholder="Enter the account number"
                className="input-class flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="text-12 text-red-500" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="payment-transfer_form-item py-5">
          <div className="payment-transfer_form-content">
            <label className="text-14 w-full max-w-[280px] font-medium text-gray-700">
            Amount
            </label>
          </div>
          <div className="flex w-full flex-col">
            <div>
              <input
                placeholder="ex: 5.00"
                className="input-class flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="text-12 text-red-500" />
          </div>
        </div>
      </div>

      <div className="payment-transfer_btn-box">
          <button type="submit" className="payment-transfer_btn h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Transfer Funds
          </button>
        </div>

    </form>
  );
};

export default PaymentTransferForm;
