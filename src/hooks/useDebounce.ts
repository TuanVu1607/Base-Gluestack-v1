import { useEffect } from "react";
import useTimeout from "./useTimeout";

/**
 * Custom hook `useDebounce`
 *
 * Hook này giúp trì hoãn (debounce) việc thực thi một callback function cho đến khi một khoảng thời gian cụ thể đã trôi qua kể từ lần gọi cuối cùng.
 * Nó sử dụng hook `useTimeout` để thực hiện việc này.
 * 
 * @param {Function} callback - Hàm callback để thực thi sau khi hết thời gian trì hoãn.
 * @param {number} delay - Thời gian trì hoãn tính bằng mili giây.
 * @param {React.DependencyList} dependencies - Danh sách các dependencies mà khi chúng thay đổi, callback sẽ được thực thi lại sau thời gian trì hoãn. Nếu không có dependencies, hãy để mảng rỗng.
 */
function useDebounce(
  callback: () => void,
  delay: number,
  dependencies: React.DependencyList
) {
  // Sử dụng hook useTimeout để quản lý thời gian trì hoãn
  const { reset, clear } = useTimeout(callback, delay);

  // Thiết lập lại thời gian trì hoãn khi dependencies thay đổi
  useEffect(() => {
    reset();
    // Cleanup function để hủy bỏ thời gian trì hoãn khi dependencies thay đổi
    return () => clear();
  }, [...dependencies, reset]);

  // Cleanup function để hủy bỏ thời gian trì hoãn khi component unmount
  useEffect(() => {
    return () => clear();
  }, [clear]);
}

export default useDebounce;