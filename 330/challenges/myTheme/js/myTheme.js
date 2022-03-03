// myTheme library

function applyChanges() {
    document.addEventListener('DOMContentLoaded', function() {
        // var applyChangeButton = document.getElementById('applyChanges');
        // applyChangeButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            doc = document;
            doc.body.setAttribute('style', `background-color: ${document.getElementById('newbackgroundcolor').value};`);
            doc.body.setAttribute('style', `color: ${document.getElementById('newfontcolor').value};`);
            doc.body.setAttribute('style', `background: url('${document.getElementById('newbackgroundimg').value}');`);
            doc.body.a.setAttribute('style', `color: ${document.getElementById('newlinkcolor').value};`);
            //doc.body.a:visited.setAttribute('style', `color: ${document.getElementById('newlinkvisitedcolor').value};`);
            //doc.body.a:hover.setAttribute('style', `a:hover color: ${document.getElementById('newlinkhovercolor').value};`);
            doc.h1.setAttribute('style', `color: ${document.getElementById('newheadingcolor').value};`);
            doc.h2.setAttribute('style', `color: ${document.getElementById('newheadingcolor').value};`);
            doc.h3.setAttribute('style', `color: ${document.getElementById('newheadingcolor').value};`);
            doc.h4.setAttribute('style', `color: ${document.getElementById('newheadingcolor').value};`);
            doc.h5.setAttribute('style', `color: ${document.getElementById('newheadingcolor').value};`);
            doc.h6.setAttribute('style', `color: ${document.getElementById('newheadingcolor').value};`);
            doc.p.setAttribute('style', `color: ${document.getElementById('newparagraphcolor').value};`);

        //     var frm = doc.createElement('form');
        //     frm.action = '/';
        //     frm.method = 'post';
        //     var inpt = d.createElement('input');
        //     inpt.type = 'hidden';
        //     inpt.name = 'url';
        //     inpt.value = tab.url;
        //     frm.appendChild(inpt);
        //     doc.body.appendChild(frm);
        //     frm.submit();
        // });
        }, false);
    }, false);
}

function checkGmetrix() {
    document.addEventListener('DOMContentLoaded', function() {
        var checkPageButton = document.getElementById('checkPage');
        checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var f = d.createElement('form');
            f.action = 'http://gtmetrix.com/analyze.html?bm';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
        }, false);
    }, false);
}