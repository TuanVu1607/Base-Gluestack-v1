import { useState } from "react";

/**
 * Custom hook `useFormInput`
 *
 * Hook này được sử dụng để quản lý trạng thái đầu vào (input) của các form fields trong React.
 * Nó giúp đơn giản hóa việc quản lý giá trị của các trường input và sự kiện thay đổi giá trị.
 * 
 * @param {string} initialValue - Giá trị khởi tạo của input (mặc định là chuỗi rỗng).
 * @returns {object} - Trả về một object chứa `value` và `onChange`. 
 *   - `value`: Giá trị hiện tại của input.
 *   - `onChange`: Hàm để cập nhật giá trị của input, thường được liên kết với sự kiện `onChange` của các phần tử input trong React.
 * 
 * ### Ví dụ sử dụng:
 * ```tsx
 * const { value, onChange } = useFormInput("initial value");
 * 
 * return <TextInput value={value} onChange={(e) => onChange(e.target.value)} />;
 * or
 * return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
 * ```
 */
const useFormInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);

    const onChange = (text: string) => setValue(text);

    return { value, onChange };
};

export default useFormInput;