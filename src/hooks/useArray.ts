import { useState } from 'react';

/**
 * Custom hook `useArray`
 *
 * Hook này giúp quản lý một mảng với các phương thức để thao tác với mảng như thêm phần tử, lọc, cập nhật, xóa và xóa toàn bộ mảng.
 * 
 * @param {T[]} defaultValue - Giá trị khởi tạo của mảng.
 * @returns {{
 *   array: T[];
 *   set: React.Dispatch<React.SetStateAction<T[]>>;
 *   push: (element: T) => void;
 *   filter: (callback: (element: T, index: number, array: T[]) => boolean) => void;
 *   update: (index: number, newElement: T) => void;
 *   remove: (index: number) => void;
 *   clear: () => void;
 * }} - Trả về một object chứa các phương thức để thao tác với mảng:
 *   - `array`: Mảng hiện tại.
 *   - `set`: Hàm để thiết lập lại giá trị của mảng.
 *   - `push`: Hàm để thêm một phần tử mới vào mảng.
 *   - `filter`: Hàm để lọc mảng dựa trên một điều kiện.
 *   - `update`: Hàm để cập nhật một phần tử trong mảng tại vị trí chỉ định.
 *   - `remove`: Hàm để xóa một phần tử khỏi mảng tại vị trí chỉ định.
 *   - `clear`: Hàm để xóa toàn bộ mảng.
 * 
 * ### Ví dụ sử dụng:
 * ```tsx
 * const { array, push, remove, update, clear } = useArray<number>([1, 2, 3]);
 * 
 * push(4); // Thêm 4 vào mảng
 * update(1, 5); // Cập nhật phần tử tại index 1 thành 5
 * remove(0); // Xóa phần tử tại index 0
 * clear(); // Xóa toàn bộ mảng
 * ```
 */
const useArray = <T>(defaultValue: T[]) => {
    const [array, setArray] = useState<T[]>(defaultValue);

    // Thêm một phần tử mới vào mảng
    const push = (element: T) => {
        setArray((a) => [...a, element]);
    };

    // Lọc mảng dựa trên một callback
    const filter = (callback: (element: T, index: number, array: T[]) => boolean) => {
        setArray((a) => a.filter(callback));
    };

    // Cập nhật phần tử tại index chỉ định
    const update = (index: number, newElement: T) => {
        setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
    };

    // Xóa phần tử tại index chỉ định
    const remove = (index: number) => {
        setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
    };

    // Xóa toàn bộ mảng
    const clear = () => {
        setArray([]);
    };

    // Trả về các phương thức thao tác với mảng
    return { array, set: setArray, push, filter, update, remove, clear };
};

export default useArray;