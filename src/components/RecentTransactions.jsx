import { useEffect, useState } from "react";
// import { transactions } from "../utils/data";
// import { Tabs } from './Tabs';
import { Link } from "react-router-dom";
import TransactionsTable from "./TransactionsTable";
import BankInfo from "./BankInfo";
import Pagination from "./Pagination";
import { getAllTransactions } from "../service/transaction-services";

const tabsData = [
  {
    label: "checking",
    content: "",
  },
  {
    label: "saving",
    content: "",
  },
];

const RecentTransactions = ({page = 1}) => {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getAllTransactions().then((data) => {
      setTransactions(data);
      console.log("THe data is:");
      console.log(data);
    }).catch((err) => {
      // alert("API server error");
      console.log(err);
    });
  }, []);


  // const rowsPerPage = 10;
  // const totalPages = Math.ceil(transactions.data.length / rowsPerPage);
  const totalPages = 5;
  console.log(transactions.data);



  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabLabel, setTabLabel] = useState("checking");

  const handleTab = (idx, label) => {
    setActiveTabIndex(idx);
    setTabLabel(label);
  };

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        <Link
          // href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View all
        </Link>
      </header>
      {/* <Tabs/> */}
      <div className="w-full">
        <div className="recent-transaction-tablist flex space-x-3 border-b">
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-2 border-b-4 transition-colors duration-300  hover:text -bankGradient ${
                  idx === activeTabIndex
                    ? "border-bankGradient"
                    : "border-transparent hover:border-gray-200"
                }`}
                // Change the active tab on click.
                // onClick={() => setActiveTabIndex(idx)
                onClick={() => {
                  handleTab(idx, tab.label);
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Show active tab content. */}
        <BankInfo type="full" label={tabLabel} />
        {transactions.data && (
          <div className="py-4">
          <TransactionsTable
            data={transactions.data}
            header={transactions.header}
            tabLabel={tabLabel}
          />
          {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={page} />
              </div>
            )}

          {/* <Table data={transactions.data} header={transactions.header} tabLabel={tabLabel} /> */}
        </div>
        ) 
      }
        
      </div>
      {/* <TransactionsTable data={transactions.data} header={transactions.header} /> */}
    </section>
  );
};

export default RecentTransactions;
