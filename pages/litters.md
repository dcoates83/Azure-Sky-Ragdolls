---
layout: default
title: Upcoming Ragdoll Litters
permalink: /litters
section: blog
paginate: 5
paginate_path: "/posts/page:num/"
description: Upcoming ragdoll kitten litters! Check here for ragdoll kittens for sale.
---

<section id="upcoming">
<div class="container-text">
<h1 class="header-2">Upcoming Litters</h1>
<p>All litters will all be from our foundation male King Tzar. Who is a Seal Bicolor and carries the Lilac gene.</p>

<p>Litters <strong>could be earlier or later</strong> or even the order switched. If
you place a deposit, we will notify who is pregnant when it is
known.</p>
<p>Cats typically do not show any signs of pregnancy until second
month of pregnancy.</p>
          <p>
            When we are sure the Queens are pregnant, we
update every Depositor the <strong >anticipated litter birth date.</strong> This is <strong class="underline">not a guaranteed date</strong> as Cats’ gestation period generally around 65 days.
          </p>
          <h2>Predicted colors of the kittens and dates of litters will listed,<br> but of course
Mother Nature does her own thing!</h2>

          <p>
           
          </p>
<p>We space litters so Queens get the best possible care, kittens
get their best socialization and Mommas get a break.</p>
            <ol>
            <h5><strong class="underline">Remember</strong></h5>
            <li>
             Kittens are chosen in the order of deposits received.
            </li>
            <li>
              Each Depositor may pick or pass on a litter.
            </li>
            <li>
            If all the kittens are taken from a litter <strong>your deposit automatically</strong> moves to the next litter <span class="underline">until you get a kitten.</span>
</li>
<li>
You can change your mind re sex, color, coat, and markings.
</li>
</ol>
<h2>See all new photos of our kittens on our
<a rel="noreferrer" href="https://www.facebook.com/Azure-Sky-Ragdolls-2203345016408284/" target="_blank" class="nav-link icoFacebook" title="Facebook"><span class="underline">Facebook!</span></a> </h2>
<section id="posted-litters">

<h1 class="header-2">Posted Litters</h1>

  <div class="posted">
    {% for post in site.posts %}
    {% assign author = site.data.authors[post.author] %}

      <div class="blog-posted">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <a href="{{ post.url | relative_url }}" ><img  class="blog-img" src="{{ post.thumbnail | relative_url}}" /> </a>


          <small>
            <strong>Expected: {{ post.expected }}</strong>
            {% if author %}
              by {{ author.name }}
            {% endif %}
          </small>

        {{ post.excerpt }}

      </div>
     {% endfor %}

  </div>
</section>
