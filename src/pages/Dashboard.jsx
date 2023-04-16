import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from '../context/AppContext';
import Budget from '../components/Budget';
import ExpenseTotal from '../components/ExpenseTotal';
import ExpenseList from '../components/ExpenseList';
import AddExpenseForm from '../components/AddExpenseForm';
import RemainingBudget from '../components/Remaining';
import AddIncome from '../components/AddIncome'
import CategorizedBudget from '../components/CategorizedBudget';
import { Typography } from '@mui/material';

export default function Dashboard() {
  return (
		<AppProvider>
			<div className='container-fluid'>
				<div className='row align-items-stretch'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				
				<div className='row mt-3'>
					<div className='col'>
						<ExpenseList />
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col'>
						<AddExpenseForm />
					</div>
				</div>

				<div className='row mt-3'>
					<div className='col-12 col-lg-6'>
						<CategorizedBudget/>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='widget'>

						</div>
					</div>
				</div>
			</div>
		</AppProvider>
	);
 }