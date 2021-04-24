---
layout: default
title: Upcoming Litters
permalink: /litters
section: blog
paginate: 5
paginate_path: "/posts/page:num/"
description: Upcoming ragdoll kitten litters! Check here for ragdoll kittens for sale.
---

<section id="upcoming">
<div class="container-text">
<h1 class="header-2">Upcoming Litters</h1>
<p>All litters will all be from foundation Seal Bicolor male King Tzar.</p>
<p>Likely colors of kittens and dates of litters are listed, but of course
Mother Nature does her own thing!</p>
<p><strong>Litters could be earlier or later or even the order switched. If
you place a deposit, we will notify who is pregnant when it is
known.</strong></p>
          <p>
           As Queens are bred and when we are sure they are pregnant, we
update every Depositor re anticipated litter birth date.
          </p>
<p><strong>Cats typically do not show any signs of pregnancy until second
month of pregnancy.</strong></p>
          <p>
           Cats’ gestation period is around 60 days.
          </p>
<p><strong>We space litters so Queens get the best possible care, kittens
get their best socialization and Mommas get a break.</strong></p>
      
            <ol>
            <p><strong class="underline">Remember</strong></p>
            <li>
             Kittens are chosen in the order of deposits received.
            </li>
            <li>
              Each Depositor may pick or pass on a litter.
            </li>
            <li>
            If all the kittens are taken from a litter <strong>your deposit automatically</strong> moves to
the next litter <span class="underline">until you get a kitten.</span>
            </li>
            <li>
              You can change your mind re sex, color, coat, and markings.
            </li>
          </ol>
          <h2>See all new photos of our kittens on our 
          <a href="https://www.facebook.com/Azure-Sky-Ragdolls-2203345016408284/" target="_blank" class="nav-link icoFacebook" title="Facebook"><span class="underline">Facebook!</span></a> </h2>
        <section>
<h1 class="header-2">Posted Litters</h1>

  <div class="posted">
    {% for post in site.posts %}
    {% assign author = site.data.authors[post.author] %}
      
      <div class="blog-posted">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <a href="{{ post.url | relative_url }}" ><img  class="blog-img" src="{{ post.thumbnail | relative_url}}" /> </a>
        
        <time datetime="{{ post.date  }}">
          <small>
            <strong>Expected: {{ post.expected | date_to_string }}</strong>
            {% if author %}
              by {{ author.name }}
            {% endif %}
          </small>
        </time>
        {{ post.excerpt }}
     
      </div>
     {% endfor %}
  </div>
</section>
