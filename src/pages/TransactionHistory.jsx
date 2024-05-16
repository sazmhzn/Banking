import TransactionsTable from '../components/TransactionsTable'
import HeaderBox from '../components/HeaderBox'
import Pagination from '../components/Pagination'
import { transactions } from '../utils/data';

const TransactionHistory = ({page = 1}) => {

  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.data.length / rowsPerPage);

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
          title="Transaction History"
          subtext="See your bank details and transactions."
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">
              {/* {account?.data.name} */}
              Suron Maharjan
              </h2>
            <p className="text-14 text-blue-25">
              {/* {account?.data.officialName} */}
              Surohan Maharjan
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● 
              {/* {account?.data.mask} */}
              123
            </p>
          </div>
          
          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">
              {/* {formatAmount(account?.data.currentBalance)} */}
              Rs. 1235
              </p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
        <TransactionsTable
            data={transactions.data}
            header={transactions.header}
            tabLabel={'checking'}
          />
            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={page} />
              </div>
            )}
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory