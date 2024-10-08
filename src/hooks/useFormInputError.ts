import { useState } from "react";

/**
 * Custom hook `useFormInputError`
 *
 * Hook này giúp quản lý trạng thái giá trị của trường input và thông báo lỗi trong React Native.
 * Nó đơn giản hóa việc xử lý lỗi bằng cách sử dụng hai state: một để lưu giá trị của input và một để lưu thông báo lỗi.
 * 
 * @param {string} initialValue - Giá trị khởi tạo của trường input.
 * @param {function} validate - Hàm kiểm tra điều kiện. Nhận giá trị hiện tại của input và trả về thông báo lỗi nếu có, hoặc chuỗi rỗng nếu không có lỗi.
 * @returns {object} - Trả về một object chứa:
 *   - `value`: Giá trị hiện tại của trường input.
 *   - `error`: Thông báo lỗi tương ứng với giá trị hiện tại của input.
 *   - `handleChange`: Hàm để cập nhật giá trị của input và kiểm tra lỗi.
 */
const useFormInputError = (initialValue: string, validate: (value: string) => string) => {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<string>('');

    // Hàm xử lý sự kiện thay đổi giá trị của trường input và kiểm tra lỗi
    const handleChange = (text: string) => {
        setValue(text);
        const errorMessage = validate(text);
        setError(errorMessage);
    };

    return { value, error, handleChange };
}

export default useFormInputError;