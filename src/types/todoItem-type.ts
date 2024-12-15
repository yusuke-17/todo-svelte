export const Priorities = {
	High: 1,
	Medium: 2,
	Low: 3
} as const;
type Priority = (typeof Priorities)[keyof typeof Priorities];

export const priorityNames = {
	[Priorities.High]: '高',
	[Priorities.Medium]: '中',
	[Priorities.Low]: '低'
} as const;

export type TodoItem = {
	id: number;
	title: string;
	priority: Priority;
};
