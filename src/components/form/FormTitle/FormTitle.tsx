type FormTitleProps = {
  title: string | undefined;
};

function FormTitle({ title }: FormTitleProps): JSX.Element | null {
  if (title === undefined) return null;

  return <h2 className="px-4 text-xl font-bold">{title}</h2>;
}

export default FormTitle;
