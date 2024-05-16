import HeaderBox from "../components/HeaderBox"
import RecentTransactions from "../components/RecentTransactions"
import TotalBalanceBox from "../components/TotalBalanceBox"

const Home = () => {
  const user = {
    name: 'Suron Maharjan',
    email: 'suron.maharjan@gamil.com'
  }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={user.name}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={['1']}
            totalBanks="2"
            totalCurrentBalance="200"
          />
        </header>

        <RecentTransactions 
          accounts={'sur'}
          transactions={['1230', '123']}
          page={1}
        />
       </div>

       {/* <RightSidebar 
        user={user}
        // transactions={account?.transactions}
        banks={2}
      />  */}
    </section>
  )
}

export default Home