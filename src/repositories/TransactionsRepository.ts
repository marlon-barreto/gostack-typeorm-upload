import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
export class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const incomes = await this.find({ where: { type: 'income' } });

    const outcomes = await this.find({ where: { type: 'outcome' } });

    const totalIncomes = incomes.reduce((total: number, item: Transaction) => {
      return total + item.value;
    }, 0);

    const totalOutcomes = outcomes.reduce(
      (total: number, item: Transaction) => {
        return total + item.value;
      },
      0,
    );

    const balance = {
      income: totalIncomes,
      outcome: totalOutcomes,
      total: totalIncomes - totalOutcomes,
    };

    return balance;
  }
}

export default TransactionsRepository;
