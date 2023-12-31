import styles from '../../styles/page.module.scss'
import getButtons from '@/app/services'
import AverageButton, { ButtonProps } from "../../average-component/button"
import { useEffect, useState } from 'react';

export default async function ButtonPage() {
  const buttons = await getButtons();
  const buttonData: ButtonProps[] = [];

  if (buttons) {
    buttons.forEach((button) => {
      buttonData.push({
        height: button.get('Height') as number,
        paddingV: button.get('Padding V') as number,
        paddingH: button.get('Padding H') as number,
        borderRadius: button.get('Border Radius') as number,
        fontSize: button.get('Font Size') as number,
        lineHeight: button.get('Line Height') as number,
        borderWidth: button.get('Border Width') as number,
        bgColor: button.get('Background Color') as string,
        textColor: button.get('Text Color') as string,
        borderColor: button.get('Border Color') as string,
      });
    });
  } else {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.hero}>
        an average button
      </h1>

      <AverageButton
        data={buttonData}
      />
      
    </main>
  )
}