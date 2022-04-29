
function createMenuList(list, id) {
    // create link list container element
    if (isElement(id)) {
        const container = document.getElementById(id);
        console.log(container)
        // sort list by date
        list.sort(function(a, b) {
            var dateA = a.date;
            var dateB = b.date;
            if (dateA < dateB) {
                return -1;
            }
            if (dateA > dateB) {
                return 1;
            }
            // dates must be equal
            return 0;
        });
        // create cert list element
        const mainMenu = createLMNT('ul', '', 'menu', '', 'nodots', '');
        // create submenu of links for each cert's courses
        let certcount = 1;
        list.forEach((element) => {
            // get cert number
            const certCheck = element.cert;
            // create list item for this cert
            const certitem = createLMNT('li', '', `cert${certcount}` , '', '', '');
            const certh3 = createLMNT('h3', '', '', '', 'title', '');
            const certa = createLMNT('a', '', '', '', '', 'cert-text', '');
            certa.setAttribute('href', getBase() + 'images/' + element.certurl);
            // set text for item
            certa.innerText = `${element.certname}, Issue date: ${element.date}`;
            //console.log(certa);
            // add item to cert menu list
            appendNestLMNT(mainMenu, certitem, certh3, certa, '', '');
            // create submenu list element
            let submenu = createLMNT('ul', '', `submenu${certcount}`, '', ' nodots', '');
            //submenu.style.listStyleType = "none";
            // set count of courses
            let coursecount = 1;
            // get list of courses to create links under each cert
            let certcourses = [];
            lists.mainNav.forEach((element) => {
                // console.log('element.cert === certCheck' + element.cert === certCheck);
                // console.log('element.cert: ' + element.cert);
                // console.log('certCheck: ' + certCheck);
                // if subitem's cert number = item's cert number, add to submenu list
                if (element.cert === certCheck) {
                    certcourses.push(element);
                }
            });
            //console.log(certcourses);
            // sort courses by name
            certcourses = certcourses.sort(function(a, b) {
                var nameA = a.year + a.term + a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.year + b.term + b.name.toUpperCase(); // ignore upper and lowercase
                //console.log(nameA, nameB);
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            });
            console.log(certcourses);
            certcourses.forEach((element) => {
                const submenuitem = createLMNT('li', '', `course${coursecount}`, '', '', '');
                const submenuh3 = createLMNT('h3', '', '', '', 'title', '');
                // if url does not exist AND data url length is less than 100, exit program
                if ((!urlExists(element.url)) && (element.url.length < 100)) {
                    return;
                } else {  // create link
                    const link = createLMNT('a', '', '', '', 'sub-text', '');
                    console.log(link);
                    // url and term exist, create the link and post to page
                    if ((element.term) && (element.term.length > 0)) {
                        const linktext = document.createTextNode(`${getTerm(element.term)} 20${element.year}, ${element.code} - ${element.name}`); //, (${element.tech})`);
                        link.setAttribute('href', element.url);
                        appendLMNT(link, linktext);
                    } else {
                        link.setAttribute('href', element.url);
                        const linktext = document.createTextNode(`${createLink(element.url, element.name)}`);
                        link.appendChild(linktext);
                    }
                    appendNestLMNT(submenu, submenuitem, submenuh3, link, '', '');
                }
                certitem.appendChild(submenu);
                coursecount++;
            });
            certcount++;
            appendNestLMNT(container, mainMenu, certitem, '', '');
            mainMenu.appendChild(certitem);
            //console.log(mainMenu);
            container.appendChild(mainMenu);
        });
    }
}