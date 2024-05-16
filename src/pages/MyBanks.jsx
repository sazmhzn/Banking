import BankCard from "../components/BankCard"
import HeaderBox from "../components/HeaderBox"

const MyBanks = () => {
  return (
    <section className='flex'>
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
 
              <BankCard 
                key={1}
                account={["1", "2"]}
                userName={"John"}
              />

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default MyBanks