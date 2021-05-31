<template>
  <h1 class="mb-4">Edit Comment</h1>
  <form action="/comments/1" method="post">
    <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="comment_content">
        Content
      </label>
      <div class="col-sm-10">
        <textarea
          class="form-control"
          id="comment_content"
          name="comment[content]"
          placeholder="Content"
          required
        >
          this is a comment
        </textarea>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-2"></div>
      <div class="col-sm-10">
        <button class="btn btn-primary mr-2" type="submit">Save</button>
        <a
          class="btn btn-outline-secondary"
          href="/projects/qwe/stories/1/edit"
        >
          Back
        </a>
      </div>
    </div>
  </form>
</template>
