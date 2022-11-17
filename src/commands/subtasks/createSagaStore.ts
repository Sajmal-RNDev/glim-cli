import * as fs from "fs";
import { sagaTemplate, sliceTemplate } from "../../template/store";
import { checkFileExist } from "../../utils/file-system";

export const createSagaStore = async (storename: string) => {
  const SAGAROOT = "./src/redux/sagas/";
  const SLICEROOT = "./src/redux/slices/";
  const SAGA = `${storename}.saga.ts`;
  const SLICE = `${storename}.slice.ts`;
  const saga = sagaTemplate(storename);
  const slice = sliceTemplate(storename);
  await checkFileExist([SAGAROOT, SLICEROOT], [SAGA, SLICE]);
  fs.writeFile(`./src/redux/sagas/${storename}.saga.ts`, saga, (err) => {
    !err &&
      console.log(
        `Created ${storename}.saga.ts in src/redux/sagas/${storename}`
      );
  });
  fs.writeFile(`./src/redux/slices/${storename}.slice.ts`, slice, (err) => {
    !err &&
      console.log(
        `Created ${storename}.slice.ts in src/redux/slices/${storename}`
      );
  });
};
