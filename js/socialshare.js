import { createLMNT, appendLMNT, appendNestLMNT } from "./utilities";

const shareList = [
    {
      title: "There are thousands of them…",
      url: "https://searchforthetruth.info/there-are-thousands-of-them",
      postimg: "https://i0.wp.com/searchforthetruth.info/wp-content/uploads/2022/02/Elder-Melvin-J-Ballard.png?w=385&ssl=1",
      hashtags: "#familyhistory #genealogy #theyarewaiting #churchofjesuschristdotorg",
    }
]


export const iconfb = "https://rus19023.github.io/ToDoApp/img/icons/icons8-facebook-96.png";
export const iconli = "https://rus19023.github.io/ToDoApp/img/icons/icons8-linkedin-96.png";
export const iconwa = "https://rus19023.github.io/ToDoApp/img/icons/icons8-whatsapp-64.png";

export const createShareFromList = (shareList) => {
    shareList.forEach(el => {
      createSharer(el.title, el.url, el.postimg, el.hashtags);
    });
}

const setBtnAttributes = (btn) => {
    // get info from shareList
    btn.setAttribute('title', title);
    btn.setAttribute('href', url);
    btn.setAttribute('data-img', postimg);
    btn.setAttribute('data-hashtags', hashtags);
    btn.setAttribute("width", "50px");
    btn.setAttribute("width", "50px");
    if (btn === 'btnfb') {
        btn.setAttribute('data-sharer', 'facebook');
    }
    if (btn === 'btnli') {
        btn.setAttribute('data-sharer', 'linkedin');
    }
    if (btn === 'btnwa') {
        btn.setAttribute('data-sharer', 'whatsapp');
    }
}


export const createSharer = (title, url, postimg, hashtags) => {
    //                          (LMNT,   type,      id,      text, classes, html)
    const sharerbox = createLMNT("section", "", "social-share", "", "", "");

    const divfb = createLMNT("div", "", "facebook", "", "", "");
    const divli = createLMNT("div", "", "linkedin", "", "", "");
    const divwa = createLMNT("div", "", "whatsapp", "", "", "");

    const btnfb = createLMNT("button", "button", "btnfb", "", "facebook sharer todo-buttons", "");
    const btnli = createLMNT("button", "button", "btnli", "", "linkedin sharer todo-buttons", "");
    const btnwa = createLMNT("button", "button", "btnwa", "", "whatsapp sharer todo-buttons", "");

    const iconfb = createLMNT("img", "", "icon-fb", "", "share-icon", "");
    const iconli = createLMNT("img", "", "icon-li", "", "share-icon", "");
    const iconwa = createLMNT("img", "", "icon-wa", "", "share-icon", "");

    appendNestLMNT(divfb, btnfb, iconfb);
    appendNestLMNT(divli, btnli, iconli);
    appendNestLMNT(divwa, btnwa, iconwa);
    appendLMNT(sharer, divfb, divli, divwa);
}

// set sharer
if (isElement("social-share")) {
  writeById("autoshare", sharer);
}

<section id="social-share">
    <div>
        <h3 class="title">Share this: </h3>
    </div>
    <div>
        <button class="sharer todo-buttons" data-sharer="facebook" data-url="https://searchforthetruth.info/there-are-thousands-of-them" data-hashtags="#familyhistory #genealogy #theyarewaiting #churchofjesuschristdotorg">
            <img class="centered icons" src="https://rus19023.github.io/ToDoApp/img/icons/icons8-facebook-96.png" alt="Share on Facebook" />
        </button>
    </div>
    <div>
        <button class=" todo-buttons" data-sharer="linkedin" data-url="https://searchforthetruth.info/there-are-thousands-of-them" data-hashtags="#familyhistory #genealogy #theyarewaiting #churchofjesuschristdotorg">
            <img class="centered icons" src="https://rus19023.github.io/ToDoApp/img/icons/icons8-linkedin-96.png" alt="Share on LinkedIn" />
        </button>
    </div>
</section>