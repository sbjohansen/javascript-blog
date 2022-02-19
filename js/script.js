'use strict';

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
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags.list';

function generateTitleLinks(customSelector = ''){
  /*[DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /*[DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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
  /* [NEW] create a new variable allTags with an empty array */
  let allTags = [];
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
        /* [NEW] check if this link is NOT already in allTags */
          if(allTags.indexOf(tagHTML) == -1){
          /* [NEW] add generated code to allTags array */
          allTags.push(tagHTML);
          }
        /* [DONE] END LOOP: for each tag */
      }
    /* [DONE] insert HTML of all the links into the tags wrapper */
    const tagsList = article.querySelector(optArticleTagsSelector);
    tagsList.innerHTML = html;
    /* [DONE] END LOOP: for every article: */
    }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);
  /* [NEW] add html from allTags to tagList */
  tagList.innerHTML = allTags.join(' ');
}
generateTags();


function tagClickHandler(event){
  /*[DONE] prevent default action for this event */
  event.preventDefault();
  /*[DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /*[DONE] make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /*[DONE] find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  /*[DONE] START LOOP: for each active tag link */
    for (let activeTag of activeTags) {
      /*[DONE] remove class active */
      activeTag.classList.remove('active');
    /*[DONE] END LOOP: for each active tag link */
    }
  /*[DONE] find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href^="#tag-' + href + '"]');
  /*[DONE] START LOOP: for each found tag link */
    for (let tagLink of tagLinks) {
      /*[DONE] add class active */
      tagLink.classList.add('active');
    /*[DONE] END LOOP: for each found tag link */
    }
  /*[DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /*[DONE] find all links to tags */
  const tagLinks = document.querySelectorAll('.post-tags a');
  /*[DONE] START LOOP: for each link */
    for (let tagLink of tagLinks) {
      /*[DONE] add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);
    /*[DONE] END LOOP: for each link */
    }
}
addClickListenersToTags();


/*[DONE] GENERATE AUTHORS*/
function generateAuthor() {
  /* [DONE]find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* [DONE] START LOOP: for every article: */
    for (let article of articles) {
    /* [DONE]find author wrapper */
    const articleAuthorWrapper = article.querySelector(optArticleAuthorSelector);
    /* [DONE] make html variable with empty string */
    let html = '';
    /* [DONE] get author from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    const authorHTML = '<a href="#author-' + articleAuthor + '"><span>' + articleAuthor + '</span></a>';
    html = html + ' ' + authorHTML;
    /* [DONE] insert HTML of link into the author wrapper */
    const author = article.querySelector(optArticleAuthorSelector);
    author.innerHTML = html;
    /* [DONE] END LOOP: for every article: */
    }
}
generateAuthor();


function authorClickHandler(event){
  /*[DONE] prevent default action for this event */
  event.preventDefault();
  /*[DONE] make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /*[DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /*[DONE] make a new constant "author" and extract author from the "href" constant */
  const author = href.replace('#author-', '');
  /*[DONE] find all author links with class active */
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
  /*[DONE] START LOOP: for each active author link */
    for (let activeAuthor of activeAuthors) {
      /*[DONE] remove class active */
      activeAuthor.classList.remove('active');
      /*[DONE] END LOOP: for each active author link */
    }
  /*[DONE] find all author links with "href" attribute equal to the "href" constant */
  const authorLinks = document.querySelectorAll('a[href^="#author-' + href + '"]');
  /*[DONE] START LOOP: for each found author link */
    for (let authorLink of authorLinks) {
      /*[DONE] add class active */
      authorLink.classList.add('active');
      /*[DONE] END LOOP: for each found author link */
    }
  /*[DONE] execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');
}

function addClickListenersToAuthors(){
  /*[DONE] find all links to authors */
  const authorLinks = document.querySelectorAll('.post-author a');
  /*[DONE] START LOOP: for each link */
    for (let authorLink of authorLinks) {
      /*[DONE] add authorClickHandler as event listener for that link */
      authorLink.addEventListener('click', authorClickHandler);
      /*[DONE] END LOOP: for each link */
    }
}
addClickListenersToAuthors();
