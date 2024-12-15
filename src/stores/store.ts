import { writable } from 'svelte/store';
import type { TodoItem } from '../types/todoItem-type';

export const title = writable<string>('');
export const priority = writable<number>(2);
export const todoList = writable<TodoItem[]>([]);
export const isEditing = writable<boolean>(false);
