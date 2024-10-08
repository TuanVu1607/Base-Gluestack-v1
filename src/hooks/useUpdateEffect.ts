import { useEffect, useRef } from 'react';

/**
 * Custom hook `useUpdateEffect`
 *
 * Hook này hoạt động giống như `useEffect`, nhưng nó sẽ không chạy callback trong lần render đầu tiên.
 * Thay vào đó, callback chỉ được thực thi trong những lần render sau khi dependencies thay đổi.
 * 
 * @param {Function} callback - Hàm callback để thực thi khi dependencies thay đổi (không chạy lần đầu).
 * @param {React.DependencyList} dependencies - Danh sách các dependencies mà khi chúng thay đổi, callback sẽ được thực thi.
 */
const useUpdateEffect = (
    callback: Function,
    dependencies: React.DependencyList
) => {
    // Dùng để xác định xem có phải lần render đầu tiên không
    const firstRenderRef = useRef(true);

    useEffect(() => {
        // Nếu là lần render đầu tiên, set lại ref và không thực hiện callback
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        // Thực thi callback nếu không phải lần render đầu tiên
        return callback();
    }, dependencies);
}

export default useUpdateEffect;
