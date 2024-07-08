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
settings.theme = `

:root {
  --ctp-rosewater: #f5e0dc;
  --ctp-flamingo: #f2cdcd;
  --ctp-pink: #f5c2e7;
  --ctp-mauve: #cba6f7;
  --ctp-red: #f38ba8;
  --ctp-maroon: #eba0ac;
  --ctp-peach: #fab387;
  --ctp-yellow: #f9e2af;
  --ctp-green: #a6e3a1;
  --ctp-teal: #94e2d5;
  --ctp-sky: #89dceb;
  --ctp-sapphire: #74c7ec;
  --ctp-blue: #87b0f9;
  --ctp-lavender: #b4befe;
  --ctp-text: #c6d0f5;
  --ctp-subtext1: #b3bcdf;
  --ctp-subtext0: #a1a8c9;
  --ctp-overlay2: #8e95b3;
  --ctp-overlay1: #7b819d;
  --ctp-overlay0: #696d86;
  --ctp-surface2: #565970;
  --ctp-surface1: #43465a;
  --ctp-surface0: #313244;
  --ctp-base: #1e1e2e;
  --ctp-mantle: #181825;
  --ctp-crust: #11111b;
}

body {
  font-family: "MonoLisa Nerd Font", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 15px;
}

.sk_theme {
  background: var(--ctp-base);
  color: var(--ctp-text);
}
.sk_theme input {
  color: var(--ctp-text);
}
.sk_theme .url {
  color: var(--ctp-mauve);
}
.sk_theme .annotation {
  color: var(--ctp-peach);
}
.sk_theme kbd {
  background: var(--ctp-mantle);
  color: var(--ctp-text);
}
.sk_theme .frame {
  background: var(--ctp-text);
}
.sk_theme .omnibar_highlight {
  color: var(--ctp-rosewater);
}
.sk_theme .omnibar_folder {
  color: var(--ctp-subtext0);
}
.sk_theme .omnibar_timestamp {
  color: var(--ctp-sky);
}
.sk_theme .omnibar_visitcount {
  color: var(--ctp-teal);
}
.sk_theme .prompt,
.sk_theme .resultPage {
  color: var(--ctp-text);
}
.sk_theme .feature_name {
  color: var(--ctp-text);
}
.sk_theme .separator {
  color: var(--ctp-mantle);
}

#sk_omnibarSearchArea {
  border-bottom: 1px solid var(--ctp-crust);
}

.sk_theme #sk_omnibarSearchResult > ul > li:nth-child(odd) {
  background: var(--ctp-base);
}
.sk_theme #sk_omnibarSearchResult > ul > li.focused {
  background: var(--ctp-surface0);
}
.sk_theme #sk_omnibarSearchResult > ul > li.window {
  border: 2px solid var(--ctp-surface1);
}
.sk_theme #sk_omnibarSearchResult > ul > li.window.focused {
  border: 2px solid var(--ctp-maroon);
}
#sk_status {
  border: 1px solid var(--ctp-surface1);
}

.expandRichHints span.annotation {
  color: var(--ctp-peach);
}

.expandRichHints kbd > .candidates {
  color: var(--ctp-text);
}

#sk_keystroke {
  background: var(--ctp-base);
  color: var(--ctp-text);
}

#sk_usage .feature_name > span {
  border-bottom: 2px solid var(--ctp-surface1);
}

kbd {
  border: solid 1px var(--ctp-surface1);
  border-bottom-color: var(--ctp-surface2);
}

#sk_banner {
  border: 1px solid var(--ctp-surface2);
  background: var(--ctp-base);
}

div.sk_tab {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, var(--ctp-base)),
    color-stop(100%, var(--ctp-base))
  );
}

div.sk_tab_title {
  color: var(--ctp-text);
}
div.sk_tab_url {
  color: var(--ctp-mauve);
}
div.sk_tab_hint {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, var(--ctp-base)),
    color-stop(100%, var(--ctp-base))
  );
  color: var(--ctp-text);
  border: solid 1px var(--ctp-surface1);
}
#sk_bubble {
  border: 1px solid var(--ctp-surface1);
  color: var(--ctp-text);
  background-color: var(--ctp-base);
}
.sk_scroller_indicator_top {
  background-image: linear-gradient(var(--ctp-base), transparent);
}
.sk_scroller_indicator_middle {
  background-image: linear-gradient(transparent, var(--ctp-base), transparent);
}
.sk_scroller_indicator_bottom {
  background-image: linear-gradient(transparent, var(--ctp-base));
}
#sk_bubble * {
  color: var(--ctp-text) !important;
}
div.sk_arrow[dir="down"] > div:nth-of-type(1) {
  border-top: 12px solid var(--ctp-surface1);
}
div.sk_arrow[dir="up"] > div:nth-of-type(1) {
  border-bottom: 12px solid var(--ctp-surface1);
}
div.sk_arrow[dir="down"] > div:nth-of-type(2) {
  border-top: 10px solid var(--ctp-text);
}
div.sk_arrow[dir="up"] > div:nth-of-type(2) {
  border-bottom: 10px solid var(--ctp-text);
}
`;
