{/* <i class="fa-solid fa-xmark"></i>
<i class="fa-solid fa-chevron-left"></i>
<i class="fa-solid fa-chevron-right"></i>
 */}
import { filterPaintingsByID } from "./utilities.js";
const state = {
    currentID: 0
}


const closeModal = () => {
 modal.classList.add('closed');
};
const loadModalContent = (modalContent,img) => {
    modalContent.innerHTML = `
    <img src='${img}' alt='' />
    `;
}
const showModal = (modal,arr,id) => {
 modal.classList.remove('closed');
 state.currentID = id;
 const modalContent = modal.querySelector("#modal-content")
 console.log(id);
 const painting = filterPaintingsByID(arr,id)
 loadModalContent(modalContent,painting[0].img.lg)
 
 
 
 modal.querySelector(".arrow-btns").addEventListener("click",(e) => {
    const isLeftArrow = e.target.classList.value.split(" ").includes("fa-chevron-left")
    if (isLeftArrow) {
        console.log(state.currentID);

        state.currentID = JSON.stringify(state.currentID -1)

        console.log(state.currentID);

        let newPainting = filterPaintingsByID(arr,state.currentID)
        console.log(newPainting);
        loadModalContent(modalContent,newPainting[0].img.lg)
    }
        if (!isLeftArrow) {
        console.log(state.currentID);

        state.currentID = JSON.stringify(state.currentID + 1)

        console.log(state.currentID);

        let newPainting = filterPaintingsByID(arr,state.currentID)
        console.log(newPainting);
        loadModalContent(modalContent,newPainting[0].img.lg)
    }
 })
};

export {showModal,closeModal}