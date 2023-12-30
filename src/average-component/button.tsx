import styles from '../styles/averageComponent.module.scss'

type Props = {
  height: number;
  padding: string;
  borderRadius: number;
  fontSize: number;
  lineHeight: number;
  borderWidth: number;
  bgColor: string;
  textColor: string;
  borderColor?: string;
}

const AverageButton = ({
  ...props
}: Props) => {

  return (
    <div className={styles.button}
      style={{
        height: props.height + 'px',
        padding: props.padding.split(' ').map((padding) => padding + 'px').join(' '),
        borderRadius: props.borderRadius,
        borderWidth: props.borderWidth,
        backgroundColor: props.bgColor,
        borderColor: props.borderColor,
      }}
    >
      <span
       style={{
        fontSize: props.fontSize,
        lineHeight: props.lineHeight + 'px',
        color: props.textColor,
       }}>Hello World</span>
    </div>
  );
}

export default AverageButton;