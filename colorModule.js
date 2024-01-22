export const cambiarColorNegro = (div2, div3, BottomBox, BottomTitle, BottomSubtitle, body) => {
    const computedStyleDiv2 = getComputedStyle(div2);
    if (computedStyleDiv2.backgroundColor === "rgb(119, 126, 120)") {
        div2.style.backgroundColor = "white";
        div3.style.backgroundColor = "white";
        BottomBox.style.backgroundColor = "white";
        BottomTitle.style.color = "black";
        body.style.backgroundImage = 'url("FondoDePantalla2.jpg")';
        BottomSubtitle.forEach(subtitle => {
            subtitle.style.color = "black";
        });
    } else {
        div2.style.backgroundColor = "#777E78";
        div3.style.backgroundColor = "#898A80";
        BottomBox.style.backgroundColor = "#252B2B";
        BottomTitle.style.color = "#898A80";
        body.style.backgroundImage = 'url("FondoDePantalla.jpg")';
        BottomSubtitle.forEach(subtitle => {
            subtitle.style.color = "#898A80";
        });
    }
};