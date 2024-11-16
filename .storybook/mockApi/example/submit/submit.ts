import { ExampleFormSchema } from "../../../../src/components/pages/FormPage/ExampleForm/ExampleForm.schema";

const submit = async (data: ExampleFormSchema): Promise<void> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
};

export default submit;
