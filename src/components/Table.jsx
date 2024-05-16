const Table = () => {

  const data = [
    {
      transaction: '123456',
      amount: 100,
      status: 'success',
      date: '2022-01-01',
      channel: 'channel1'
    },
    {
      transaction: '123456',
      amount: 100,
      status: 'success',
      date: '2022-01-01',
      channel: 'channel1'
    },
    {
      transaction: '123456',
      amount: 100,
      status: 'success',
      date: '2022-01-01',
      channel: 'channel1'
    },
  ]

  return (
    <div className="overflow-x-auto">
    <table className="w-full table-auto">
      <thead>
        <tr className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
          <th className="w-1/4 py-2">Transaction</th>
          <th className="py-2">Amount</th>
          <th className="py-2">Status</th>
          <th className="py-2">Date</th>
          <th className="py-2 text-right max-md:hidden">Channel</th>
        </tr>
      </thead>
      <tbody className="bg-black-1">
        {data.map(data => (
          <tr key={data.data} className="h-12 px-4 text-center align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
            <td className="py-2 text-center">{data.transaction}</td>
            <td className="py-2 text-center">{data.amount}</td>
            <td className="py-2 text-centerbg-blue-400">{data.status}</td>
            <td className="py-2 text-center">{data.date}</td>
            <td className="py-2 text-right">{data.channel}</td>
          </tr>
        ))}
      </tbody>
      </table>
  </div>
);
}

export default Table