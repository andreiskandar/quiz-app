$(() => {
  const $questionForm = $(`
  <div class="quiz_body">
  <div class="card question_body">
    <form class="question_form_body" id="create-form">
      <h3 class="question_title">Create your question</h3>
      <div>
      <h2 class="question_counter"></h2>
    </div>
      <div class="form-group">
        <textarea
          class="form-control"
          id="category_textarea"
          placeholder="Please Type Quiz Category"
          rows="1"
        ></textarea>
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          id="question_textarea"
          placeholder="Please Type Your Question"
          rows="3"
        ></textarea>
      </div>
      <div class="form-group">
        <textarea
          class="form-control answer-input"
          id="answer1-textarea"
          placeholder="Answer 1"
          rows="1"
        ></textarea>
        <input id="create-answer1-radio-btn" name="create-answer-radio-btn" type="radio" />
      </div>
      <div class="form-group">
        <textarea
          class="form-control answer-input"
          id="answer2-textarea"
          placeholder="Answer 2"
          rows="1"
        ></textarea>
        <input id="create-answer2-radio-btn" name="create-answer-radio-btn" type="radio" />
      </div>
      <div class="form-group">
        <textarea
          class="form-control answer-input"
          id="answer3-textarea"
          placeholder="Answer 3"
          rows="1"
        ></textarea>
        <input id="create-answer3-radio-btn" name="create-answer-radio-btn" type="radio" />
      </div>
      <div class="form-group">
        <textarea
          class="form-control answer-input"
          id="answer4-textarea"
          placeholder="Answer 4"
          rows="1"
        ></textarea>
        <input id="create-answer4-radio-btn" name="create-answer-radio-btn" type="radio" />
      </div>
      <div class="hide hidden">Question successfully created!</div>
      <div class="form-footer">
        <div>
          <a href="#" class="back-btn question_form_back"
            ><i class="fas fa-angle-double-left go-back" style="position: inherit"></i>
          </a>
        </div>
        <div>
          <button type="submit" class="btn btn-dark">Submit</button>
          </div>

          <div>
            <input type="checkbox" id="setpublic" name="setpublic" value="Make Quiz Hidden?">
            <label for="setpublic">Make Quiz Hidden?</label>
          </div>
        </div>
        <div class="back-btn-label">Go back to dashboard</div>
    </form>
  </div>
  <div class="rounded right_bg"></div>
</div>
  `);

  window.$questionForm = $questionForm;

  $questionForm.submit(function (e) {});
});
