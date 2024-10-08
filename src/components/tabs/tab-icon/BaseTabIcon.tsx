import {SvgProps} from 'react-native-svg';

interface BaseTabIconProps {
  focused: boolean;
  iconColor: string;
  iconSize: number;
  IconActive: React.FC<SvgProps>;
  IconInactive?: React.FC<SvgProps>;
  keyItem: string;
}

const BaseTabIcon = ({
  focused,
  iconColor,
  iconSize,
  IconActive,
  IconInactive,
  keyItem,
}: BaseTabIconProps) => {
  if (!IconInactive) {
    return (
      <IconActive
        key={keyItem}
        width={iconSize}
        height={iconSize}
        fill={iconColor}
      />
    );
  }

  return focused ? (
    <IconActive
      key={keyItem}
      width={iconSize}
      height={iconSize}
      fill={iconColor}
    />
  ) : (
    <IconInactive
      key={keyItem}
      width={iconSize}
      height={iconSize}
      fill={iconColor}
    />
  );
};

export default BaseTabIcon;
