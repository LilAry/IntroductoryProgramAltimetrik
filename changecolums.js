
window.addEventListener('load',function (){
    const threeColumns = document.getElementById("three-col");
    const oneColumn = document.getElementById("one-col");
    oneColumn.addEventListener('click',ChangeGrid);
    threeColumns.addEventListener('click',ChangeGrid2);
    });


function ChangeGrid() {
    const svgReactOC = document.getElementById("grid-icons2");
    const svgpathOC = document.getElementById("grid-icons-inside2");
    const svgReactTC = document.getElementById("grid-icons");
    const svgpathTC = document.getElementById("grid-icons-inside");
    svgReactTC.style.fill= 'var(--gridBackground2)';
    svgpathTC.style.fill= 'var(--gridBackground)';
    svgReactOC.style.fill= 'var(--gridBackground)';
    svgpathOC.style.fill= 'var(--font-color)';
    const firstD = document.querySelector('#container-div');
    if(firstD.className==='div45'){
        document.querySelector('.div45').className = 'div45OneC';
        const div1 = document.querySelectorAll('.div1');
        div1.forEach(function(elem) {
            elem.className = 'div1OneC';
        });
        const cardContent = document.querySelectorAll('.card-content');
        cardContent.forEach(function(elem) {
            elem.className = 'card-contentOneC';
        });
        const cardBody = document.querySelectorAll('.card-body');
        cardBody.forEach(function(elem) {
            elem.className = 'card-bodyOneC';
        });
        const cardTitle = document.querySelectorAll('.card-title');
        cardTitle.forEach(function(elem) {
            elem.className = 'card-titleOneC';
        });
        const Numer = document.querySelectorAll('.Number');
        Numer.forEach(function(elem) {
            elem.className = 'NumberOneC';
        });
        const descriptionC = document.querySelectorAll('.Description-content');
        descriptionC.forEach(function(elem) {
            elem.className = 'Description-contentOneC';
        });
        const description = document.querySelectorAll('.Description');
        description.forEach(function(elem) {
            elem.className ='DescriptionOneC';
        });
        const descriptionT = document.querySelectorAll('.DescriptionText');
        descriptionT.forEach(function(elem) {
            elem.className = 'DescriptionTextOneC';
        });
        const description2 = document.querySelectorAll('.Description2');
        description2.forEach(function(elem) {
            elem.className = 'Description2OneC';
        });
        const info = document.querySelectorAll('.info');
        info.forEach(function(elem) {
            elem.className = 'infoOneC';
        });
        const info2 = document.querySelectorAll('.info2');
        info2.forEach(function(elem) {
            elem.className = 'info2OneC';
        });
        const logos = document.querySelectorAll('.logos');
        logos.forEach(function(elem) {
            elem.className = 'logosOneC';
        }); 
        const desctext = document.querySelectorAll('.textD');
        desctext.forEach(function(elem) {
            elem.className = 'textDOneC';
        });
        const heart1 = document.querySelectorAll('.div4-image');
        heart1.forEach(function(elem) {
            elem.className = 'div4OneC-image';
        }); 
    }   
    }

function ChangeGrid2(){
    const svgReactOC = document.getElementById("grid-icons2");
    const svgpathOC = document.getElementById("grid-icons-inside2");
    const svgReactTC = document.getElementById("grid-icons");
    const svgpathTC = document.getElementById("grid-icons-inside");
    svgReactTC.style.fill= 'var(--gridBackground)';
    svgpathTC.style.fill= 'var(--font-color)';
    svgReactOC.style.fill= '#515151';
    svgpathOC.style.fill= 'var(--gridBackground2)';
    const firstD = document.querySelector('#container-div');
    if(firstD.className==='div45OneC'){
        document.querySelector('.div45OneC').className = 'div45';
        const div1 = document.querySelectorAll('.div1OneC');
        div1.forEach(function(elem) {
            elem.className = 'div1';
        });
        const cardContent = document.querySelectorAll('.card-contentOneC');
        cardContent.forEach(function(elem) {
            elem.className = 'card-content';
        });
        const cardBody = document.querySelectorAll('.card-bodyOneC');
        cardBody.forEach(function(elem) {
            elem.className = 'card-body';
        });
        const cardTitle = document.querySelectorAll('.card-titleOneC');
        cardTitle.forEach(function(elem) {
            elem.className = 'card-title';
        });
        const Numer = document.querySelectorAll('.NumberOneC');
        Numer.forEach(function(elem) {
            elem.className = 'Number';
        });
        const descriptionC = document.querySelectorAll('.Description-contentOneC');
        descriptionC.forEach(function(elem) {
            elem.className = 'Description-content';
        });
        const description = document.querySelectorAll('.DescriptionOneC');
        description.forEach(function(elem) {
            elem.className ='Description';
        });
        const descriptionT = document.querySelectorAll('.DescriptionTextOneC');
        descriptionT.forEach(function(elem) {
            elem.className = 'DescriptionText';
        });
        const description2 = document.querySelectorAll('.Description2OneC');
        description2.forEach(function(elem) {
            elem.className = 'Description2';
        });
        const info = document.querySelectorAll('.infoOneC');
        info.forEach(function(elem) {
            elem.className = 'info';
        });
        const info2 = document.querySelectorAll('.info2OneC');
        info2.forEach(function(elem) {
            elem.className = 'info2';
        });
        const logos = document.querySelectorAll('.logosOneC');
        logos.forEach(function(elem) {
            elem.className = 'logos';
        }); 
        const desctext = document.querySelectorAll('.textDOneC');
        desctext.forEach(function(elem) {
            elem.className = 'textD';
        }); 
        const heart1 = document.querySelectorAll('.div4OneC-image');
        heart1.forEach(function(elem) {
            elem.className = 'div4-image';
        }); 
    }   
    }