<script lang="ts">
    import TodoForm from "../components/todo-form/TodoForm.svelte";
    import TodoList from "../components/todo-list/TodoList.svelte";
</script>

<div class="container mt-3">
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-8">
      <h2>TODO アプリ</h2>
      <TodoForm />
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-8">
      <TodoList />
    </div>
  </div>
</div>