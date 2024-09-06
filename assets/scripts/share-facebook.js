Share = {
    facebook: function(purl, ptitle, pimg, text) {
    url = 'http://www.facebook.com/sharer.php?s=100';
    url += '&p[title]=' + encodeURIComponent(ptitle);
    url += '&p[summary]=' + encodeURIComponent(text);
    url += '&p[url]=' + encodeURIComponent(purl);
    url += '&p[images][0]=' + encodeURIComponent(pimg);
    Share.popup(url);
    },
    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626, height=436');
        }
};