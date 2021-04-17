addBlogBox();
function addBlogBox() {
    let blogBoxContainer = document.getElementById("blogContainer");
    for (let index = 0; index < BLOG_BOX_ITEMS.length; index++) {
        let blogBox = document.createElement("div");
        blogBox.className = "blog-box";
        blogBox.appendChild(renderImageBlog(index));
        blogBox.appendChild(renderPostContent(index));
        blogBox.appendChild(renderCreateDate(index));
        blogBoxContainer.appendChild(blogBox);
    }
}
function renderImageBlog(index) {
    let image = document.createElement("img");

    image.src = "../../../assets/images/blog" + (index + 1) + ".jpg";
    image.alt = "blog " + index + " image";
    return image;
}
function renderCreateDate(index) {
    let createDate = document.createElement("div");

    createDate.className = "create-date";
    createDate.innerHTML = BLOG_BOX_ITEMS[index].createDate;
    return createDate;
}
function renderTag() {
    let tag = document.createElement("span");
    let tagIcon = document.createElement("i");
    let tagContentNode = document.createTextNode(" BY: Tanism |");

    tagIcon.className = "fa fa-tag";
    tagIcon.appendChild(tagContentNode);
    tag.appendChild(tagIcon);
    return tag;
}
function renderComment() {
    let comment = document.createElement("span");
    let spaceNode = document.createTextNode(" ");
    let commentIcon = document.createElement("i");
    let commentContentNode = document.createTextNode(" 0 comment");

    comment.appendChild(spaceNode);
    commentIcon.className = "fa fa-comments";
    commentIcon.appendChild(commentContentNode);
    comment.appendChild(commentIcon);
    return comment;
}
function renderLink(id) {
    let link = document.createElement("a");

    link.href = BLOG_BOX_ITEMS[id].link;
    linkContent = document.createElement("h2");
    linkContentNode = document.createTextNode(BLOG_BOX_ITEMS[id].title);
    linkContent.appendChild(linkContentNode);
    link.appendChild(linkContent);
    return link;
}
function renderInfo(id) {
    let moreInfo = document.createElement("a");
    let infoContentNode = document.createTextNode("Read more");
    let infoIcon = document.createElement("i");

    moreInfo.href = BLOG_BOX_ITEMS[id].link;
    moreInfo.appendChild(infoContentNode);
    infoIcon.className = "fa fa-arrow-right";
    moreInfo.appendChild(infoIcon);
    return moreInfo;
}
function renderPostContent(id) {
    let postContent = document.createElement("div");
    let tag = renderTag();
    let comment = renderComment();
    let link = renderLink(id);
    let paragraph = document.createElement("p");
    let info = renderInfo(id);
    
    postContent.className = "post-content";
    postContent.appendChild(tag);
    postContent.appendChild(comment);
    postContent.appendChild(link);
    paragraph.appendChild(document.createTextNode(BLOG_BOX_ITEMS[id].content));
    postContent.appendChild(paragraph);
    postContent.appendChild(info);
    return postContent;
}
