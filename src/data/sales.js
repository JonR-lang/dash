const mySales = {
  sales: [
    { id: 1, monthname: "January", sales: 7000 },
    { id: 2, monthname: "February", sales: 22000 },
    { id: 3, monthname: "March", sales: 3000 },
    { id: 4, monthname: "April", sales: 27000 },
    { id: 5, monthname: "May", sales: 9000 },
    { id: 6, monthname: "June", sales: 45000 },
    { id: 7, monthname: "July", sales: 9000 },
    { id: 8, monthname: "August", sales: 24000 },
    { id: 9, monthname: "September", sales: 33500 },
    { id: 10, monthname: "October", sales: 4000 },
    { id: 11, monthname: "November", sales: 30000 },
    { id: 12, monthname: "December", sales: 26000 },
  ],

  invoices: [
    {
      name: "Marcus Bergson",
      date: "2023-11-15",
      amount: 80000,
      status: "Paid",
      invoice: "12345_text.jpg",
    },
    {
      name: "Jaydon Vaccaro",
      date: "2023-11-15",
      amount: 150000,
      status: "Refund",
      invoice: "67890_text.jpg",
    },
    {
      name: "Corey Schleifer",
      date: "2023-11-14",
      amount: 87000,
      status: "Paid",
      invoice: "54321_text.jpg",
    },
    {
      name: "Cooper Press",
      date: "2023-11-14",
      amount: 10000,
      status: "Refund",
      invoice: "98765_text.jpg",
    },
    {
      name: "Philip Lubin",
      date: "2023-11-13",
      amount: 78000,
      status: "Paid",
      invoice: "23456_text.jpg",
    },
  ],

  stores: [
    {
      name: "Book Bazaar",
      amount: 2500000,
      percent: "15%",
      maxValue: 4800000,
    },
    {
      name: "Artisan Aisle",
      amount: 1800000,
      percent: "10%",
      maxValue: 4800000,
    },
    {
      name: "Toy Troop",
      amount: 1200000,
      percent: "8%",
      maxValue: 4800000,
    },
    {
      name: "X-store",
      amount: 1200000,
      percent: "8%",
      maxValue: 4800000,
    },
  ],
};

export default mySales;
