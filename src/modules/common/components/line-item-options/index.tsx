/* eslint-disable react/require-default-props */
import { Text } from '@medusajs/ui';

type LineItemOptionsProps = {
  title: string
  content: string
  'data-testid'?: string
  'data-value'?: string
}

function LineItemOptions({
  title,
  content,
  'data-testid': dataTestid,
  'data-value': dataValue,
}: LineItemOptionsProps) {
  return (
    <Text
      data-testid={dataTestid}
      data-value={dataValue}
      className="inline-block txt-medium text-[#BFBFBF] w-full overflow-hidden text-ellipsis"
    >
      {title}
      :
      {content}
    </Text>
  );
}

export default LineItemOptions;
