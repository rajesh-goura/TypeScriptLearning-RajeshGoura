type Sales = {
    id:number;
    date:string;
    amount:number;
    category:string;
}

const sales : Sales[] = [
    { id: 1000, date: "2025-01-10", amount: 250.75, category: "Electronics" },
    { id: 1001, date: "2025-02-15", amount: 125.00, category: "Clothing" },
    { id: 1002, date: "2024-12-05", amount: 89.99, category: "Groceries" },
    { id: 1003, date: "2023-11-20", amount: 310.50, category: "Furniture" },
    { id: 1004, date: "2025-03-08", amount: 45.60, category: "Accessories" },
    { id: 1005, date: "2023-10-12", amount: 75.20, category: "Books" },
    { id: 1006, date: "2024-09-25", amount: 560.00, category: "Electronics" },
    { id: 1007, date: "2024-08-30", amount: 99.99, category: "Sports" },
    { id: 1008, date: "2023-07-18", amount: 120.00, category: "Clothing" },
    { id: 1009, date: "2024-06-22", amount: 300.75, category: "Furniture" },
    { id: 1010, date: "2025-05-14", amount: 89.99, category: "Groceries" },
    { id: 1011, date: "2024-04-10", amount: 220.50, category: "Books" },
    { id: 1012, date: "2023-03-02", amount: 45.60, category: "Accessories" },
    { id: 1013, date: "2024-02-19", amount: 150.75, category: "Electronics" },
    { id: 1014, date: "2023-01-25", amount: 99.90, category: "Sports" },
    { id: 1015, date: "2025-06-05", amount: 400.00, category: "Furniture" },
    { id: 1016, date: "2024-11-23", amount: 59.99, category: "Clothing" },
    { id: 1017, date: "2023-12-12", amount: 500.75, category: "Electronics" },
    { id: 1018, date: "2025-07-28", amount: 65.20, category: "Books" },
    { id: 1019, date: "2024-08-16", amount: 49.99, category: "Groceries" }
  ];

  const filterByCategory = (sale:Sales[] , c:string): Sales[]=>{
    return sale.filter((sale: Sales): Boolean =>{
        return sale.category===c;
    })

  };

  const highestSales = (arr: Sales[]):number=>{
    let max:number=-Infinity;
    arr.forEach((data: Sales):void=>{
        max=Math.max(data.amount,max);
    })
    return max;
    
  }

  const lowestSales = (arr: Sales[]):number=>{
    let min:number=Infinity;
    arr.forEach((data: Sales):void=>{
        min=Math.min(data.amount,min);
    })
    return min;
    
  }

  const sortByDates = (arr: Sales[]): Sales[]=>{
    return  arr.sort((a:Sales,b:Sales):number=>{
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
  }


const monthlySales = (sales: Sales[], month: number, year: number): number => {
    return sales.filter((sale) => {
        const saleDate = new Date(sale.date);
        return saleDate.getMonth() === month - 1 && saleDate.getFullYear() === year;
      }).reduce((total, sale) => total + sale.amount, 0);
  };
  
  
  const yearlySales = (sales: Sales[], year: number): number => {
    return sales.filter((sale) => new Date(sale.date).getFullYear() === year).reduce((total, sale) => total + sale.amount, 0);
  };
  
  const salesByCategory = (sales: Sales[], category: string): number => {
    return sales.filter((sale) => sale.category === category).reduce((total, sale) => total + sale.amount, 0);
  };

  const display = (sales: Sales[]): void => {
    sales.forEach((sale) => {
      console.log(`ID: ${sale.id}, Date: ${sale.date}, Amount: $${sale.amount.toFixed(2)}, Category: ${sale.category}`);
    });
  };
  
  

  console.log(filterByCategory(sales,"Books"));
  console.log(highestSales(sales));
  display(sales);
