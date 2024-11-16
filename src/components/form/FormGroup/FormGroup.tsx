type FormGroupProps = {
  children?: React.ReactNode;
};

function FormGroup({ children }: FormGroupProps): JSX.Element | null {
  return (
    <div className="flex flex-col p-4 rounded-lg bg-neutral-200/50 dark:bg-neutral-800/50 not-last-child:border-b-4 not-last-child:border-neutral-50 not-last-child:pb-4 not-first-child:pt-4 dark:not-last-child:border-neutral-900">
      {children}
    </div>
  );
}

export default FormGroup;
