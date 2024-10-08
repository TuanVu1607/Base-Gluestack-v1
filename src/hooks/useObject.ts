import { useCallback, useState } from 'react';

/**
 * Custom hook `useObject`
 *
 * Hook này được sử dụng để quản lý trạng thái của một object trong React.
 * Nó giúp dễ dàng cập nhật trạng thái của object mà không cần phải tạo các hàm cập nhật riêng cho từng thuộc tính.
 * 
 * @param {T} initialState - Giá trị khởi tạo của object (trạng thái ban đầu).
 * @returns {Array} - Trả về một mảng chứa:
 *   - `state`: Trạng thái hiện tại của object.
 *   - `updateState`: Hàm để cập nhật trạng thái, có thể nhận vào một field (thuộc tính của object) hoặc một object chứa nhiều cặp giá trị key-value để cập nhật.
 * 
 * ### Ví dụ sử dụng:
 * ```tsx
 * // Sử dụng hook để quản lý object trạng thái
 * const [state, updateState] = useObject({ name: "John", age: 30 });
 * 
 * // Cập nhật một thuộc tính cụ thể
 * updateState("name", "Doe");
 * 
 * // Hoặc cập nhật nhiều thuộc tính cùng lúc
 * updateState({ name: "Doe", age: 31 });
 * 
 * return (
 *   <View>
 *     <Text>{state.name}</Text>
 *     <Text>{state.age}</Text>
 *   </View>
 * );
 * ```
 */
const useObject = <T extends object>(initialState: T) => {
    const [state, setState] = useState<T>(initialState);

    const updateState = useCallback((fieldOrObject: keyof T | Partial<T>, value?: T[keyof T]) => {
        if (typeof fieldOrObject === 'object') {
            setState((prevState) => ({
                ...prevState,
                ...fieldOrObject,
            }));
        } else {
            setState((prevState) => ({
                ...prevState,
                [fieldOrObject]: value,
            }));
        }
    }, []);

    return [state, updateState];
};

export default useObject;
