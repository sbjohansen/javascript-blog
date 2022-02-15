'use strict';

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });*/

const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* [DONE]get 'href' attribute from the clicked link */

  const articleHref = clickedElement.getAttribute('href');

  /* [DONE]find the correct article using the selector (value of 'href' attribute) */

  const findArticle = document.querySelector(articleHref);

  /* [DONE]add class 'active' to the correct article */

  findArticle.classList.add('active');

}



/*[DONE] GENERATE TITLE LIST*/

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {

  /*[DONE] remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /*[DONE] for each article */

  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for (let article of articles) {

    /*[DONE] get the article id */

    const articleId = article.getAttribute('id');

    /*[DONE] find the title element */

    const articleTitleElement = article.querySelector(optTitleSelector);

    /*[DONE] get the title from the title element */

    const articleTitle = articleTitleElement.innerHTML;

    /*[DONE] create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /*[DONE] insert link into titleList */

    html = html + linkHTML;
  }

  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
}
generateTitleLinks();


/*GENERATE TAGS*/

function generateTags() {

  /* [DONE]find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* [DONE] START LOOP: for every article: */

  for (let article of articles) {

    /* [DONE]find tags wrapper */

    const articleTagsWrapper = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const articleTags = article.getAttribute('data-tags');

    /* [DONE[ split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* [DONE] START LOOP: for each tag */

    for (let tag of articleTagsArray) {

      /* [DONE] generate HTML of the link */

      const tagHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

      /* [DONE] add generated code to html variable */

      html = html + ' ' + tagHTML;

      /* [DONE] END LOOP: for each tag */
    }

    /* [DONE] insert HTML of all the links into the tags wrapper */

    const tagsList = article.querySelector(optArticleTagsSelector);
    tagsList.innerHTML = html;

    /* [DONE] END LOOP: for every article: */

  }
}
generateTags();
