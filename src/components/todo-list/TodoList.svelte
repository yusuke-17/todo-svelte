<script lang="ts">
	import { todoList } from '../../stores/store';
	import TodoItem from './todo-item/TodoItem.svelte';

	$: sortedTodoList = $todoList.sort((a, b) => a.priority - b.priority);
</script>

{#if $todoList.length === 0}
	<div>アイテムを作成してください</div>
{:else}
	<ul class="list-group">
		{#each sortedTodoList as todoItem (todoItem.id)}
			<TodoItem {todoItem} />
		{/each}
	</ul>
{/if}
