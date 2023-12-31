import styles from '../styles/averageComponent.module.scss'

export type ButtonProps = {
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
  children, data
}: any) => {
  const averages: ButtonProps = {
    height: 0,
    padding: '',
    borderRadius: 0,
    fontSize: 0,
    lineHeight: 0,
    borderWidth: 0,
    bgColor: '',
    textColor: '',
    borderColor: '',
  }

  data.forEach((button: any) => {
    averages.height = averages.height + button.height;
    averages.borderRadius = averages.borderRadius + button.borderRadius;
    averages.fontSize = averages.fontSize + button.fontSize;
    averages.lineHeight = averages.lineHeight + button.lineHeight;
    averages.borderWidth = averages.borderWidth + button.borderWidth;
  })

  averages.height = Math.round((averages.height / data.length) * 100)/100;
  averages.borderRadius = Math.round((averages.borderRadius / data.length) * 100)/100;
  averages.fontSize = Math.round((averages.fontSize / data.length) * 100)/100;
  averages.lineHeight = Math.round((averages.lineHeight / data.length) * 100)/100;
  averages.borderWidth = Math.round((averages.borderWidth / data.length) * 100)/100;

  return (
    <Button 
      height={averages?.height}
      padding={averages?.padding}
      borderRadius={averages?.borderRadius}
      fontSize={averages?.fontSize}
      lineHeight={averages?.lineHeight}
      borderWidth={averages?.borderWidth}
      bgColor={'blue'}
      textColor={'black'}
      borderColor={'transparent'}
    />
  );
}

const Button = ({
  ...props
}: ButtonProps) => {
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
  )
}

export default AverageButton;