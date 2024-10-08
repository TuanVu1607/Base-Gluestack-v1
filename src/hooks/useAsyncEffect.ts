import { useEffect } from "react";

type AsyncEffect = () => Promise<void | (() => void)> | void;

/**
 * Custom hook `useAsyncEffect`
 *
 * Hook này tương tự như `useEffect`, nhưng hỗ trợ các hàm bất đồng bộ (async function) làm effect. Nó cho phép bạn sử dụng hàm bất đồng bộ trực tiếp trong `useEffect`.
 * 
 * @param {AsyncEffect} effect - Hàm async effect, có thể trả về một cleanup function hoặc `void`. Hàm này thường là một promise để thực hiện các thao tác bất đồng bộ (như gọi API, tải dữ liệu,...).
 * @param {React.DependencyList} dependencies - Danh sách các dependencies mà nếu chúng thay đổi, effect sẽ được thực thi lại. Nếu không có dependencies, hãy để mảng rỗng.
 * 
 * ### Cách hoạt động:
 * - Hook này thực hiện một effect bất đồng bộ khi component mount hoặc khi dependencies thay đổi.
 * - Nếu effect trả về một promise, hook sẽ đợi promise này hoàn thành, sau đó nếu promise trả về một hàm cleanup, hàm này sẽ được thực thi khi component unmount.
 * 
 * ### Ví dụ sử dụng:
 * ```tsx
 * useAsyncEffect(async () => {
 *   const data = await fetchDataFromAPI();
 *   setData(data);
 * 
 *   return () => {
 *     // Cleanup logic khi component unmount
 *   };
 * }, [dependency]);
 * ```
 */
const useAsyncEffect = (effect: AsyncEffect, dependencies: React.DependencyList) => {
    useEffect(() => {
        // Gọi effect và lưu trữ kết quả trả về (có thể là một promise)
        const cleanupPromise = effect();

        // Trả về hàm cleanup khi component unmount hoặc dependencies thay đổi
        return () => {
            if (cleanupPromise instanceof Promise) {
                // Đợi promise hoàn thành và thực thi hàm cleanup nếu có
                cleanupPromise.then((cleanup) => {
                    if (cleanup) {
                        cleanup();
                    }
                });
            }
        };
    }, dependencies);
};

export default useAsyncEffect;