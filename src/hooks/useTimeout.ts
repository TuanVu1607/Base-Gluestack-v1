import { useCallback, useEffect, useRef } from 'react';

interface UseTimeoutResult {
    reset: () => void;
    clear: () => void;
}
/**
 * Custom hook `useTimeout`
 * 
 * Hook này cho phép bạn thiết lập và quản lý một `setTimeout` mà có thể dễ dàng
 * thiết lập lại (reset) hoặc xóa bỏ (clear) khi cần thiết.
 * 
 * @param callback - Hàm được gọi sau khi hết thời gian delay
 * @param delay - Thời gian trì hoãn (ms) trước khi callback được thực thi
 * @returns { reset, clear } - Hai hàm để reset hoặc clear timeout
 */
const useTimeout = (callback: () => void, delay: number): UseTimeoutResult => {
    // useRef lưu trữ hàm callback để đảm bảo hàm mới nhất luôn được gọi khi timeout chạy
    const callbackRef = useRef(callback);
    // useRef lưu trữ ID của timeout hiện tại để có thể xóa timeout nếu cần thiết
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Cập nhật callbackRef với phiên bản callback mới nhất mỗi khi callback thay đổi
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // Hàm set tạo ra một timeout mới sử dụng delay và callback hiện tại
    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    // Hàm clear sẽ xóa timeout nếu có một timeout hiện đang chạy
    const clear = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null; // Reset timeoutRef về null sau khi xóa
        }
    }, []);

    // Sử dụng useEffect để thiết lập timeout khi hook này được sử dụng, và xóa nó khi component bị unmount
    useEffect(() => {
        set(); // Thiết lập timeout ban đầu
        return clear;  // Cleanup timeout khi component bị unmount hoặc khi delay thay đổi
    }, [delay, set, clear]);

    // Hàm reset sẽ xóa timeout hiện tại và tạo một timeout mới
    const reset = useCallback(() => {
        clear();  // Xóa timeout hiện tại
        set();    // Thiết lập timeout mới
    }, [clear, set]);

    // Trả về hai hàm reset và clear để có thể sử dụng bên ngoài
    return { reset, clear };
};

export default useTimeout;