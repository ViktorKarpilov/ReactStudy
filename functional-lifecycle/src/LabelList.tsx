import {
  useEffect,
  isValidElement,
  /* memo, */ useRef,
  useLayoutEffect,
} from 'react';

interface LabelListProps {
  labels: React.ReactElement[];
  onUpdated: (text: string) => any;
}

// New items:
// - treck update lifecycle
// - useLayoutEffect vs useEffect
// - memo: memoization of the component

const BaseLabelList = ({ labels, onUpdated }: LabelListProps) => {
  const renderCount = useRef(0);
  renderCount.current++;

  const updateMessage = 'List updated with new label';

  const lastLabel = isValidElement(labels[labels.length - 1])
    ? labels[labels.length - 1]?.props?.text
    : null;

  console.log(`## == <LabelList /> rendered: ${renderCount.current} == ##`);

  useEffect(() => {
    if (lastLabel && lastLabel !== updateMessage) {
      onUpdated(updateMessage);
    }
  }, [labels, lastLabel, onUpdated]);

  useEffect(() => {
    console.log(`USE EFFECT CALLED ${renderCount.current}`);
  });

  useLayoutEffect(() => {
    console.log(`USE LAYOUT EFFECT CALLED ${renderCount.current}`);
  });

  return (
    <ul id="label-list-items">
      {labels.map((label, index) => (
        <li key={index}>{label}</li>
      ))}
    </ul>
  );
};

// export const LabelList = memo(BaseLabelList);
export const LabelList = BaseLabelList;