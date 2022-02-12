'use strict';

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  //console.log('Link was clicked!');


  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }


  /* [DONE] add class 'active' to the clicked link */

  //console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');


  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE]get 'href' attribute from the clicked link */

  const articleHref = clickedElement.getAttribute('href');
  //console.log(articleHref);

  /* [DONE]find the correct article using the selector (value of 'href' attribute) */

  const findArticle = document.querySelector(articleHref);
  //console.log(findArticle);

  /* [DONE]add class 'active' to the correct article */

  findArticle.classList.add('active');

}



/*GENERATE TITLE LIST*/

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';


  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for (let article of articles) {

    /* get the article id */

    const articleId = article.getAttribute('id');
    //console.log(articleId);


    /* find the title element */

    const articleTitleElement = article.querySelector(optTitleSelector);


    /* get the title from the title element */

    const articleTitle = articleTitleElement.innerHTML;

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    //console.log(linkHTML);

    /* insert link into titleList */

    html = html + linkHTML;
  }

  titleList.innerHTML = html;
  //console.log(html);

  const links = document.querySelectorAll('.titles a');
  //console.log(links);


  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();