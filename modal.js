document.addEventListener("DOMContentLoaded", () => {
    //ручка куда отправляем инпут
    const URL = 'https://jsonplaceholder.typicode.com/posts'

    const btnOpenModal = document.getElementById("modal_btn"),
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

    //отправка запроса на сервер

    async function sendData(data) {
        return await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
    }


    async function onSubmit(event) {
        event.preventDefault()
        const inputValue = {
            link: input.value
        }

        const response = await sendData(inputValue)

        alert(response)
    }

    form.addEventListener("submit", onSubmit)
})
