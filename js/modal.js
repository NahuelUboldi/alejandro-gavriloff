{/* <i class="fa-solid fa-xmark"></i>
<i class="fa-solid fa-chevron-left"></i>
<i class="fa-solid fa-chevron-right"></i> */}
import { filterPaintingsByID } from "./utilities.js";

const closeModal = () => {
 modal.classList.add('closed');
};
const loadModalContent = (modalContent,img) => {
    modalContent.innerHTML = `
    <img src='${img}' alt='' />
    `;
}
const showModal = (modal,modalContent,arr,id) => {
 modal.classList.remove('closed');
 const painting = filterPaintingsByID(arr,id)
 loadModalContent(modalContent,painting[0].img.lg)
};

export {showModal,closeModal}