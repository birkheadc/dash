type FormDescriptionProps = {
  description: string | undefined;
};

function FormDescription({
  description,
}: FormDescriptionProps): JSX.Element | null {
  if (description === undefined) {
    return null;
  }

  return <p className="max-w-3xl px-4">{description}</p>;
}

export default FormDescription;
