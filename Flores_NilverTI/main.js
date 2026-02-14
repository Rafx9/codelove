onload = () => {
    document.body.classList.remove("container");
    const audio = document.getElementById("music");
    if(audio) {
        audio.play().catch(e => console.log("Haz clic para reproducir música"));
    }
    startTypewriter();
};

const poemText = 
`La verdad no sé cómo empezar,
cómo expresar algo que no puede terminar,
cómo describir lo que no se puede describir,
porque sí, cuando te pienso me pierdo
y es que completas tanto mi sentir
que es inefable para poderlo describir.

Desde que te conocí
no pude dejar de sentir por ti.
Algo en ti me decía "conócela".
Descubre qué le entristece y abrázala,
acompáñala, tómale de la mano y no se la sueltes.
Y quién diría que un día sin pensarlo
Él me lo permitiría
y tú en mí te fijarías.

Porque sí, Él siempre estuvo allí,
guiándonos para encontrarnos,
encontramos y amarnos,
amarnos y complementarnos.

Sé que el amor no es fácil.
Aprender y errar es importante,
y es que de eso se trata,
el vivir siempre anhelándote.

He leído muchos poemas en mi vida,
corazones que hablan a través de una pluma y letra,
escritos que llenan el alma,
poetas con una razón para escribir.
Y aunque no sea el mejor de los poetas,
yo también tengo mi inspiración
para hablarte con el corazón,
para que escuches lo que mi alma te quiere decir.

Y aunque, como lo dije al principio,
nunca podré lograr describir
todo aquello que tú me haces sentir.
Porque sí, cuando se trata de hablar de ti,
no existe pluma y papel
que logren expresar
la razón de escribir
de este romántico poeta.`;

function startTypewriter() {
    const container = document.getElementById("poem-text");
    let i = 0;
    const speed = 50; 

    function type() {
        if (i < poemText.length) {
            let char = poemText.charAt(i);
            
            if (char === '\n') {
                container.innerHTML += '<br>';
            } else {
                container.innerHTML += char;
            }
            
            i++;
            const scrollContainer = document.querySelector('.poem-container');
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
            
            setTimeout(type, speed);
        }
    }
    setTimeout(type, 2000);
}