'use server'

import Tesseract from "tesseract.js";

export async function recognizeAction(formData: FormData) {
  const worker = await Tesseract.createWorker('chi_tra');
  const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
  console.log(text);
  await worker.terminate();
}