$(() => {
  const $questionForm = $(`
  <div class="quiz_body">
      <div class="card question_body">
        <form class="question_form_body">
          <h2 class="question_title">Please Type Test Question</h2>
          <div class="form-group">
            <textarea
              class="form-control"
              id="question_textarea"
              placeholder="Please Type Test Question"
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
            <input id="create-answer1-radio-btn" name="create-answer1-radio-btn" type="radio" />
          </div>
          <div class="form-group">
            <textarea
              class="form-control answer-input"
              id="answer2-textarea"
              placeholder="Answer 2"
              rows="1"
            ></textarea>
            <input id="create-answer2-radio-btn" name="create-answer2-radio-btn" type="radio" />
          </div>
          <div class="form-group">
            <textarea
              class="form-control answer-input"
              id="answer3-textarea"
              placeholder="Answer 3"
              rows="1"
            ></textarea>
            <input id="create-answer3-radio-btn" name="create-answer3-radio-btn" type="radio" />
          </div>
          <div class="form-group">
            <textarea
              class="form-control answer-input"
              id="answer4-textarea"
              placeholder="Answer 4"
              rows="1"
            ></textarea>
            <input id="create-answer4-radio-btn" name="create-answer4-radio-btn" type="radio" />
          </div>
          <div class="form-footer">
            <div>
              <a href="#" class="back-btn question_form_back"
                ><i class="fas fa-angle-double-left" style="position: inherit"></i>
              </a>
            </div>
            <div>
              <h2 class="question_counter">1</h2>
            </div>
            <div>
              <button type="submit" class="btn btn-dark">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div class="rounded right_bg"></div>
    </div>
  `);

  window.$questionForm = $questionForm;

  $questionForm.submit(function (e) {});
});
