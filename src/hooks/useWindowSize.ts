import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

/**
 * Custom hook `useWindowSize`
 *
 * Hook này trả về kích thước hiện tại của màn hình và tự động cập nhật khi màn hình thay đổi kích thước (ví dụ khi xoay thiết bị).
 * 
 * @returns {{
 *   width: number;
 *   height: number;
 * }} - Trả về một object chứa chiều rộng (`width`) và chiều cao (`height`) của màn hình.
 * 
 * ### Ví dụ sử dụng:
 * ```tsx
 * const Component = () => {
 *   const { width, height } = useWindowSize();
 *   return <View><Text>Width: {width}, Height: {height}</Text></View>;
 * }
 * ```
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  useEffect(() => {
    const onChange = (result: { window: { width: number; height: number } }) => {
      setWindowSize({
        width: result.window.width,
        height: result.window.height,
      });
    };

    // Đăng ký lắng nghe sự thay đổi kích thước màn hình
    const subscription = Dimensions.addEventListener('change', onChange);

    // Hủy đăng ký khi component bị unmount
    return () => {
      subscription.remove();
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
