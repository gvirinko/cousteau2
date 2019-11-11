
export class EnlargedPopup {
    constructor(container, url) {
        this.container = container;
        this.url = url;
        this.button = this.container.querySelector('.popup-enlarged__close');

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.open();

        this.button.addEventListener('click', this.close);
    }
    open() {
        document.querySelector('.popup-enlarged__image').src = this.url;
        this.container.classList.add('popup_is-opened');
    }
    close() {
        this.container.classList.remove('popup_is-opened');
    }
}
