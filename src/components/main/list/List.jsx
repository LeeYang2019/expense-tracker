import React, { useContext } from 'react';
import {
	List as MUIList,
	ListItem,
	ListItemText,
	Avatar,
	ListItemSecondaryAction,
	IconButton,
	Slide,
	ListItemAvatar,
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';

const List = () => {
	const classes = useStyles();
	const globalState = useContext(ExpenseTrackerContext);
	console.log(globalState);

	const transactions = [
		{
			is: 1,
			type: 'Income',
			category: 'Salary',
			amount: 50,
			date: 'Wed Dec 16',
		},
		{
			is: 2,
			type: 'Expense',
			category: 'Pets',
			amount: 50,
			date: 'Wed Dec 17',
		},
		{
			is: 3,
			type: 'Income',
			category: 'Salary',
			amount: 150,
			date: 'Wed Dec 18',
		},
	];

	return (
		<MUIList dense={false} className={classes.list}>
			{transactions.map((t) => (
				<Slide direction="down" in unmountOnExit key={t.id}>
					<ListItem>
						<ListItemAvatar>
							<Avatar
								className={
									t.type === 'Income'
										? classes.avatarIncome
										: classes.avatarExpense
								}
							>
								<MoneyOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={t.category}
							secondary={`$${t.amount} - ${t.date}`}
						/>
						<ListItemSecondaryAction>
							<IconButton edge="end" aria-label="delete" onClick="">
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</MUIList>
	);
};

export default List;
