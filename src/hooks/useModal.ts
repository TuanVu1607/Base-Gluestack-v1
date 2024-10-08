import { useState } from 'react';

/**
 * Custom hook `useModal`
 *
 * Hook này giúp quản lý trạng thái của một modal (hộp thoại) trong ứng dụng.
 * Nó cung cấp các hàm để hiển thị và ẩn modal, cùng với trạng thái hiện tại của modal.
 * 
 * @returns {{
*   isVisible: boolean;
*   showModal: () => void;
*   hideModal: () => void;
* }} - Trả về một object chứa:
*   - `isVisible`: Trạng thái hiện tại của modal (boolean), cho biết modal có đang hiển thị hay không.
*   - `showModal`: Hàm để hiển thị modal.
*   - `hideModal`: Hàm để ẩn modal.
* 
* ### Ví dụ sử dụng:
* ```tsx
* const { isVisible, showModal, hideModal } = useModal();
* 
* return (
*   <>
*     <Button onClick={showModal}>Show Modal</Button>
*     <Modal isOpen={isVisible} onClose={hideModal} />
*   </>
* );
* ```
*/
const useModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    const showModal = () => setIsVisible(true);

    const hideModal = () => setIsVisible(false);

    return { isVisible, showModal, hideModal };
};

export default useModal;