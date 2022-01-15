// --- THE WRONG WAY ---
// below example is bad, because there is more than one potential change in the future
// we might need to change the createExpenses logic or the notifyBudgetExceed logic
class BudgetTrackerU {
  constructor() {
    this.expenses = 0;
    this.budget = 5000;
  }

  createExpenses(incomingExpenses) {
    this.expenses += incomingExpenses;
    if (this.expenses > this.budget) {
      this.notifyBudgetExceed();
    }
  }

  notifyBudgetExceed() {
    console.log('Your expenses exceed your budget');
  }
}

// --- THE RIGHT WAY ---
// now the potential change is only for the createExpenses method
// and if we decide to change how we notify the user, for example email, then we change the separate function
function notifyBudgetExceed(message) {
  console.log(message);
}

class BudgetTracker {
  constructor() {
    this.expenses = 0;
    this.budget = 5000;
  }

  createExpenses(incomingExpenses) {
    this.expenses += incomingExpenses;
    if (this.expenses > this.budget) {
      notifyBudgetExceed('Your expenses exceed your budget');
    }
  }
}

const tracker = new BudgetTracker();
tracker.createExpenses(2000);
tracker.createExpenses(3200);
