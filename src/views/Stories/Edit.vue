<template>
  <AppLayout>
    <h1 class="mb-4">Edit Story</h1>
    <form action="/projects/qwe/stories/1" method="post">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label" for="story_name">Name</label>
        <div class="col-sm-10">
          <input
            class="form-control"
            id="story_name"
            name="story[name]"
            placeholder="Name"
            type="text"
            value="MyStory"
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
            value="MyDescription"
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
            <option value="feature" selected>feature</option>
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
            <option value="icebox" selected>icebox</option>
            <option value="backlog">backlog</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-2"></div>
        <div class="col-sm-10">
          <button class="btn btn-primary mr-2" type="submit">Save</button>
          <router-link
            class="btn btn-outline-secondary"
            to="/projects/qwe/current"
          >
            Back
          </router-link>
        </div>
      </div>
    </form>
    <hr />
    <h5>Comments</h5>
    <div class="list-group border-0 mb-3">
      <div class="list-group-item d-flex">
        <router-link class="mr-auto" to="/comments/1/edit">
          this is a comment
        </router-link>
        <a
          data-confirm="Are you sure?"
          data-csrf="YhYPYUwKVzcrAWszIComCXk7AAIaZyEjSP9Uz25EyD_QLeDh8UgwHJWs"
          data-method="delete"
          data-to="/comments/1"
          href="/comments/1"
          rel="nofollow"
        >
          <i class="far fa-times-circle"> </i>
        </a>
      </div>
    </div>
    <router-link class="mb-3" to="/comments/new">New Comment</router-link>
    <hr />
    <h5>Tasks</h5>
    <div class="list-group border-0 mb-3">
      <div class="list-group-item d-flex">
        <router-link class="mr-auto" to="/tasks/1/edit"
          >this is a task</router-link
        >
        <a
          data-confirm="Are you sure?"
          data-csrf="YhYPYUwKVzcrAWszIComCXk7AAIaZyEjSP9Uz25EyD_QLeDh8UgwHJWs"
          data-method="delete"
          data-to="/tasks/1"
          href="/tasks/1"
          rel="nofollow"
        >
          <i class="far fa-times-circle"> </i>
        </a>
      </div>
    </div>
    <router-link to="/tasks/new">New Task</router-link>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/layouts/App'
</script>
