import { useCallback, useEffect, useState } from 'react';

type AsyncCallback<T> = () => Promise<T>;

interface AsyncResult<T> {
    loading: boolean;
    error: any;
    value: T | undefined;
}

/**
 * Custom hook `useAsync`
 *
 * Dùng khi cần thực hiện một thao tác bất đồng bộ (như gọi API, tải dữ liệu từ cache, v.v.)
 * và theo dõi trạng thái của nó như `loading`, `error`, và giá trị trả về `value`.
 *
 * Hook này thường được sử dụng khi bạn muốn quản lý trạng thái của một yêu cầu bất đồng bộ
 * trong một component, thay vì phải tự viết logic để theo dõi các trạng thái khác nhau.
 *
 * @param {AsyncCallback<T>} callback - Hàm bất đồng bộ, ví dụ như gọi API hoặc tải dữ liệu từ cache. Hàm này nên trả về một `Promise`.
 * @param {React.DependencyList} dependencies - Danh sách các dependencies mà nếu chúng thay đổi, hook sẽ thực thi lại hàm callback. Nếu không có dependencies, hãy để mảng rỗng.
 * 
 * @returns {AsyncResult<T>} - Kết quả trả về gồm ba trạng thái: `loading`, `error`, và `value`.
 * 
 * ### Các trường hợp sử dụng phổ biến:
 * - Gọi API để tải dữ liệu từ server.
 * - Đọc dữ liệu từ bộ nhớ cache (local storage, IndexedDB).
 * - Bất kỳ thao tác bất đồng bộ nào cần quản lý trạng thái trong React.
 *
 * ### Ví dụ sử dụng:
 * ```tsx
 * const { loading, error, value } = useAsync(async () => {
 *   const response = await fetchDataFromAPI();
 *   return response.data;
 * }, [dependency]);
 * 
 * if (loading) return <View>Loading...</View>;
 * if (error) return <View>Error occurred: {error.message}</View>;
 * return <View>Data: {value}</View>;
 * ```
 */
const useAsync = <T>(
    callback: AsyncCallback<T>,
    dependencies: React.DependencyList = []
): AsyncResult<T> => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>();
    const [value, setValue] = useState<T | undefined>();

    // Memoize callback để tránh callback được gọi lại không cần thiết trừ khi dependencies thay đổi
    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);

        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false));
    }, dependencies);

    // useEffect để thực thi hàm callback mỗi khi dependencies hoặc callbackMemoized thay đổi
    useEffect(() => {
        callbackMemoized();
    }, [callbackMemoized]);

    return { loading, error, value };
}

export default useAsync;