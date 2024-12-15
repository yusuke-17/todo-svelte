<script lang="ts">
    import {title, priority, todoList} from "../../stores/store";
    import { priorityNames } from '../../types/todoItem-type';
    import { get } from 'svelte/store';

    $: disabledCreateButton = $title === ''

    const handleClickCreateButton = () => {
        const id = new Date().getTime()
        const currentPriority = get(priority)
        if (currentPriority === 1 || currentPriority === 2 || currentPriority === 3) {
        todoList.update(list => [...list, { id, title: get(title), priority: currentPriority }])
        }
        title.set('')
    }
</script>

<form>
    <div class="form-group">
        <label for="title">タイトル</label>
        <input id="title" class="form-control" bind:value={$title} />
    </div>
    <div class="form-group">
        <label for="priority">優先度</label>
        <select id="priority" class="form-control" bind:value={$priority}>
            {#each Object.entries(priorityNames) as [value, label]}
                <option value={Number(value)}>{label}</option>
            {/each}
        </select>
    </div>
    <div class="form-group text-center">
        <button
            class="btn btn-primary px-5"
            disabled={disabledCreateButton}
            on:click={handleClickCreateButton}>
            作成
        </button>
    </div>
</form>