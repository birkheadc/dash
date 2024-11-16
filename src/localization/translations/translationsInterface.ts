export default interface ITranslations {
  components: {
    form: {
      RoleInput: {
        RoleInputButton: {
          noRoles: string;
          plusNMore: string;
        };
        RoleInputModal: {
          cancel: string;
          save: string;
        };
      };
      errorCode: {
        loginFailed: string;
        registrationFailed: string;
      };
      status: {
        "400": string;
      };
      validationErrors: {
        passwordMatch: string;
        unexpected: string;
        equal: string;
        notEqual: string;
        required: string;
        email: string;
        needsUppercase: string;
        needsLowercase: string;
        needsNumber: string;
        needsSymbol: string;
        invalid_type: {
          number: string;
          integer: string;
        };
        too_small: {
          number: {
            inclusive: string;
            exclusive: string;
          };
          string: {
            inclusive: string;
            exclusive: string;
          };
        };
        too_big: {
          number: {
            inclusive: string;
            exclusive: string;
          };
          string: {
            inclusive: string;
            exclusive: string;
          };
        };
      };
      SubmitButton: {
        submit: string;
      };
      StandardForm: {
        invalid: string;
        cancel: string;
      };
    };
    common: {
      ThemeSwitch: {
        changeTheme: string;
      };
      PaginatedControls: {
        goToFirstPage: string;
        goToPrevPage: string;
        goToNextPage: string;
      };
      NoMoreData: {
        noMoreData: string;
      };
    };
  };
}
