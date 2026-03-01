const list = document.querySelector('#card-list');

export function RenderDoors(doors) {
        doors.forEach((door) => {
        let link_a = document.createElement('a');

         link_a.addEventListener('click', () => {
             window.open(door.img, '_blank')
         })


        let div_img = document.createElement('div');
        div_img.classList.add('card')
        let img = document.createElement('img');
        img.src = door.img;
        img.alt = '';

        let div_content = document.createElement('div');
        div_content.classList.add('card-content');

        let a = document.createElement('a');
        a.href = `https://t.me/cnskfho?text=${encodeURIComponent(`Хочу заказать ворота\n${location.origin}/${door.img}`)}`;
        a.classList.add('card-button');
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = 'Написать';

        link_a.appendChild(img);
        div_content.appendChild(a);

        div_img.appendChild(link_a);
        div_img.appendChild(div_content);

        list.appendChild(div_img);

        console.log(door.img)
    })

}
