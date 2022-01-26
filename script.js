document.head.innerHTML = '';
document.body.innerHTML = '';

let title = document.createElement('title');
title.innerHTML = 'HTML document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let p = document.createElement('p');
p.innerHTML = 'Choose Your Option';
document.body.appendChild(p);
p.style.paddingLeft = '494px';
p.style.paddingTop = '122px';
p.style.marginBottom = '0px';
p.style.fontFamily = 'Arvo';
p.style.fontSize = '36px';
p.style.color = '#212121';

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
document.body.appendChild(p2);
p2.style.paddingLeft = '457px';
p2.style.marginBottom = '0px';
p2.style.marginTop = '0px';
p2.style.paddingTop = '5px';
p2.style.fontFamily = 'OpenSans';
p2.style.fontSize = '14px';
p2.style.color = '#9FA3A7';

let div1 = document.createElement('div');
div1.classList.add('block1');
document.body.appendChild(div1);

div1.style.width = '400px';
div1.style.height = '479px';
div1.style.border = '1px solid #E8E9ED';

let mainTitle = document.createElement('p');
mainTitle.innerHTML = 'FREELANCER';
div1.appendChild(mainTitle);
mainTitle.style.marginLeft = '147px';
mainTitle.style.marginTop = '81px';
mainTitle.style.fontFamily = 'Montserrat';
mainTitle.style.fontSize = '12px';
mainTitle.style.color = '#9FA3A7';

let titles = document.createElement('p');
titles.innerHTML = 'Initially designed to ';
div1.appendChild(titles);
titles.style.marginLeft = '95px';
titles.style.marginTop = '19px';
titles.style.width = '210px';
titles.style.textAlign = 'center';
titles.style.fontFamily = 'Arvo';
titles.style.fontSize = '36px';
titles.style.color = '#212121';

let text = document.createElement('p');
text.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing  ';
div1.appendChild(text);
text.style.marginLeft = '95px';
text.style.marginTop = '23px';
text.style.width = '210px';
text.style.textAlign = 'center';
text.style.fontFamily = 'OpenSans';
text.style.fontSize = '12px';
text.style.color = '#9FA3A7';

let button = document.createElement('div');
let buttonText = document.createElement('div');
buttonText.innerHTML = 'START HERE';
button.appendChild(buttonText);
div1.appendChild(button);
button.style.width = '147px';
button.style.height = '46px';
button.style.border = '3px solid #FFC80A';
button.style.borderRadius = '60px';
buttonText.style.fontFamily = 'Montserrat';
buttonText.style.fontSize = '12px';
buttonText.style.color = '#212121';
buttonText.style.marginLeft = '32px';
buttonText.style.marginTop = '16px';
button.style.marginLeft = '126px';
button.style.marginTop = '65px';

let div2 = document.createElement('div');
div2.classList.add('block2');
document.body.appendChild(div2);

div2.style.width = '400px';
div2.style.height = '479px';
div2.style.background = '#8F75BE';

let mainTitle2 = document.createElement('p');
mainTitle2.innerHTML = 'STUDIO';
div2.appendChild(mainTitle2);
mainTitle2.style.marginLeft = '178px';
mainTitle2.style.paddingTop = '81px';
mainTitle2.style.marginTop = '0px';
mainTitle2.style.fontFamily = 'Montserrat';
mainTitle2.style.fontSize = '12px';
mainTitle2.style.color = '#FFC80A';

let titles2 = document.createElement('p');
titles2.innerHTML = 'Initially designed to ';
div2.appendChild(titles2);
titles2.style.marginLeft = '95px';
titles2.style.marginTop = '19px';
titles2.style.width = '210px';
titles2.style.textAlign = 'center';
titles2.style.fontFamily = 'Arvo';
titles2.style.fontSize = '36px';
titles2.style.color = '#FFFFFF';

let text2 = document.createElement('p');
text2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing  ';
div2.appendChild(text2);
text2.style.marginLeft = '95px';
text2.style.marginTop = '23px';
text2.style.width = '210px';
text2.style.textAlign = 'center';
text.style.fontFamily = 'OpenSans';
text2.style.fontSize = '12px';
text2.style.color = '#FFFFFF';

let button2 = document.createElement('div');
let buttonText2 = document.createElement('div');
buttonText2.innerHTML = 'START HERE';
button2.appendChild(buttonText2);
div2.appendChild(button2);
button2.style.width = '147px';
button2.style.height = '46px';
button2.style.border = '3px solid #FFC80A';
button2.style.borderRadius = '60px';
buttonText2.style.fontFamily = 'Montserrat';
buttonText2.style.fontSize = '12px';
buttonText2.style.color = '#FFFFFF';
buttonText2.style.marginLeft = '32px';
buttonText2.style.marginTop = '16px';
button2.style.marginLeft = '126px';
button2.style.marginTop = '65px';

let conteiner = document.createElement('div');
document.body.appendChild(conteiner);
conteiner.appendChild(div1);
conteiner.appendChild(div2);
conteiner.style.display = 'flex';
conteiner.style.marginTop = '55px';
conteiner.style.marginLeft = '240px';
conteiner.style.marginBottom = '240px';