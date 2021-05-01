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
    <div class="details">
      
      <div class="upcoming-litter container-text">
        <h1 class="header">${entry.getIn(["data", "title"], null)}</h1>
        <h2>${entry.getIn(["data", "color"], "")}</h2>

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
        <h2>{{ page.color }}</h2>
        <div class="upcoming-litter-text">
          <h3 class="upcoming-litter-subheader">Kittens' Desc:</h3>
          <p class="desc">{{ content }}</p>
        </div>
      </div>
      <div class="upcoming-litter-text-container">
        <h4 class="reserved">Reserved: {{page.reserved }}</h4>
        <a href="{{ site.baseurl }}{% link pages/purchasing.md %}"
          >Click here to Reserve</a
        >
      </div>
    </div>
    <div class="arrival">
      <h4 class="arrival-text">
        <p class="upcoming-litter">Expected: {{page.expected }}</p>
      </h4>
    </div>
  </div>
</section>
    `;
  }
});

export default Post;
