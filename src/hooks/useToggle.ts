import { useState } from "react";

/**
 * Custom hook `useToggle`
 *
 * Hook này giúp quản lý trạng thái boolean và cung cấp một hàm để đảo ngược trạng thái hiện tại.
 * Thường được sử dụng để tạo các cơ chế chuyển đổi (toggle) cho các tính năng trong ứng dụng.
 * 
 * @param {boolean} initialValue - Giá trị khởi tạo của trạng thái (mặc định là `false`).
 * @returns {object} - Trả về một object chứa:
 *   - `value`: Trạng thái hiện tại (boolean).
 *   - `toggle`: Hàm để đảo ngược trạng thái hiện tại.
 * 
 * ### Ví dụ sử dụng:
 * ```tsx
 * const { value: isToggled, toggle } = useToggle();
 * 
 * return (
 *   <Button onClick={toggle}>
 *     {isToggled ? "ON" : "OFF"}
 *   </Button>
 * );
 * ```
 */
const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue(!value);

    return { value, toggle };
}

export default useToggle;