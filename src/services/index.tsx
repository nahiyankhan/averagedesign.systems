import Airtable, { FieldSet, Records } from 'airtable';
import { ButtonData } from '@/types';

const base = new Airtable({apiKey: process.env.AIRTABLE_PAT}).base('appooQfFJY3DuNvKe');
let buttons: null | Records<FieldSet> = null;

export default async function getButtons(): Promise<Records<FieldSet>> {
  return new Promise((resolve, reject) => {
    base('Button').select({
      view: "Grid view"
    }).all(function page(err, records) {
      if (err) reject(err);

      if (!records) {
        reject("No records found");

        return;
      }

      buttons = records;

      resolve(records);
    });
  });
}

// export async function getButton(id: string) {
//   if (!buttons) {
//     await getButtons();
//   }

//   const button = buttons?.find((button: ButtonData) => button.id === id);

//   return button;
// }