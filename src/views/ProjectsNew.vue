<template>
  <h1 class="mb-4">New Project</h1>
  <form action="/projects" method="post">
    <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="project_name"> Name </label>
      <div class="col-sm-10">
        <input
          class="form-control"
          id="project_name"
          name="project[name]"
          placeholder="Name"
          type="text"
          required
        />
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-2"></div>
      <div class="col-sm-10">
        <button class="btn btn-primary mr-2" type="submit">Save</button>
        <a class="btn btn-outline-secondary" href="/projects"> Back </a>
      </div>
    </div>
  </form>
</template>
