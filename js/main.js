particlesJS("particles-js", 
{
    "particles": {
        "number": {
            "value":100,
            "density": {
                "enable":true,
                "value_area":700
            }
        },
        "color":{
            "value": "#fff"
        },
        "shape":{
            "type":"circle",
            "stroke": {
                "width":10,
                "color":"#000"
            },
            "polygon": {
                "nb_sides":20
            },
            "image":{
                "src":"img/github.svg",
                "width":100,
                "height":100
            }
        },
        "opacity": {
            "value":1,
            "random":true,
            "anim":{
                "enable":true,
                "speed":1,
                "opacity_min":0.1,
                "sync":false
            }
        },
        "size": {
            "value":0,
            "random":false,
            "anim": {
                "enable":false,
                "speed":10,
                "size_min":1,
                "sync":false
            }
        },
        "line_linked":{
            "enable":true,
            "distance":200,
            "opacity":0.1,
            "width":2
        },
        "move": {
            "enable":true,
            "speed":2,
            "direction":"none",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract": {
                "enable":false,
                "rotateX":600,
                "rotateY":1200
            }
        }
    },
    "interactivity": {
        "detect_on":"canvas",
        "events": {
            "onhover": {
                "enable":true,
                "mode":"grab",
                "color":"red"
            },
            "onclick": {
                "enable":false,
                "mode":"push"
            },
            "resize":true
        },
        "modes": {
            "grab":{
                "distance":200,
                "line_linked": {
                    "opacity":1
                }
            },
            "bubble": {
                "distance":400,
                "size":40,
                "duration":2,
                "opacity":8,
                "speed":3
            },
            "repulse": {
                "distance": 200,
                "duration":0.4
            },
            "push": { 
                "particles_nb":2
            },
            "remove":{
                "particles_nb":2
            }
        }
    },
    "retina_detect":true
});

let count_particles;
let update; 
console.log(window.pJSDom[0].pJS.particles)
count_particles = document.querySelector('.js-count-particles'); 
update = function() { 
    requestAnimationFrame(update); 
}; 
requestAnimationFrame(update);


let entry           = document.querySelector('#entry');
let lupa            = document.querySelector('.lupa')
let background_back = document.querySelector(".background_back")
let pop_up          = document.querySelector('.pop_up')
let manifest        = document.querySelector(".manifest")
let send_form       = document.querySelector(".send_form")
let input_style     = document.querySelectorAll('.input_style')
let form            = document.querySelector(".form")

lupa.addEventListener('click', () => {
    document.querySelector('.entry').style.display = 'none'
    document.querySelector(".form").style.display = 'block'
})
document.addEventListener('keydown', function(event) {
    if (event.code == "Enter") {
        document.querySelector('.entry').style.display = 'none'
        document.querySelector(".form").style.display = 'block'
    }
});


background_back.addEventListener('click', (e) => {
    e.preventDefault()
    pop_up.style.display = 'none'
    background_back.style.display = 'none'
})

manifest.addEventListener('click', (e) => {
    e.preventDefault()
    pop_up.style.display = 'block'
    background_back.style.display = 'block'
})

send_form.onclick = async (e) => {
    e.preventDefault()
	let formData = new FormData();
	let flag = true

	// for(let i = 0; i < input_style.length; i++) {
	// 	if(input_style[i].value.length == 0) {
    //         flag = false
	// 	} 
	// }

    console.log(true)
    formData.append("Email", document.querySelector('.first').value)
    formData.append("Facebook", document.querySelector('.second').value)
    formData.append("Telegram", document.querySelector('.third').value)
    formData.append("entry", entry.value)

    let response = await fetch(`https://spidernet.info/?main.cgi`, {
        method: "POST",
        body: formData 
    }).then(function(data) {
        if (data.ok) {
            console.log(data)
            return data.json()
        }
    })   
    document.querySelector('.entry').style.display = 'block'
    document.querySelector(".form").style.display = 'none'        
}

document.querySelector(".close_manifest").addEventListener('click', () => {
    pop_up.style.display = 'none'
    background_back.style.display = 'none'
})
document.querySelector(".close_form").addEventListener('click', () => {
    document.querySelector('.entry').style.display = 'block'
    document.querySelector(".form").style.display = 'none'
})