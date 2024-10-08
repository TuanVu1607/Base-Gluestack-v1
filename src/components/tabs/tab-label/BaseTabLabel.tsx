import {Text} from '@gluestack-ui/themed';

interface BaseTabLabelProps {
  label: string;
  color: string;
  fontSize: number;
  position: string;
}

const BaseTabLabel = ({
  label,
  color,
  fontSize,
  position,
}: BaseTabLabelProps) => {
  return (
    <Text key={position} color={color} fontSize={fontSize} fontWeight={'bold'}>
      {label}
    </Text>
  );
};

export default BaseTabLabel;
