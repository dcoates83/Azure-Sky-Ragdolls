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
            When we believe the Queens are pregnant, we
update every Depositor the <strong >anticipated litter birth date.</strong> Cats’ gestation period varies around 58-70 days.
          </p>
          <p>
            While vaccinations are given at 8, 12 and 16 weeks, vaccines and alter dates are dependent on the Veterinarian. Go home dates may change depending on these conditions.
          </p>
          <h2>Predicted colors and dates of the kittens will be listed,<br> but of course
Mother Nature does her own thing!</h2>
<p>We space litters so Queens get the best possible care, kittens
get their best socialization and Mommas get a break.</p>
            <ol class="remember">
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
<h2>Check out all new photos of the kittens on our
<a rel="noreferrer" href="https://www.facebook.com/Azure-Sky-Ragdolls-2203345016408284/" target="_blank" class="nav-link icoFacebook" title="Facebook"><span class="underline">Facebook!</span></a> </h2>
<section id="posted-litters">

<h1 class="header-2">Posted Litters</h1>

  <div class="posted ">
    {% for post in site.posts %}
      <div class="blog-posted">
        <h2 class="posted-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <a href="{{ post.url | relative_url }}" ><img  class="blog-img" src="{{ post.thumbnail | relative_url}}" /> </a>
          <small>
          <h4 class="expected"><strong>Expected: {{ post.expected }}</strong></h4>  
          <p class="click"><a href="{{ post.url | relative_url }}">{{ post.color }}</a></p>
          <hr>     
          <p class="click"><a href="{{ post.url | relative_url }}">Click for more detail</a></p>  
          <h4 class="reserved">{{post.reserved }}</h4>
          
          </small>
        <!-- {{ post.excerpt }} -->
      </div>
     {% endfor %}

  </div>
</section>
