document.addEventListener("DOMContentLoaded", () => {
    //ручка куда отправляем инпут
    const URL = 'https://jsonplaceholder.typicode.com/posts'

    const btnOpenModal = document.getElementById("modal_btn"),
        modalContent = document.querySelector(".modal__content"),
        modal = document.querySelector(".modal"),
        btnCloseModal = document.querySelector(".modal__close"),
        form = document.querySelector(".modal__form"),
        input = document.querySelector(".modal__input")

    //показзываем модалку
    function openModal() {
        modal.classList.add("active")
    }

    btnOpenModal.addEventListener("click", openModal)

    //скрываем  модалку
    function closeModal() {
        modal.classList.remove("active")
    }

    btnCloseModal.addEventListener("click", closeModal)

    //закрытие модалки при клике в любую часть экрана, кроме содержимого самой модалки
    modal.addEventListener("click", closeModal)
    modalContent.addEventListener("click", (e) => e.stopPropagation())

    //закрытие модалки при нажатии на клавишу esc
    document.addEventListener("keydown", function (e) {

        if (e.keyCode === 27) {
            closeModal()
        }
    });

    //отправка запроса на сервер
    async function sendData(data) {
        let mod_id = document.querySelector('div[id="mod_id"]');

        return await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                ModID: mod_id,
                Type: 10,  // 10 - Дубликат
                Body: {
                    DuplicateLink: data
                }
            })
        }).then(response => {
            return response.json()
        }).then(data => {
            return data
        }).catch(error => {
            alert(error.message)
        })
    }


    async function onSubmit(event) {
        event.preventDefault()
        const inputValue = {
            link: input.value
        }

        const response = await sendData(inputValue)
        //выводим результат
        alert(response)

        //закрываем модалку после ответа
        closeModal()
    }

    form.addEventListener("submit", onSubmit)
})


