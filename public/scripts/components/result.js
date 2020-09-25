// $(() => {
/////////////////////////////////
// localStorage.clear();
/////////////////////////////////
function renderResult() {
  const resultArrayToRender = JSON.parse(getResultArrayFromLS());

  const resultHeader = `
    <div class="result-table-div">
    <h3>My Quizzes</h3>
    <table class="table">
    <thead>
    <tr>
    <th scope="col">#</th>
    <th scope="col">Quiz Name</th>
    <th scope="col">Result</th>
    <th scope="col">Share Result</th>
    </tr>
    </thead>
    <tbody class="result">`;

  let resultDOMElem = ``;
  for (const item of resultArrayToRender) {
    let counter = 0;
    resultDOMElem += `
      <tr>
      <td>${++counter}</td>
      <td>${item.quizName}</td>
      <td>${item.quizResult}</td>
      </tr>
      `;
  }

  const resultCloseTag = `
    </tbody>
    </table>
    `;

  const $result = resultHeader + resultDOMElem + resultCloseTag;
  //grab result from local storage

  //render the result to DOM

  window.$result = $result;
  window.views_manager.show("result", $result);
}

// window.views_manager.show("result", $result);
// });
