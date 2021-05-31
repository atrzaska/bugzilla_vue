<template>
  <h1 class="mb-4">New Story</h1>
  <form action="/projects/qwe/stories" method="post">
    <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="story_name"> Name </label>
      <div class="col-sm-10">
        <input
          class="form-control"
          id="story_name"
          name="story[name]"
          placeholder="Name"
          type="text"
          required
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="story_description">
        Description
      </label>
      <div class="col-sm-10">
        <input
          class="form-control"
          id="story_description"
          name="story[description]"
          placeholder="Description"
          type="text"
          required
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="story_story_type">
        Story type
      </label>
      <div class="col-sm-10">
        <select
          class="form-control"
          id="story_story_type"
          name="story[story_type]"
          required
        >
          <option value="feature">feature</option>
          <option value="bug">bug</option>
          <option value="chore">chore</option>
          <option value="release">release</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="story_container">
        Container
      </label>
      <div class="col-sm-10">
        <select
          class="form-control"
          id="story_container"
          name="story[container]"
          required
        >
          <option value="icebox">icebox</option>
          <option value="backlog">backlog</option>
        </select>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-2"></div>
      <div class="col-sm-10">
        <button class="btn btn-primary mr-2" type="submit">Save</button>
        <a class="btn btn-outline-secondary" href="/projects/qwe/current">
          Back
        </a>
      </div>
    </div>
  </form>
</template>
