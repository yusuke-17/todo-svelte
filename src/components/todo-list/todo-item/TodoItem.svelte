<script lang="ts">
	import { todoList, isEditing } from '../../../stores/store';
	import { Priorities, priorityNames, type TodoItem } from '../../../types/todoItem-type';
	import { slide } from 'svelte/transition';

	export let todoItem: TodoItem;

	let editedTitle = todoItem.title;

	const saveEdit = () => {
		todoList.update((list) =>
			list.map((todo) => {
				if (todo.id === todoItem.id) {
					return { ...todo, title: editedTitle };
				}
				return todo;
			})
		);
		isEditing.set(false);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === '') {
			isEditing.set(true);
		}
	};

	const completeItem = (index: number) => {
		todoList.update((list) => list.filter((todo) => todo.id !== index));
	};
</script>

<li transition:slide class="list-group-item align-middle">
	<span
		class="badge m-1"
		class:badge-danger={todoItem.priority === Priorities.High}
		class:badge-warning={todoItem.priority === Priorities.Medium}
		class:badge-success={todoItem.priority === Priorities.Low}
	>
		{priorityNames[todoItem.priority]}
	</span>
	{#if $isEditing}
		<input type="text" bind:value={editedTitle} on:blur={saveEdit} />
	{:else}
		<span role="button" tabindex="0" on:click={() => isEditing.set(true)} on:keydown={handleKeyDown}
			>{todoItem.title}</span
		>
		<button class="btn btn-sm btn-success float-right" on:click={() => completeItem(todoItem.id)}>
			完了
		</button>
	{/if}
</li>
