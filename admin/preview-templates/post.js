import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
  render() {
    const entry = this.props.entry;

    return html`
    <section id="litters">
  <div class="litter-container">
    <div class="picture">
      <img
        src="{{page.thumbnail | relative_url}}"
        alt="{{ page.info | relative_url }}"
        srcset=""
      />
    </div>
      <main>
        <article>
        <h1>hi</h1>
          <h1>${entry.getIn(["data", "title"], null)}</h1>
          <p>
            <small>
              <time
                >${
                  format(
                    entry.getIn(["data", "date"], new Date()),
                    "dd MMM, yyyy"
                  )
                }</time
              >
              ${" by Author"}
            </small>
          </p>

          <p>${entry.getIn(["data", "summary"], "")}</p>

          ${this.props.widgetFor("body")}
          <p>
            ${
              entry.getIn(["data", "tags"], []).map(
                tag =>
                  html`
                    <a href="#" rel="tag">${tag}</a>
                  `
              )
            }
          </p>
        </article>
      </main>
    `;
  }
});

export default Post;

    <div class="details">
      <div class="upcoming-litter container-text">
        <h1 class="header">{{ page.title }}</h1>
        <h2>{{ page.color }}</h2>
        <div class="upcoming-litter-text">
          <h3 class="upcoming-litter-subheader">Kittens' Desc:</h3>
          <p class="desc">{{ content }}</p>
        </div>
      </div>
      <div class="upcoming-litter-text-container">
        <h4 class="reserved">{{page.reserved }}</h4>
        <a href="{{ site.baseurl }}{% link pages/purchasing.md %}"
          >Click here to Reserve</a>
      </div>
    </div>
    <div class="arrival">
      <h4 class="arrival-text">
        <p class="upcoming-litter">Expected: {{page.expected }}</p>
      </h4>
    </div>
  </div>
  <div class="container-text">
    <h2>Navigate Posts</h2>
    <nav aria-label="Adjacent Posts" class="litters-nav">
      <div>
        <ul class="post-nav">
          {% if page.previous.url %}
          <li>
            <a href="{{page.previous.url | relative_url}}" rel="prev"
              >&laquo; {{page.previous.title }}</a
            >
          </li>
          {% endif %} {% if page.next.url %}
          <li>
            <a href="{{page.next.url | relative_url}}" rel="next"
              >{{page.next.title }} &raquo;</a
            >
          </li>
          {% endif %}
        </ul>
      </div>
    </nav>
  </div>
</section>