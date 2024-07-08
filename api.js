settings.lurkingPattern = /https:\/\/(mail\.google\.com|inbox\.google\.com).*/i;
api.mapkey(";U", "#4Edit current URL with vim editor, and reload", function () {
  Front.showEditor(
    window.location.href,
    function (data) {
      window.location.href = data;
    },
    "url",
    true,
  );
});

const hintsCss = `
  font-size: 16px;
  border: none;
  color: #f5e0dc; /* rosewater */
  background: none;
  background-color: #1e1e2e; /* base */
`;
api.Hints.style(hintsCss);
api.Hints.style(hintsCss, "text");
