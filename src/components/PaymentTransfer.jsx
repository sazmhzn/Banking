"use client";

import CustomInput from "./CustomInput";

const PaymentTransfer = () => {
  // const router = useRouter();

  // const submit = async (data) => {
  //   setIsLoading(true);

  //   try {
  //     const receiverAccountId = decryptId(data.sharableId);
  //     const receiverBank = await getBankByAccountId({
  //       accountId: receiverAccountId,
  //     });
  //     const senderBank = await getBank({ documentId: data.senderBank });

  //     const transferParams = {
  //       sourceFundingSourceUrl: senderBank.fundingSourceUrl,
  //       destinationFundingSourceUrl: receiverBank.fundingSourceUrl,
  //       amount: data.amount,
  //     };
  //     // create transfer
  //     const transfer = await createTransfer(transferParams);

  //     // create transfer transaction
  //     if (transfer) {
  //       const transaction = {
  //         name: data.name,
  //         amount: data.amount,
  //         senderId: senderBank.userId.$id,
  //         senderBankId: senderBank.$id,
  //         receiverId: receiverBank.userId.$id,
  //         receiverBankId: receiverBank.$id,
  //         email: data.email,
  //       };

  //       const newTransaction = await createTransaction(transaction);

  //       if (newTransaction) {
  //         form.reset();
  //         router.push("/");
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Submitting create transfer request failed: ", error);
  //   }

  //   setIsLoading(false);
  // };

  return (
    <div>
      <form>
        <CustomInput />
      </form>
    </div>
  );
};

export default PaymentTransfer;
