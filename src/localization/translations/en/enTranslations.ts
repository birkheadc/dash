import ITranslations from "../translationsInterface";

const enTranslations: ITranslations = {
  components: {
    common: {
      NoMoreData: {
        noMoreData: "nothing more to load",
      },
      PaginatedControls: {
        goToFirstPage: "go to first page",
        goToPrevPage: "go to previous page",
        goToNextPage: "go to next page",
      },
      ThemeSwitch: {
        changeTheme: "change theme",
      },
    },
    form: {
      SubmitButton: {
        submit: "submit",
      },
      RoleInput: {
        RoleInputButton: {
          noRoles: "no special roles",
          plusNMore: " +{{n}} more",
        },
        RoleInputModal: {
          cancel: "cancel",
          save: "save",
        },
      },
      StandardForm: {
        invalid: "There were some problems with the form.",
        cancel: "cancel",
      },
      validationErrors: {
        passwordMatch: "Password does not match.",
        unexpected: "An unexpected error occurred: {{e}}",
        equal: "Must be '{{v}}'.",
        notEqual: "Must not be '{{v}}'.",
        required: "Required.",
        email: "Must be a valid email address.",
        needsUppercase: "Must contain an uppercase letter.",
        needsLowercase: "Must contain a lowercase letter.",
        needsNumber: "Must contain a number.",
        needsSymbol:
          "Must contain one of the following symbols: ^ $ * . [ ] { } ( ) ? - \" ! @ # % & / \\ , > < ' : ; | _ ~ ` + = ",
        invalid_type: {
          number: "Must be a number.",
          integer: "Must be a whole number.",
        },
        too_small: {
          number: {
            inclusive: "Must be at least {{n}}.",
            exclusive: "Must be greater than {{n}}.",
          },
          string: {
            inclusive: "Must be at least {{n}} characters.",
            exclusive: "Must be longer than {{n}} characters.",
          },
        },
        too_big: {
          number: {
            inclusive: "Must be at most {{n}}.",
            exclusive: "Must be less than {{n}}.",
          },
          string: {
            inclusive: "Must be at most {{n}} characters.",
            exclusive: "Must be shorter than {{n}} characters.",
          },
        },
      },
      status: {
        400: "There were one or more problems with your request.",
      },
      errorCode: {
        loginFailed: "Failed to login with these credentials.",
        registrationFailed:
          "Failed to register an account with these credentials.",
      },
    },
  },
};

export default enTranslations;
