import Link from 'next/link';
import styles from './styles/page.module.scss'
import AverageButton from '@/app/average-component/button';

export default async function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.hero}>
        this is an average design system
      </h1>

      <Link href="/component/button">
        <div className={styles.card}>
          <h2 className={styles['component-title']}>
            Button
          </h2>
        </div>
      </Link>

      {/* <div className={styles['example-grid']}>

        {buttons.map((button, index) => (
          <div
            key={index}
            className={styles['example-container']}>
            <p>
              {button.get('System') as string} - {button.get('Type') as string} - {button.get('Size') as string}
            </p>
            <div 
              className={styles['example']}>
              <AverageButton
                height={button.get('Height') as number}
                padding={button.get('Padding') as string}
                borderRadius={button.get('Border Radius') as number}
                fontSize={button.get('Font Size') as number}
                lineHeight={button.get('Line Height') as number}
                borderWidth={button.get('Border Width') as number}
                bgColor={button.get('Background Color') as string}
                textColor={button.get('Text Color') as string}
                borderColor={button.get('Border Color') as string}
                />
            </div>
          </div>
        ))}

      </div> */}
    </main>
  )
}

// export default function Page() {
//   return (<div>Page</div>)
// }