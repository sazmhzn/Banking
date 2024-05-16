export const data = {
  "header":[
    {
      key: "username",
      name: "Username",
    },
    {
      key: "email",
      name: "Email",
    },
    {
      key: "age",
      name: "Age",
    },
    {
      key: "city",
      name: "City",
    },
  ],
  users: [
    {
      firstName: "John",
      lastName: "Doe",
      address1: "123 Main St",
      city: "Anytown",
      state: "CA",
      postalCode: "12345",
      dateOfBirth: "1990-01-01",
      ssn: "123-45-6789",
      email: "johndoe@example.com",
      password: "password123",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      address1: "456 Elm St",
      city: "Othertown",
      state: "NY",
      postalCode: "67890",
      dateOfBirth: "1995-05-05",
      ssn: "987-65-4321",
      email: "janedoe@example.com",
      password: "password456",
    },
    {
      firstName: "Bob",
      lastName: "Smith",
      address1: "789 Oak St",
      city: "Anycity",
      state: "TX",
      postalCode: "23456",
      dateOfBirth: "1985-10-10",
      ssn: "555-12-3456",
      email: "bobsmith@example.com",
      password: "password789",
    },
  ],
  "Action": [
    {}
  ]
}

export const transactions = {
  "header": [
    {
      key: "transaction",
      name: "Transaction"
    },
    {
      key: "amount",
      name: "Amount"
    },
    {
      key: "status",
      name: "Status"
    },
    {
      key: "date",
      name: "Date"
    },
    {
      key: "channel",
      name: "Channel"
    },
    {
      key: "category",
      name: "Category"
    },
  ],
  "data":[
    {
      transaction: 'usersdfsdsdfsdfsdfsdfsdf123456',
      amount: 100,
      status: 'Success',
      date: '2022-01-01',
      channel: 'channel1',
      category: 'Payment',
      type: 'checking'
    },
    {
      transaction: '123456',
      amount: 100,
      status: 'Success',
      date: '2022-01-01',
      channel: 'channel1',
      category: 'Travel',
      type: 'checking'
    },
    {
      transaction: '123456',
      amount: 100,
      status: 'Success',
      date: '2022-01-01',
      channel: 'channel1',
      category: 'Food and Drink',
      type: 'checking'
    },
    {
      transaction: 'ssdfsdf',
      amount: 100,
      status: 'Success',
      date: '2022-01-01',
      channel: 'channel1',
      category: 'Food and Drink',
      type: 'saving'
    },
  ]
  //create a json file for transaction with header: transaction, amount, ,status, date, channel1?
}