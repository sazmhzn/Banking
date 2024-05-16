import { transactionCategoryStyles } from "../constants";

const CategoryBadge = ({ category }) => {
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    transactionCategoryStyles[category] || transactionCategoryStyles.default;

  return (
    <div className={`category-badge ${borderColor} ${chipBackgroundColor}`}>
      <div className={`size-2 rounded-full ${backgroundColor}`} />
      <p className={`text-[12px] font-medium ${textColor}`}>{category}</p>
    </div>
  );
};

const TransactionsTable = ({ data, header, tabLabel }) => {
  // Filtering data based on type === 'checking'
const checkingData = data.filter(item => item.type === 'checking');
const savingData = data.filter(item => item.type === 'saving');

console.log(checkingData);
  return (
    <div>
      {tabLabel === "checking" ? (
        <table className="w-full">
          <thead className="bg-[#f9fafb] p-4 [&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              {header.length > 0 ? (
                <>
 
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Transaction
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Amount
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Status
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Date
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0 max-md:hidden">
                    Channel
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0 max-md:hidden">
                    Category
                  </th> 
                </>
              ) : (
                "No headers"
              )}
            </tr>
          </thead>
          <tbody className="border-t bg-muted/50 font-medium [&>tr]:last:border-b-0">
            {checkingData.length > 0
              ? 
              checkingData.map((data) => {

                  return (
                    <tr
                      key={data.key}
                      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    >
                      {/* <td>hello</td> */}
                      <td className="p-4 text-center align-middle text-muted-foregroundp-4 [&:has([role=checkbox])]:pr-0">
                        <div className="pl-4 flex items-center justify-start gap-3">
                          <h1 className="text-[14px] truncate font-semibold text-[#344054]">
                            {data.transaction}
                          </h1>
                        </div>
                      </td>

                      <td className="p-4 align-middle pl-2 pr-10 font-semibold text-center text-[#039855]">
                        {data.amount}
                      </td>

                      <td className=" p-4 flex justify-center text-center align-center ">
                        {" "}
                        <CategoryBadge category={data.status} />{" "}
                      </td>

                      <td className="p-4 text-center align-middle min-w-32">
                        {data.date}
                      </td>

                      <td className="p-4 text-center align-middle pl-2 max-md:hidden">
                        {data.channel}
                      </td>
                      <td className=" p-4 flex justify-center text-center align-center max-md:hidden">
                        {" "}
                        <CategoryBadge category={data.category} />
                      </td>
                    </tr>
                  );
                })
              : "No data found"}
          </tbody>
        </table>
      ) : (
        <table className="w-full">
          <thead className="bg-[#f9fafb] p-4 [&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              {header.length > 0 ? (
                <>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Transaction
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Amount
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Status
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    Date
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0 max-md:hidden">
                    Channel
                  </th>
                  <th className="p-4 align-middle [&:has([role=checkbox])]:pr-0 max-md:hidden">
                    Category
                  </th>
                </>
              ) : (
                "No headers"
              )}
            </tr>
          </thead>
          <tbody className="border-t bg-muted/50 font-medium [&>tr]:last:border-b-0">
            {savingData.length > 0
              ? 
              savingData.map((data) => {

                  return (
                    <tr
                      key={data.key}
                      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    >
                      {/* <td>hello</td> */}
                      <td className="p-4 text-left align-middle text-muted-foregroundp-4 [&:has([role=checkbox])]:pr-0">
                        <div className="flex items-center justify-start gap-3">
                          <h1 className="text-[14px] truncate font-semibold text-[#344054]">
                            {data.transaction}
                          </h1>
                        </div>
                      </td>

                      <td className="p-4 align-middle pl-2 pr-10 font-semibold text-center text-[#039855]">
                        {data.amount}
                      </td>

                      <td className=" p-4 flex justify-center text-center align-center ">
                        {" "}
                        <CategoryBadge category={data.status} />{" "}
                      </td>

                      <td className="p-4 text-center align-middle min-w-32">
                        {data.date}
                      </td>

                      <td className="p-4 text-center align-middle pl-2 max-md:hidden">
                        {data.channel}
                      </td>
                      <td className=" p-4 flex justify-center text-center align-center max-md:hidden">
                        {" "}
                        <CategoryBadge category={data.category} />
                      </td>
                    </tr>
                  );
                })
              : "No data found"}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionsTable;
