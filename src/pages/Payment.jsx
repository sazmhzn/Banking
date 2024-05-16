import HeaderBox from '../components/HeaderBox'
import PaymentTransfer from '../components/PaymentTransfer'
import PaymentTransferForm from '../components/PaymentTransferForm'

const Payment = () => {
  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-5">
        <PaymentTransferForm />
      </section>
    </section>
  )
}

export default Payment